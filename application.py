import logging
import uuid

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from generation.gen_ppt_outline import GenBody, GenTitle, GenOutline
from mdtree.tree2ppt import Tree2PPT
from schemas.request_schema import (
    TitleRequest,
    OutlineRequest,
    BodyRequest,
    PPTRequest,
)

HOST_URL = "https://46aa-113-190-253-97.ngrok-free.app"

# Initialize FastAPI application
app = FastAPI(
    title="Text2PPT API",
    description="API for generating PPTs from text",
    openapi_url="/openapi.json",
    docs_url="/docs",
    redoc_url="/re-doc",
    servers=[
        {
            "url": HOST_URL,
            "description": "Development server",
        }
    ],
)

# Setup logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],  # Allow all origins; replace "*" with specific domains in production
    allow_credentials=True,  # Allow credentials like cookies or headers
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
    expose_headers=["*"],  # Allow specific headers to be exposed
)

# Mount static files for JS, CSS, Media
app.mount("/static/js", StaticFiles(directory="templates/static/js"), name="js")
app.mount("/static/css", StaticFiles(directory="templates/static/css"), name="css")
app.mount(
    "/static/media", StaticFiles(directory="templates/static/media"), name="media"
)
app.mount("/static/ppt", StaticFiles(directory="myppt"), name="ppt")


@app.get("/")
async def index():
    return FileResponse("templates/index.html")


@app.get("/auto-ppt/gen-uuid")
async def get_uuid():
    random_uuid = str(uuid.uuid4())
    return random_uuid


@app.post("/generate_title")
async def generate_title(request: TitleRequest):
    ip_address = "Unknown IP"  # Can be extracted from `request.client.host` if required
    logging.info(f"ip地址为 {ip_address}\t uuid 为 {request.uuid}\t生成了标题")
    gen_title_v2 = GenTitle(request.uuid)
    content = gen_title_v2.predict_title_v2(
        request.form, request.role, request.title, request.topic_num
    )
    return StreamingResponse(content, media_type="application/octet-stream")


@app.post("/generate_outline")
async def generate_outline(request: OutlineRequest):
    ip_address = "Unknown IP"
    logging.info(f"ip地址为 {ip_address}\t uuid 为 {request.uuid}\t生成了大纲")
    gen_outline_v2 = GenOutline(request.uuid)
    content = gen_outline_v2.predict_outline_v2(request.title, request.requirement)
    # content = content.replace("```", "")
    return StreamingResponse(content, media_type="application/octet-stream")


@app.post("/generate_body")
async def generate_body(request: BodyRequest):
    ip_address = "Unknown IP"
    logging.info(f"ip地址为 {ip_address}\t uuid 为 {request.uuid}\t生成了全文")
    gen_body1 = GenBody(request.uuid)
    content = gen_body1.predict_body(request.outline, request.requirement)
    # content = content.replace("```", "")
    return StreamingResponse(content, media_type="application/octet-stream")


@app.post("/generate_ppt")
async def generate_ppt(request: PPTRequest):
    markdown_data = request.paper
    if not markdown_data:
        raise HTTPException(status_code=400, detail="No data provided")
    markdown_str = markdown_data.replace("\r", "\n")
    ip_address = "Unknown IP"
    logging.info(f"ip地址为 {ip_address}\t uuid md转换生成了ppt")

    ppt = Tree2PPT(markdown_str)
    path = ppt.get_file_path()
    filename = path.split("/")[-1]
    url_download = f"{HOST_URL}/static/ppt/{filename}"
    return StreamingResponse(
        url_download,
        media_type="application/octet-stream",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@app.post("/generate_ppt_markdown")
async def generate_ppt_markdown(request: PPTRequest):
    markdown_data = request.paper
    if not markdown_data:
        raise HTTPException(status_code=400, detail="No data provided")

    markdown_str = markdown_data.replace("\r", "\n")
    ppt = Tree2PPT(markdown_str)
    markdown = ppt.to_markdown()
    return StreamingResponse(
        markdown,
        media_type="application/octet-stream",
    )


@app.post("/generate_ppt_json")
async def generate_ppt_json(request: PPTRequest):
    markdown_data = request.paper
    if not markdown_data:
        raise HTTPException(status_code=400, detail="No data provided")

    markdown_str = markdown_data.replace("\r", "\n")
    ppt = Tree2PPT(markdown_str)
    json_ppt = ppt.to_json()
    return StreamingResponse(
        json_ppt,
        media_type="application/octet-stream",
    )


@app.get("/ppt")
async def generate_ppt_static(title1: str):
    session_id = str(uuid.uuid4())
    title = GenTitle(session_id)
    title.predict_title(title1)

    outline = GenOutline(session_id)
    outline.predict_outline("1")

    body = GenBody(session_id)
    md = body.predict_body("")

    ppt = Tree2PPT(md)
    stream = ppt.save_stream()
    return StreamingResponse(
        stream,
        media_type="application/vnd.openxmlformats-officedocument.presentationml.presentation",
        headers={"Content-Disposition": "attachment; filename=file.pptx_static"},
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=5000, reload=True)
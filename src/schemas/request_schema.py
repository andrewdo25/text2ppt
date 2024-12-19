from typing import Optional

from pydantic import BaseModel


class TitleRequest(BaseModel):
    uuid: str
    title: str
    role: str
    form: str
    topic_num: int


class OutlineRequest(BaseModel):
    uuid: str
    title: str
    requirement: Optional[str] = "clear structure"


class BodyRequest(BaseModel):
    uuid: str
    outline: str
    requirement: Optional[str] = "rich content"


class PPTRequest(BaseModel):
    paper: str

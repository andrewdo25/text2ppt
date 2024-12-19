import os
from typing import Optional

from dotenv import load_dotenv
from pydantic_settings import BaseSettings

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
load_dotenv(os.path.join(BASE_DIR, "../.env"))


class Settings(BaseSettings):
    PROJECT_NAME: str = os.getenv("PROJECT_NAME", "FastAPI")
    VERSION: str = os.getenv("VERSION", "0.1.0")
    PROJECT_DESCRIPTION: str = os.getenv("PROJECT_DESCRIPTION", "FastAPI Project")
    DEBUG: bool = os.getenv("DEBUG", True)
    HOST_URL: str = os.getenv("HOST_URL", "http://localhost:5000")
    PPT_DIR: str = os.getenv("PPT_DIR", "myppt")
    if not os.path.exists(PPT_DIR):
        os.makedirs(PPT_DIR)

    OPENAI_BASE_URL: str = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")

    REDIS_ENABLE: bool = os.getenv("REDIS_ENABLE", True)
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")

    LOG_LEVEL: Optional[str] = os.getenv("LOG_LEVEL", "DEBUG")

    class Config:
        env_file_encoding = "utf-8"
        case_insensitive = True
        extra = "ignore"


settings = Settings()

# <p align="center">Text2PPT: Generate Your PowerPoint Automatically</p>

## 🎞️ Project Introduction

Utilizing gpt-4o-mini and pptx, Text2PPT effortlessly generates PPTX files with specified themes.

## 🧲 Project Advantages

🌟 No more hassle: Simply enter the title, and Auto_PPT will instantly create a brand new PPTX for you without any extra effort!

🎩 The magic behind: We leverage the powerful gpt-4o-mini interface to ensure stable and impressive PPT outlines with every generation.

💡 Creative use of md format: We uniquely utilize the md format in a multi-step chain to generate PPT text, making PPTX creation easier and more stable. Say goodbye to formatting hassles and focus on content creation!

🔗 Optimized and refactored using langChain in v3.0: Thanks to langChain, the code becomes simple, easy, and aesthetically pleasing!

🖼️ Scenic illustrations: We collaborate with Unsplash to provide the most exquisite illustrations, instantly adding vitality and aesthetics to your PPT.

🔒 Secure local deployment: If you're concerned about data security, fret not! Auto_PPT supports local deployment; simply add your OpenAI API key and Unsplash API key information.

## 🎨 Deployment Guide

### With conda

> The project operation requires a Python environment, and it is recommended to use Python 3 or above. The author uses Python 3.9
> 1 Creating a conda environment

```bash
conda create -n text2ppt python=3.9
```

> 2 Activate conda environment

```bash
conda activate text2ppt
```

> 3 Install required Python components

```bash
pip install - r requirements.txt
```

> 4 Modify the .env file to include your OpenAI API key and Unsplash API key
> 5 Run Project
> Run

```bash
uvicorn application:app --host localhost --port 5000 --reload
```

> 6 Access <http:/localhost:5000>

### With Docker

```bash
docker-compose up -d --build
```

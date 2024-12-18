# Use the official Python 3.9 image
FROM python:3.9-slim

# Set environment variables to prevent Python from buffering stdout/stderr
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Create and set the working directory inside the container
WORKDIR /app

# Copy the project files to the container
COPY . /app

# Install required packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Expose the application's port
EXPOSE 5000

# Set the entrypoint for running the application
ENTRYPOINT ["uvicorn", "application:app", "--host", "0.0.0.0", "--port", "5000"]

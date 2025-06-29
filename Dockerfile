FROM python:3.10-slim
WORKDIR /app
COPY Project.py .
CMD ["python", "Project.py"]

FROM python:3.10-slim                  # use python image
WORKDIR /app                           # set working directory
COPY Project.py .                      # copy calculator project
CMD ["python", "Project.py"]           # Run the command for Python project 

# Instructions

- create `Dockerfile`
- use base image: `mcr.microsoft.com/dotnet/core/sdk:3.1`
- add env variable `ASPNETCORE_URLS=http://*:80`
- restore references
- run application
- build image
- run container (port exposed by container is 80)
- access application, see if CSS are loaded

## Commands

```
# get images
docker images

# get images with aspnet
docker images | grep aspnet

# get running containers
docker ps

# create image of name Name and tag Tag
docker build -t name:tag .

# tagging (many tags)
docker tag name newname:tag
docker tag newname:tag newname:tag2

# running container and mapping port 8000 on local computer to 80 on container, run container in background
docker run -d -p 8000:80 IMAGE_NAME:TAG

# running container and mapping port 8000 on local computer to 80 on container, attach terminal (-it)
docker run -it -p 8000:80 IMAGE_NAME:TAG

# running container and mapping port 8000 on local computer to 80 on container, when CTRL+C is press, container will be removed (--rm)
docker run --rm -it -p 8000:80 IMAGE_NAME:TAG
```

## Langauge

```
# creates image from base image
FROM image:tag AS name

# adds labels to image
LABEL version="1.0"

# creates if no exists and sets PWD to /app folder
WORKDIR /app

# copy from local computer to image (second . is app folder, first . is our docker context)
COPY . .

# similar, but we can use url or tar file as a source (first .)
ADD . .  

# executes command
RUN command

# sets env variables
ENV application=test

# informs docke that container listens on specific port
EXPOSE 8080

# default paremeters, easy to override
CMD [ "node", "index.js" ]
# default application, harder to override
ENTRYPOINT ["", ""]
```
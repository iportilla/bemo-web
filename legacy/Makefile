# Transform the machine arch into some standard values: "arm", "arm64", or "amd64"
SYSTEM_ARCH := $(shell uname -m | sed -e 's/aarch64.*/arm64/' -e 's/x86_64.*/amd64/' -e 's/armv.*/arm/')

# To build for an arch different from the current system, set this env var to one of the values in the comment above
#export ARCH ?= $(SYSTEM_ARCH)


# BADM 48030
export ARCH ?= amd64
export PORT ?= 88




# These variables can be overridden from the environment
export CHATBOT_NAME ?= bemo
export CHATBOT_VERSION ?= 1.0.0


DOCKER_NAME ?= $(ARCH)_$(CHATBOT_NAME)

#add your id in Docker Hub
export DOCKER_HUB_ID ?= iportilla


default: all

all: build run

build:
	docker build -t $(DOCKER_HUB_ID)/$(CHATBOT_NAME):$(CHATBOT_VERSION) -f ./Dockerfile.$(ARCH) .



run:
	-docker rm -f $(CHATBOT_NAME) 2> /dev/null || :
	docker run -d --name $(CHATBOT_NAME) -p $(PORT):9080  $(DOCKER_HUB_ID)/$(CHATBOT_NAME):$(CHATBOT_VERSION)
	@echo "Open your browser and go to http://localhost:"$(PORT)


check:
	docker logs -f $(DOCKER_NAME)

stop:
	-docker rm -f $(CHATBOT_NAME) 2> /dev/null || :


# Push the docker image to the registry. You must have write access to the docker hub openhorizon user
docker-push: build
	docker push $(DOCKER_HUB_ID)/$(DOCKER_NAME):$(CHATBOT_VERSION)

clean:
	-docker rm -f $(CHATBOT_NAME) 2> /dev/null || :
	-docker rmi $(DOCKER_HUB_ID)/$(CHATBOT_NAME):$(CHATBOT_VERSION) 2> /dev/null || :

.PHONY: default all build run check stop clean

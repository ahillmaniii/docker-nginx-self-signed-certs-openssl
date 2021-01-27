.DEFAULT_GOAL := all

all: build start

build:
	docker build -t nginx-selfsigned-node .
start:
	docker run -it -d -p 443:443 --name nginx-selfsigned-node nginx-selfsigned-node
clean:
	docker stop nginx-selfsigned-node
	docker rm nginx-selfsigned-node
prune:
	docker builder prune --all



.DEFAULT_GOAL := all

all: build start

build:
	docker build -t nginx-selfsigned-python .
start:
	docker run -it -d -p 443:443 --name nginx-selfsigned-python nginx-selfsigned-python
clean:
	docker stop nginx-selfsigned-python
	docker rm nginx-selfsigned-python
prune:
	docker builder prune --all



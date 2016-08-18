all: clean build

clean:
	mkdir -p build
	rm -rf build/*

build: chapter1

chapter1: build/1-1-hello

build/1-1-hello:
	gcc -g src/1-1-hello.c -o $@

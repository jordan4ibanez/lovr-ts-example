# you can have different runners for the make.
default:
	@npx tstl
	@./bin/linux/lovr-0.17.1 ./out/

install:
	@npm install

# This is just an example. I have no idea if this works. (if I did put the binary in) :D
windows:
	@npx tstl
	@./bin/windows/lovr-0.17.1.exe ./out/

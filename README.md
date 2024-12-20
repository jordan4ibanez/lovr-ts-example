# Hello
### Welcome to my mini tutorial/example of how to make a LOVR game in typescript.

## As you can see here, this has a few things:

1.) A make file.

I use a makefile because it's slightly easier to type multiple custom commands over and over with ``make run``, ``make build``, or even just ``make``.

2.) I like to separate out my ``src`` and ``out`` folders. 

I treat the lua files as "compiled binaries". You do not look at them unless you have to. (like if there's a compiler error from LOVR)

3.) This is an NPM project. You can use this to your advantage.

Combined with make, you can use the makefile to update, add, update, run, compile. Make your life a lot easier.

4.) The binaries are located in ``/bin/OS``.

This allows you to easily test on different operating systems. This also allows people to simply download your project and run it with a make command or maybe you built on top of this and made a little launcher thing for windows. You can have fun with it.

But people can also bring their own binaries. You don't actually have to ship binaries at all, but it makes development easier. Because LOVR actually has a better way to do this when you want to release on something like itch.io or steam: https://lovr.org/docs/Distribution

## So, to get started:

You'd make a folder then run:

```
npm init
```

in the root of the folder. This will walk you through it. Next you can do:

```
code .
```

Which will automatically open up VSCode in your project.

You can make the basic folder layout. ``src/`` is what I stick to. Then you can break it up into subfolders inside ``src/`` as your project becomes more complex.

Then you can layout the bin folder how you want. Maybe you don't even want a bin folder, you could just drop the binary straight into the root of your project if you feel like it. Do what you like!

As for this tutorial, I set it up as a developer that wants to test across different OSes easy. I literally unzipped the AppImage from the lovr website and left it like that lol.

Okay so next is the important part. I'm assuming you installed NPM at this point (lol). Run this in the root of your project:

```
npm install --save-dev typescript-to-lua typescript lovr-api
```

This has installed the necessary components you need to get started. 

#### BUT!

You gotta remember to tell your npm project where to find your types! :D

It's very easy. See the TSTL website for a basic ``tsconfig.json`` configuration here: https://typescripttolua.github.io/docs/getting-started

You simply create that ``tsconfig.json`` file in the root of your project and you next have to tell it where to add in the types. You should already have a blank ``"types": [],`` array which you can plop them in:

```json
# This is the base of the JSON table.
{
  "compilerOptions": {
    "types": [
      "lua-types/jit",
      "lovr-api/lovr-api",
    ],
  }
}
```


While you're in there, add these parts into the ``tstl`` section:

```json
# This is the base of the JSON table.
{
  "tstl": {
    // LOVR uses LuaJIT cause it's fast as heck!
    "luaTarget": "JIT",
    "luaPlugins": [],
    // I highly recommend you do this so you don't get globals all over the place!
    "noImplicitGlobalVariables": true,
    // This allows you to actually detect where your source code blows up in typescript.
    "sourceMapTraceback": true,
    // This prevents A LOT of annoying things.
    "noImplicitSelf": true
  }
}
```

I have one last thing that I recommend you do in that ``tsconfig.json`` file. But you don't have to do it if you don't care about your compiled lua mixing with your typescript.

Add these two parts into the ``compilerOptions`` section:
```json
{
  "compilerOptions": {
    "rootDir": "src/",
    "outDir": "out/",
  }
}
```

this will output all your compiled lua into a folder called ``out`` in the root of your project and keep your ``src`` folder clean and tidy.

#### Now, onto the makefile.

You can just copy this makefile if you're on linux. Important part is:

```makefile
# you can have different runners for the make.
default:
	@npx tstl
	@./bin/linux/lovr-0.17.1 ./out/
``` 

which basically allows you to run ``make`` and it will rebuild your changes and run your project automatically.

One more thing, before you upload your code to github. Make sure you ``.gitignore`` the node_modules folder. You do not want that mess in your repo. :D

So now you should be able to run this project with 2 simple commands:

```
make install
make
```

``make install`` is a shortcut to ``npm install`` so your brain doesn't have to flip flop from npm to make.

``make`` is a shortcut to dropping the ``out/`` folder into the executable in the ``bin`` directory. Basically telling LOVR, "my game is in this folder".

Anyways, that's all I got for you now, might update this tutorial/example with other stuff if it's needed. 

I will leave you with one last piece of advice: 

The docs are your friend: https://lovr.org/docs/

I hope you have fun making stuff! :D
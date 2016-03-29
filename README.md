# grajm - Gulp, Redux(@ngrx/store), Angular 2, Jspm, Material Design
### Credits
* Based on [Rob Wormald](https://gist.github.com/robwormald/429e01c6d802767441ec)

### Versions 
* angular@2.0.0-beta.12
* ng2-material@0.2.12
* @ngrx/store

### Use
<pre><code>
$ git clone https://github.com/z-bit/grajm-beta.12.git
$ cd grajm-beta.12
$ npm install -y
$ npm install jspm              //locally
$ jspm install
$ jspm install angular2 zone.js reflect-metadata
$ 

@keep installation, including jspm_packages & node_modules as base for projects
$ live-server
</code></pre>

### How To
<pre><code>
$ npm init -y
$ npm install --save-dev jspm
$ jspm init   // 7 x OK + typescript
$ jspm install ts angular2 zone.js reflect-metadata
 
@edit system.config:
    System.config({
        baseURL: "/",
        defaultJSExtensions: true,
        transpiler: "typescript",
        <b><i>typescriptOptions:{
            module:"commonjs",
            emitDecoratorMetadata: true
        }, 
        packages: {
            app: {
                main: "app",
                defaultExtension: "ts" 
            }
        },</b></i>    
        ...
        "paths": {
            "github:*": "jspm_packages/github/*",
            "npm:*": "jspm_packages/npm/*",
            
            //this lets us use <b>app</b> for our package as a sort of virtual directory
            <b><i>"app": "app"</b></i>
        },
        ...
    });    

@create file structure and files
    index.html 
    /app
        app.html
        app.ts
        /cmp            <== app components 
      
@edit index.html
@edit app.ts
@edit app.html
</code></pre>
* run code with live-server
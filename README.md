# mosquitojs-webgl

Mosquitojs is an extremely light dependency injection library for JavaScript. Inspired by AngularJS, mosquitojs enables the easy creation of modules, controllers and services; thus facilitating clean reusable code within your JavaScript projects.

The mosquitojs-webgl module utilises mosquitojs to enable WebGL access within your mosquito projects.

```html
<script src="mosquito.min.js"></script>
<script src="mosquitojs.webgl.min.js"></script>
```

### Bower
```bash
bower install mosquitojs
bower install mosquitojs-webgl
```

## Module
```bash
webGLModule
```
### Other Required Modules
```bash
none
```

## Service
```bash
$webGL
```
### Methods
#### initialise(htmlCanvasID)
Initialise a WebGL instance onto the appropriate HTML canvas.
#### getGL
Get the current WebGL instance.

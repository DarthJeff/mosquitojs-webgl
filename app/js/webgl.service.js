"use strict";

mosquito.module('webGLModule').service('$webGL', function() {
    var webGL;

    this.initialise = function(htmlCanvasID) {
        var canvas = document.getElementById(htmlCanvasID);
        webGL = canvas.getContext("webgl", {alpha: false, depth: true, stencil: true}) ||
              canvas.getContext("experimental-webgl", {alpha: false, depth: true, stencil: true});

        if (webGL === null) { throw "WebGL is not supported."; };

        webGL.blendFunc(webGL.SRC_ALPHA, webGL.ONE_MINUS_SRC_ALPHA);
        webGL.enable(webGL.BLEND);
        webGL.pixelStorei(webGL.UNPACK_FLIP_Y_WEBGL, true);
        webGL.enable(webGL.DEPTH_TEST);
        webGL.depthFunc(webGL.LEQUAL);
    };

    this.getGL = function() { return webGL; };
});

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"C9U5":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var n=function(){function e(){t(this,e),this.x=0,this.y=0,this.xv=0,this.yv=0,this.radius=0,this.alpha=0,this.reset()}return i(e,[{key:"reset",value:function(){this.x=this.randBetween(0,window.innerWidth),this.y=this.randBetween(0,-window.innerHeight),this.xv=this.randBetween(-2,2),this.yv=this.randBetween(2,5),this.radius=this.randBetween(1,4),this.alpha=this.randBetween(.1,.8)}},{key:"randBetween",value:function(t,e){return t+Math.random()*(e-t)}},{key:"update",value:function(){this.x+=this.xv,this.y+=this.yv,this.y+this.radius>window.innerHeight&&this.reset()}}]),e}(),s=function(){function e(){var i=this;t(this,e),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.onResize(),window.addEventListener("resize",function(){return i.onResize()}),this.boundUpdate=this.update.bind(this),this.createFlakes(),this.boundUpdate()}return i(e,[{key:"onResize",value:function(){this.height=window.innerHeight,this.width=window.innerWidth,this.canvas.height=this.height,this.canvas.width=this.width}},{key:"createFlakes",value:function(){this.flakes=window.innerWidth/4,this.snowflakes=[];for(var t=0;t<this.flakes;t++)this.snowflakes.push(new n)}},{key:"update",value:function(){this.ctx.clearRect(0,0,this.width,this.height);var t=!0,e=!1,i=void 0;try{for(var n,s=this.snowflakes[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var h=n.value;h.update(),this.ctx.fillStyle="#FFF",this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(h.x,h.y,h.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.globalAlpha=h.alpha,this.ctx.fill(),this.ctx.restore()}}catch(a){e=!0,i=a}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}requestAnimationFrame(this.boundUpdate)}}]),e}();new s;
},{}]},{},["C9U5"], null)
//# sourceMappingURL=snow.e6d92e5a.js.map
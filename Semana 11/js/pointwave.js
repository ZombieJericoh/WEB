(function e(t,n,r){function s(o,u){
  if(!n[o])
    {if(!t[o])
      {var a=typeof require=="function"&&require;
      if(!u&&a)return a(o,!0);
      if(i)return i(o,!0);
      var f=new Error("Cannot find module '"+o+"'");
      throw f.code="MODULE_NOT_FOUND",f}
      var l=n[o]={exports:{}};
      t[o][0].call(l.exports,function(e){var n=t[o][1][e];
        return s(n?n:e)},l,l.exports,e,t,n,r)}
      return n[o].exports}
      var i=typeof require=="function"&&require;
      for(var o=0;o<r.length;o++)s(r[o]);
        return s})({1:[function(require,module,exports){"use strict";
      var _createClass=function(){function defineProperties(target,props)
        {for(var i=0;i<props.length;i++)
        {var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();Object.defineProperty(exports,"__esModule",{value:true});var _Line=require("./objects/Line");var _Line2=_interopRequireDefault(_Line);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Scene=function(){function Scene($canvas,width,height){_classCallCheck(this,Scene);this.$canvas=$canvas;this.context=this.$canvas.getContext("2d");this.width=width;this.height=height;this.time=0;this.tick=0;this.lastTime=0;this.lineCount=3;this.lines=[];this.colors=["#fff","#FE9920","#DC3B20"];this.resize(width,height);for(var i=0;i<this.lineCount;i++){var line=new _Line2.default(this.width,this.height,i,this.colors[i]);this.lines.push(line)}}_createClass(Scene,[{key:"resize",value:function resize(width,height){this.width=width;this.height=height;this.$canvas.width=width;this.$canvas.height=height}},{key:"render",value:function render(){var now=Date.now();var elapsed=(now-this.lastTime)/100;this.tick+=elapsed;this.context.clearRect(0,0,this.width,this.height);for(var i=0;i<this.lineCount;i++){this.lines[i].update(this.context,i,this.tick)}this.time++;this.lastTime=now}}]);return Scene}();exports.default=Scene},{"./objects/Line":4}],2:[function(require,module,exports){"use strict";var _Scene=require("./Scene");var _Scene2=_interopRequireDefault(_Scene);var _raf=require("raf");var _raf2=_interopRequireDefault(_raf);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var canvas=document.getElementById("canvas");var scene=new _Scene2.default(canvas,window.innerWidth,window.innerHeight);window.addEventListener("resize",resizeHandler);animate();function resizeHandler(){scene.resize(window.innerWidth,window.innerHeight)}function animate(){(0,_raf2.default)(animate);scene.render()}},{"./Scene":1,raf:6}],3:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Circle=function(){function Circle(radius,x,y,posArrayLine,color,middle,posArrayCircle){_classCallCheck(this,Circle);this.radius=radius;this.x=x;this.y=y;this.scale=1;if(posArrayLine==0){this.amp=5}else if(posArrayLine==1){this.amp=20*posArrayLine+10}else{this.amp=-20*posArrayLine-10}if(posArrayLine!=0){if(posArrayCircle<middle){this.scale=.5+posArrayCircle/20}else{this.scale=.5+(middle*2-posArrayCircle)/20}}this.color=color}_createClass(Circle,[{key:"resize",value:function resize(width,height){this.width=width;this.height=height}},{key:"update",value:function update(context,pos,tick){var y=this.y+Math.sin(tick+pos)*this.amp;context.fillStyle=this.color;context.strokeStyle=this.color;context.beginPath();context.arc(this.x,y,this.radius*this.scale,0,2*Math.PI,false);context.fill();context.stroke()}}]);return Circle}();exports.default=Circle},{}],4:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();Object.defineProperty(exports,"__esModule",{value:true});var _Circle=require("./Circle");var _Circle2=_interopRequireDefault(_Circle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Line=function(){function Line(width,height,pos,color){_classCallCheck(this,Line);this.width=width;this.height=height;this.circleRadius=5;this.circleMargin=20;this.circleCount=this.calcNbreCircle(this.circleRadius,this.circleMargin);this.circles=[];this.color=color;this.pos=pos;for(var i=0;i<this.circleCount;i++){var circle=new _Circle2.default(this.circleRadius,2.5+25*i,this.height/2,this.pos,color,Math.floor(this.circleCount/2),i);this.circles.push(circle)}}_createClass(Line,[{key:"calcNbreCircle",value:function calcNbreCircle(radius,margin){var count=this.width/(radius+margin);return count}},{key:"resize",value:function resize(width,height){this.width=width;this.height=height}},{key:"update",value:function update(context,pos,tick){for(var i=0;i<this.circleCount;i++){this.circles[i].update(context,i,tick)}}}]);return Line}();exports.default=Line},{"./Circle":3}],5:[function(require,module,exports){var process=module.exports={};var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){draining=false;if(currentQueue.length){queue=currentQueue.concat(queue)}else{queueIndex=-1}if(queue.length){drainQueue()}}function drainQueue(){if(draining){return}var timeout=setTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run()}}queueIndex=-1;len=queue.length}currentQueue=null;draining=false;clearTimeout(timeout)}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i]}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){setTimeout(drainQueue,0)}};function Item(fun,array){this.fun=fun;this.array=array}Item.prototype.run=function(){this.fun.apply(null,this.array)};process.title="browser";process.browser=true;process.env={};process.argv=[];process.version="";process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")};process.umask=function(){return 0}},{}],6:[function(require,module,exports){var now=require("performance-now"),global=typeof window==="undefined"?{}:window,vendors=["moz","webkit"],suffix="AnimationFrame",raf=global["request"+suffix],caf=global["cancel"+suffix]||global["cancelRequest"+suffix];for(var i=0;i<vendors.length&&!raf;i++){raf=global[vendors[i]+"Request"+suffix];caf=global[vendors[i]+"Cancel"+suffix]||global[vendors[i]+"CancelRequest"+suffix]}if(!raf||!caf){var last=0,id=0,queue=[],frameDuration=1e3/60;raf=function(callback){if(queue.length===0){var _now=now(),next=Math.max(0,frameDuration-(_now-last));last=next+_now;setTimeout(function(){var cp=queue.slice(0);queue.length=0;for(var i=0;i<cp.length;i++){if(!cp[i].cancelled){try{cp[i].callback(last)}catch(e){setTimeout(function(){throw e},0)}}}},Math.round(next))}queue.push({handle:++id,callback:callback,cancelled:false});return id};caf=function(handle){for(var i=0;i<queue.length;i++){if(queue[i].handle===handle){queue[i].cancelled=true}}}}module.exports=function(fn){return raf.call(global,fn)};module.exports.cancel=function(){caf.apply(global,arguments)}},{"performance-now":7}],7:[function(require,module,exports){(function(process){(function(){var getNanoSeconds,hrtime,loadTime;if(typeof performance!=="undefined"&&performance!==null&&performance.now){module.exports=function(){return performance.now()}}else if(typeof process!=="undefined"&&process!==null&&process.hrtime){module.exports=function(){return(getNanoSeconds()-loadTime)/1e6};hrtime=process.hrtime;getNanoSeconds=function(){var hr;hr=hrtime();return hr[0]*1e9+hr[1]};loadTime=getNanoSeconds()}else if(Date.now){module.exports=function(){return Date.now()-loadTime};loadTime=Date.now()}else{module.exports=function(){return(new Date).getTime()-loadTime};loadTime=(new Date).getTime()}}).call(this)}).call(this,require("_process"))},{_process:5}]},{},[2]);
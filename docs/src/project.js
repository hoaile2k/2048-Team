window.__require=function e(t,n,o){function c(s,r){if(!n[s]){if(!t[s]){var a=s.split("/");if(a=a[a.length-1],!t[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+s+"'")}}var h=n[s]={exports:{}};t[s][0].call(h.exports,function(e){return c(t[s][1][e]||e)},h,h.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<o.length;s++)c(o[s]);return c}({AnimationMove:[function(e,t,n){"use strict";cc._RF.push(t,"a5d2fcyTHJKWqdUZpKC69DR","AnimationMove");var o=e("mEmitter"),c=e("emitName"),i=e("color"),s=(e("./emitName").aniMoveLeft,[80,240,400,560]),r=[560,400,240,80];cc.Class({extends:cc.Component,properties:{_width:4,getCell:cc.Prefab,getParentNode:cc.Component},onLoad:function(){this.evtAniMoveUp=this.aniMoveUp.bind(this),this.evtAniMoveDown=this.aniMoveDown.bind(this),this.evtAniMoveLeft=this.aniMoveLeft.bind(this),this.evtAniMoveRight=this.aniMoveRight.bind(this),o.instance.registerEvent(c.aniMoveUp,this.evtAniMoveUp),o.instance.registerEvent(c.aniMoveDown,this.evtAniMoveDown),o.instance.registerEvent(c.aniMoveLeft,this.evtAniMoveLeft),o.instance.registerEvent(c.aniMoveRight,this.evtAniMoveRight)},start:function(){},aniMoveUp:function(e,t){for(var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15,c=0;c<4;c++)0!=e[c+3*this._width]&&0==e[c]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c+3*n._width].x,s.y=t[c+3*n._width].y,s.getChildByName("label").getComponent("cc.Label").string=e[c+3*n._width],s.color=cc.color(i[e[c+3*n._width]]),0==e[c+1*n._width]&&0==e[c+2*n._width]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[0]));s.runAction(cc.sequence(l,a))}else if(0==e[c+1*n._width]){var h=cc.callFunc(function(){s.destroy()}),u=cc.moveTo(o,cc.v2(s.x,r[1]));s.runAction(cc.sequence(u,h))}else if(0==e[c]){var v=cc.callFunc(function(){s.destroy()}),m=cc.moveTo(o,cc.v2(s.x,r[2]));s.runAction(cc.sequence(m,v))}else s.destroy()}(),0!=e[c+2*this._width]&&0==e[c]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c+2*n._width].x,s.y=t[c+2*n._width].y,s.getChildByName("label").getComponent("cc.Label").string=e[c+2*n._width],s.color=cc.color(i[e[c+2*n._width]]),0==e[c+n._width]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[0]));s.runAction(cc.sequence(l,a))}else if(0==e[c]){var h=cc.callFunc(function(){s.destroy()}),u=cc.moveTo(o,cc.v2(s.x,r[1]));s.runAction(cc.sequence(u,h))}else s.destroy()}(),0!=e[c+1*this._width]&&0==e[c]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c+n._width].x,s.y=t[c+n._width].y,s.getChildByName("label").getComponent("cc.Label").string=e[c+n._width],s.color=cc.color(i[e[c+n._width]]),0==e[c]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[0]));s.runAction(cc.sequence(l,a))}else s.destroy()}()},aniMoveDown:function(e,t){for(var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15,c=0;c<4;c++)0==e[c+3*this._width]&&0!=e[c]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c].x,s.y=t[c].y,s.getChildByName("label").getComponent("cc.Label").string=e[c],s.color=cc.color(i[e[c]]),0==e[c+n._width]&&0==e[c+2*n._width]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[3]));s.runAction(cc.sequence(l,a))}else if(0==e[c+2*n._width]){var h=cc.callFunc(function(){s.destroy()}),u=cc.moveTo(o,cc.v2(s.x,r[2]));s.runAction(cc.sequence(u,h))}else if(0==e[c+3*n._width]){var v=cc.callFunc(function(){s.destroy()}),m=cc.moveTo(o,cc.v2(s.x,r[1]));s.runAction(cc.sequence(m,v))}else s.destroy()}(),0==e[c+3*this._width]&&0!=e[c+this._width]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c+n._width].x,s.y=t[c+n._width].y,s.getChildByName("label").getComponent("cc.Label").string=e[c+n._width],s.color=cc.color(i[e[c+n._width]]),0==e[c+2*n._width]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[3]));s.runAction(cc.sequence(l,a))}else if(0==e[c+3*n._width]){var h=cc.callFunc(function(){s.destroy()}),u=cc.moveTo(o,cc.v2(s.x,r[2]));s.runAction(cc.sequence(u,h))}else s.destroy()}(),0==e[c+3*this._width]&&0!=e[c+2*this._width]&&function(){var s=cc.instantiate(n.getCell);if(s.parent=n.getParentNode.node,s.x=t[c+n._width].x,s.y=t[c+n._width].y,s.getChildByName("label").getComponent("cc.Label").string=e[c+2*n._width],s.color=cc.color(i[e[c+2*n._width]]),0==e[c+3*n._width]){var a=cc.callFunc(function(){s.destroy()}),l=cc.moveTo(o,cc.v2(s.x,r[3]));s.runAction(cc.sequence(l,a))}else s.destroy()}()},aniMoveLeft:function(e,t){for(var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15,c=0;c<16;c++)c%4==0&&(0!=e[c+3]&&0==e[c]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c+3].x,r.y=t[c+3].y,r.getChildByName("label").getComponent("cc.Label").string=e[c+3],r.color=cc.color(i[e[c+3]]),0==e[c+1]&&0==e[c+2]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[0],r.y));r.runAction(cc.sequence(l,a))}else if(0==e[c+1]){var h=cc.callFunc(function(){r.destroy()}),u=cc.moveTo(o,cc.v2(s[1],r.y));r.runAction(cc.sequence(u,h))}else if(0==e[c]){var v=cc.callFunc(function(){r.destroy()}),m=cc.moveTo(o,cc.v2(s[2],r.y));r.runAction(cc.sequence(m,v))}else r.destroy()}(),0!=e[c+2]&&0==e[c]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c+2].x,r.y=t[c+2].y,r.getChildByName("label").getComponent("cc.Label").string=e[c+2],r.color=cc.color(i[e[c+2]]),0==e[c+1]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[0],r.y));r.runAction(cc.sequence(l,a))}else if(0==e[c]){var h=cc.callFunc(function(){r.destroy()}),u=cc.moveTo(o,cc.v2(s[1],r.y));r.runAction(cc.sequence(u,h))}else r.destroy()}(),0!=e[c+1]&&0==e[c]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c+1].x,r.y=t[c+1].y,r.getChildByName("label").getComponent("cc.Label").string=e[c+1],r.color=cc.color(i[e[c+1]]),0==e[c]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[0],r.y));r.runAction(cc.sequence(l,a))}else r.destroy()}())},aniMoveRight:function(e,t){for(var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15,c=0;c<16;c++)c%4==0&&(0==e[c+3]&&0!=e[c]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c].x,r.y=t[c].y,r.getChildByName("label").getComponent("cc.Label").string=e[c],r.color=cc.color(i[e[c]]),0==e[c+1]&&0==e[c+2]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[3],r.y));r.runAction(cc.sequence(l,a))}else if(0==e[c+2]&&0!=e[c+1]){var h=cc.callFunc(function(){r.destroy()}),u=cc.moveTo(o,cc.v2(s[2],r.y));r.runAction(cc.sequence(u,h))}else if(0==e[c+3]){var v=cc.callFunc(function(){r.destroy()}),m=cc.moveTo(o,cc.v2(s[1],r.y));r.runAction(cc.sequence(m,v))}else r.destroy()}(),0==e[c+3]&&0!=e[c+1]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c+1].x,r.y=t[c+1].y,r.getChildByName("label").getComponent("cc.Label").string=e[c+1],r.color=cc.color(i[e[c+1]]),0==e[c+2]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[3],r.y));r.runAction(cc.sequence(l,a))}else if(0==e[c+3]&&0!=e[c+2]){var h=cc.callFunc(function(){r.destroy()}),u=cc.moveTo(o,cc.v2(s[2],r.y));r.runAction(cc.sequence(u,h))}else r.destroy()}(),0==e[c+3]&&0!=e[c+2]&&function(){var r=cc.instantiate(n.getCell);if(r.parent=n.getParentNode.node,r.x=t[c+2].x,r.y=t[c+2].y,r.getChildByName("label").getComponent("cc.Label").string=e[c+2],r.color=cc.color(i[e[c+2]]),0==e[c+3]){var a=cc.callFunc(function(){r.destroy()}),l=cc.moveTo(o,cc.v2(s[3],r.y));r.runAction(cc.sequence(l,a))}else r.destroy()}())},onDestroy:function(){o.instance.registerEvent(c.aniMoveUp,this.evtAniMoveUp),o.instance.registerEvent(c.aniMoveDown,this.evtAniMoveDown),o.instance.registerEvent(c.aniMoveLeft,this.evtAniMoveLeft),o.instance.registerEvent(c.aniMoveRight,this.evtAniMoveRight)}}),cc._RF.pop()},{"./emitName":"emitName",color:"color",emitName:"emitName",mEmitter:"mEmitter"}],1:[function(e,t,n){function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function c(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function r(e){return void 0===e}t.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},o.prototype.emit=function(e){var t,n,o,i,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(r(n=this._events[e]))return!1;if(c(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(s(n))for(i=Array.prototype.slice.call(arguments,1),o=(l=n.slice()).length,a=0;a<o;a++)l[a].apply(this,i);return!0},o.prototype.addListener=function(e,t){var n;if(!c(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,c(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=r(this._maxListeners)?o.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},o.prototype.on=o.prototype.addListener,o.prototype.once=function(e,t){if(!c(t))throw TypeError("listener must be a function");var n=!1;function o(){this.removeListener(e,o),n||(n=!0,t.apply(this,arguments))}return o.listener=t,this.on(e,o),this},o.prototype.removeListener=function(e,t){var n,o,i,r;if(!c(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(n=this._events[e]).length,o=-1,n===t||c(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(r=i;r-- >0;)if(n[r]===t||n[r].listener&&n[r].listener===t){o=r;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},o.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(c(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},o.prototype.listeners=function(e){return this._events&&this._events[e]?c(this._events[e])?[this._events[e]]:this._events[e].slice():[]},o.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(c(t))return 1;if(t)return t.length}return 0},o.listenerCount=function(e,t){return e.listenerCount(t)}},{}],CreateBlock:[function(e,t,n){"use strict";cc._RF.push(t,"20125zXAnJD0YMycQ5w74l8","CreateBlock");var o=e("mEmitter"),c=e("emitName"),i=cc.Enum({RIGHT:-1,LEFT:-1,UP:-1,DOWN:-1});cc.Class({extends:cc.Component,properties:{blockPrefab:cc.Prefab,getScore:cc.Label,_listBlock:[],_arrayBlock:[],_canMove:!0},onLoad:function(){var e=this;this.node.on("touchstart",function(t){e.startPoint=t.getLocation()}),this.node.on("touchend",function(t){e.endPoint=t.getLocation(),e.reflectTouch()}),this.node.on("touchcancel",function(t){e.endPoint=t.getLocation(),e.reflectTouch()}),this.evtGenerate=this.generate.bind(this),this.evtResetGame=this.resetGame.bind(this),o.instance.registerEvent(c.resetGame,this.evtResetGame),o.instance.registerEvent(c.generate,this.evtGenerate)},start:function(){this.createBlock()},resetGame:function(){this.node.removeAllChildren(),this._arrayBlock=[],this._listBlock=[],this.getScore.string=0,this.createBlock()},createBlock:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp.bind(this));for(var e=0;e<=15;e++){var t=cc.instantiate(this.blockPrefab);t.getComponent("block").labelPrefab.string="",t.parent=this.node,this._arrayBlock.push(t.getComponent("block").labelPrefab.string),this._listBlock.push(t)}this.generate(),this.generate()},generate:function(){var e=[2,4],t=e[Math.floor(Math.random()*e.length)],n=Math.floor(Math.random()*this._listBlock.length);0==this._arrayBlock[n]?(this._arrayBlock[n]=t,this._listBlock[n].getComponent("block").labelPrefab.string=t,cc.tween(this._listBlock[n]).to(0,{scale:0,opacity:0}).to(.2,{scale:1,opacity:255}).start()):this.generate(),o.instance.emit(c.blockColor,this._listBlock,this._arrayBlock)},reflectTouch:function(){var e=this.startPoint,t=this.endPoint.sub(e);t.mag()>0&&(Math.abs(t.x)>Math.abs(t.y)?t.x>0?this.moveBlock(i.RIGHT):this.moveBlock(i.LEFT):t.y>0?this.moveBlock(i.UP):this.moveBlock(i.DOWN))},moveBlock:function(e){switch(e){case i.RIGHT:this.moveRight();break;case i.LEFT:this.moveLeft();break;case i.UP:this.moveUp();break;case i.DOWN:this.moveDown()}},onKeyUp:function(e){switch(e.keyCode){case cc.macro.KEY.up:this.moveUp();break;case cc.macro.KEY.down:this.moveDown();break;case cc.macro.KEY.left:this.moveLeft();break;case cc.macro.KEY.right:this.moveRight();break;case cc.macro.KEY.w:this.moveUp();break;case cc.macro.KEY.s:this.moveDown();break;case cc.macro.KEY.a:this.moveLeft();break;case cc.macro.KEY.d:this.moveRight()}},moveUp:function(){o.instance.emit(c.moveUp,this._listBlock,this._arrayBlock,this.generate)},moveDown:function(){o.instance.emit(c.moveDown,this._listBlock,this._arrayBlock,this.generate)},moveLeft:function(){o.instance.emit(c.moveLeft,this._listBlock,this._arrayBlock,this.generate)},moveRight:function(){o.instance.emit(c.moveRight,this._listBlock,this._arrayBlock,this.generate)},onDestroy:function(){o.instance.removeEvent(c.resetGame,this.evtResetGame),o.instance.removeEvent(c.generate,this.evtGenerate)}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],EvtMove:[function(e,t,n){"use strict";cc._RF.push(t,"ca0fdvhp4hMYIc1JtF5Ro5p","EvtMove");var o=e("mEmitter"),c=e("emitName");cc.Class({extends:cc.Component,properties:{_width:4},onLoad:function(){this.evtMoveUp=this.moveUp.bind(this),this.evtMoveDown=this.moveDown.bind(this),this.evtMoveLeft=this.moveLeft.bind(this),this.evtMoveRight=this.moveRight.bind(this),o.instance.registerEvent(c.EvtMoveUp,this.evtMoveUp),o.instance.registerEvent(c.EvtMoveDown,this.evtMoveDown),o.instance.registerEvent(c.EvtMoveLeft,this.evtMoveLeft),o.instance.registerEvent(c.EvtMoveRight,this.evtMoveRight)},start:function(){cc.log(this._width)},moveUp:function(e,t){for(var n=0;n<4;n++){var i=t[n],s=t[n+this._width],r=t[n+2*this._width],a=t[n+3*this._width],l=[parseInt(i),parseInt(s),parseInt(r),parseInt(a)].filter(function(e){return e}),h=this._width-l.length,u=Array(h).fill(0),v=l.concat(u);e[n].getComponent("block").labelPrefab.string=v[0],e[n+this._width].getComponent("block").labelPrefab.string=v[1],e[n+2*this._width].getComponent("block").labelPrefab.string=v[2],e[n+3*this._width].getComponent("block").labelPrefab.string=v[3],o.instance.emit(c.aniMoveUp,t,e),t[n]=v[0],t[n+this._width]=v[1],t[n+2*this._width]=v[2],t[n+3*this._width]=v[3]}},moveDown:function(e,t){for(var n=0;n<4;n++){var i=t[n],s=t[n+this._width],r=t[n+2*this._width],a=t[n+3*this._width],l=[parseInt(i),parseInt(s),parseInt(r),parseInt(a)].filter(function(e){return e}),h=this._width-l.length,u=Array(h).fill(0).concat(l);e[n].getComponent("block").labelPrefab.string=u[0],e[n+this._width].getComponent("block").labelPrefab.string=u[1],e[n+2*this._width].getComponent("block").labelPrefab.string=u[2],e[n+3*this._width].getComponent("block").labelPrefab.string=u[3],o.instance.emit(c.aniMoveDown,t,e),t[n]=u[0],t[n+this._width]=u[1],t[n+2*this._width]=u[2],t[n+3*this._width]=u[3];cc.sequence(cc.fadeOut(0),cc.fadeIn(15))}},moveLeft:function(e,t){for(var n=0;n<16;n++)if(n%4==0){var i=t[n],s=t[n+1],r=t[n+2],a=t[n+3],l=[parseInt(i),parseInt(s),parseInt(r),parseInt(a)].filter(function(e){return e}),h=this._width-l.length,u=Array(h).fill(0),v=l.concat(u);e[n].getComponent("block").labelPrefab.string=v[0],e[n+1].getComponent("block").labelPrefab.string=v[1],e[n+2].getComponent("block").labelPrefab.string=v[2],e[n+3].getComponent("block").labelPrefab.string=v[3],o.instance.emit(c.aniMoveLeft,t,e),t[n]=v[0],t[n+1]=v[1],t[n+2]=v[2],t[n+3]=v[3]}},moveRight:function(e,t){for(var n=0;n<16;n++)if(n%4==0){var i=t[n],s=t[n+1],r=t[n+2],a=t[n+3],l=[parseInt(i),parseInt(s),parseInt(r),parseInt(a)].filter(function(e){return e}),h=4-l.length,u=Array(h).fill(0).concat(l);e[n].getComponent("block").labelPrefab.string=u[0],e[n+1].getComponent("block").labelPrefab.string=u[1],e[n+2].getComponent("block").labelPrefab.string=u[2],e[n+3].getComponent("block").labelPrefab.string=u[3],o.instance.emit(c.aniMoveRight,t,e),t[n]=u[0],t[n+1]=u[1],t[n+2]=u[2],t[n+3]=u[3]}},onDestroy:function(){o.instance.removeEvent(c.EvtMoveUp,this.evtMoveUp),o.instance.removeEvent(c.EvtMoveDown,this.evtMoveDown),o.instance.removeEvent(c.EvtMoveLeft,this.evtMoveLeft),o.instance.removeEvent(c.EvtMoveRight,this.evtMoveRight)}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],HowToPlay:[function(e,t,n){"use strict";cc._RF.push(t,"5da61IRf7ZJdp/plyhcjY3Q","HowToPlay");e("lodash");cc.Class({extends:cc.Component,properties:{menu:cc.Node},loadHowToPlay:function(){this.menu.active=!0,this.menu.opacity=0,this.menu.scale=.2,cc.tween(this.menu).to(.5,{scale:1,opacity:255},{easing:"quartInOut"}).start()},unloadHowToPlay:function(){var e=this;cc.tween(this.menu).to(.5,{scale:.2,opacity:0},{easing:"quartInOut"}).call(function(){e.menu.active=!1}).start()},start:function(){}}),cc._RF.pop()},{lodash:"lodash"}],MainController:[function(e,t,n){"use strict";cc._RF.push(t,"d0d9fquJzRBVaR3B39X3NAN","MainController");var o=e("mEmitter"),c=e("emitName"),i=e("color");cc.Class({extends:cc.Component,properties:{},onLoad:function(){o.instance=new o,this.evtSetColor=this.setColor.bind(this),o.instance.registerEvent(c.blockColor,this.evtSetColor)},start:function(){},setColor:function(e,t){for(var n=i,o=0;o<16;o++)0==t[o]&&(e[o].getComponent("block").labelPrefab.string="",e[o].color=n[0]),2==t[o]&&(e[o].color=n[2]),4==t[o]&&(e[o].color=n[4]),8==t[o]&&(e[o].color=n[8]),16==t[o]&&(e[o].color=n[16]),32==t[o]&&(e[o].color=n[32]),64==t[o]&&(e[o].color=n[64]),128==t[o]&&(e[o].color=n[128]),256==t[o]&&(e[o].color=n[256]),512==t[o]&&(e[o].color=n[512]),1024==t[o]&&(e[o].color=n[1024]),2048==t[o]&&(e[o].color=n[2048])}}),cc._RF.pop()},{color:"color",emitName:"emitName",mEmitter:"mEmitter"}],MoveBlock:[function(e,t,n){"use strict";cc._RF.push(t,"1d056vyiP9FN5rUvXBxq2Qa","MoveBlock");var o=e("mEmitter"),c=e("emitName");cc.Class({extends:cc.Component,properties:{_width:4,_canMove:!0,_isWin:!1,_canMoveVertical:!0,_canMoveHorizontal:!0,getCell:cc.Prefab,getParentNode:cc.Component,getScore:cc.Label,getLoseScreen:cc.Node,getWinScreen:cc.Node},onLoad:function(){this.evtMoveUp=this.moveUpCombined.bind(this),this.evtMoveDown=this.moveDownCombined.bind(this),this.evtMoveLeft=this.moveLeftCombined.bind(this),this.evtMoveRight=this.moveRightCombined.bind(this),o.instance.registerEvent(c.moveUp,this.evtMoveUp),o.instance.registerEvent(c.moveDown,this.evtMoveDown),o.instance.registerEvent(c.moveLeft,this.evtMoveLeft),o.instance.registerEvent(c.moveRight,this.evtMoveRight)},start:function(){var e=this;this.canMoveRight=!0,this.canMoveLeft=!0,this.canMoveUp=!0,this.canMoveDown=!0,this.schedule(function(){e._canMove=!0},.3)},combineRowLeft:function(e,t){for(var n=0;n<=15;n++)if(t[n]===t[n+1]&&(n+1)%4!=0){var o=t[n]+t[n+1];e[n].getComponent("block").labelPrefab.string=o,e[n+1].getComponent("block").labelPrefab.string=0,0!=t[n]&&e[n].runAction(cc.sequence(cc.scaleTo(.1,1.1),cc.scaleTo(.1,1))),t[n]=o,t[n+1]=0;var c=parseInt(this.getScore.string);this.getScore.string=c+o,this.isWinning(o)}},combineRowRight:function(e,t){for(var n=15;n>=0;n--)if(t[n]===t[n+1]&&(n+1)%4!=0){var o=t[n]+t[n+1];e[n+1].getComponent("block").labelPrefab.string=o,e[n].getComponent("block").labelPrefab.string=0,t[n+1]=o,t[n]=0,0!=t[n+1]&&e[n+1].runAction(cc.sequence(cc.scaleTo(.1,1.1),cc.scaleTo(.1,1)));var c=parseInt(this.getScore.string);this.getScore.string=c+o,this.isWinning(o)}},combineColumnUp:function(e,t){for(var n=0;n<=15;n++)if(t[n]===t[n+this._width]){var o=t[n]+t[n+this._width];e[n].getComponent("block").labelPrefab.string=o,e[n+this._width].getComponent("block").labelPrefab.string=0,0!=t[n]&&e[n].runAction(cc.sequence(cc.scaleTo(.1,1.1),cc.scaleTo(.1,1))),t[n]=o,t[n+this._width]=0;var c=parseInt(this.getScore.string);this.getScore.string=c+o,this.isWinning(o)}},combineColumnDown:function(e,t){for(var n=15;n>=0;n--)if(t[n]==t[n+this._width]){var o=t[n]+t[n+this._width];e[n].getComponent("block").labelPrefab.string=o,e[n+this._width].getComponent("block").labelPrefab.string=0,t[n]=o,t[n+this._width]=0,0!=t[n]&&e[n+this._width].runAction(cc.sequence(cc.scaleTo(.1,1.1),cc.scaleTo(.1,1)));var c=parseInt(this.getScore.string);this.getScore.string=c+o,this.isWinning(o)}},moveRightCombined:function(e,t){1==this._canMove&&(this._canMove=!1,o.instance.emit(c.EvtMoveRight,e,t),this.combineRowRight(e,t),o.instance.emit(c.EvtMoveRight,e,t),t.includes(0)?o.instance.emit(c.generate):this.isFull(t))},moveLeftCombined:function(e,t){1==this._canMove&&(this._canMove=!1,o.instance.emit(c.EvtMoveLeft,e,t),this.combineRowLeft(e,t),o.instance.emit(c.EvtMoveLeft,e,t),t.includes(0)?o.instance.emit(c.generate):this.isFull(t))},moveUpCombined:function(e,t){1==this._canMove&&(this._canMove=!1,o.instance.emit(c.EvtMoveUp,e,t),this.combineColumnUp(e,t),o.instance.emit(c.EvtMoveUp,e,t),t.includes(0)?o.instance.emit(c.generate):this.isFull(t))},moveDownCombined:function(e,t){1==this._canMove&&(this._canMove=!1,o.instance.emit(c.EvtMoveDown,e,t),this.combineColumnDown(e,t),o.instance.emit(c.EvtMoveDown,e,t),t.includes(0)?o.instance.emit(c.generate):this.isFull(t))},isFull:function(e){for(var t=0,n=0,o=!1,c=!1,i=!1,s=!1,r=!1,a=!1,l=0;l<16;l++)l%4==0&&(o=e[l]!=e[l+1],c=e[l+1]!=e[l+2],i=e[l+2]!=e[l+3],o&&c&&i?t++:t--);for(var h=0;h<4;h++){var u=this._width;s=e[h]!=e[h+u],r=e[h+u]!=e[h+2*u],a=e[h+2*u]!=e[h+3*u],s&&r&&a?n++:n--}4==n&&4==t&&this.isLosing()},isLosing:function(){var e=this;this.getLoseScreen.active=!0,this.getLoseScreen.getChildByName("TryAgainBtn").on("click",function(){e.getLoseScreen.active=!1})},isWinning:function(e){var t=this;2048==e&&(this.getWinScreen.active=!0,this.getWinScreen.getChildByName("replayBtn").on("click",function(){t.getWinScreen.active=!1}))},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP),o.instance.removeEvent(c.moveUp,this.evtMoveUp),o.instance.removeEvent(c.moveDown,this.evtMoveDown),o.instance.removeEvent(c.moveLeft,this.evtMoveLeft),o.instance.removeEvent(c.moveRight,this.evtMoveRight)}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],StartGame:[function(e,t,n){"use strict";cc._RF.push(t,"eee7feFWTtEsqZiPatjGRZb","StartGame");var o=e("User"),c=[];cc.Class({extends:cc.Component,properties:{startLayout:cc.Node,userBoard:cc.Node,logo:cc.Sprite,loading:cc.Node,boardGame:cc.Node,username:cc.Label,nameEditBox:cc.EditBox,alertMessage:cc.Node,_flag:!1},onLoad:function(){cc.sys.localStorage.getItem("debug")&&cc.sys.localStorage.removeItem("debug")},openUserBoard:function(){this.userBoard.active=!0,this.node.active=!1,this.logo.node.runAction(cc.moveBy(1,0,100))},createUser:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));if(e){if(e){c=e;var t=new o;t.name=this.username.string,t.score=0,c.push(t),cc.sys.localStorage.setItem("users",JSON.stringify(c))}}else{var n=new o;n.name=this.username.string,n.score=0,c.push(n),cc.sys.localStorage.setItem("users",JSON.stringify(c))}},validateEditBox:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));if(e){for(var t=0;t<e.length;t++)if(e[t].name==this.nameEditBox.string)return this.alertMessageBox("Your name have taken!"),!1;return this.nameEditBox.string?(this._flag=!1,!0):(this.alertMessageBox("Please enter your name!"),!1)}return this._flag=!1,!0},alertMessageBox:function(e){var t=this;this.alertMessage.getChildByName("alertRichText").getComponent(cc.RichText).string="<color=B4ECE3>Alert  </c><color=FFF8D5>"+e+"</color>",this.alertMessage.runAction(cc.sequence(cc.moveBy(1,0,-160),cc.delayTime(1.5),cc.moveBy(1,0,160),cc.callFunc(function(){t._flag=!1})))},loadingGame:function(){var e=this;if(!this._flag){if(this._flag=!0,!this.validateEditBox())return;this.validateEditBox()&&(this.createUser(),this._flag||(this._flag=!0,this.loading.active=!0,this.loading.runAction(cc.sequence(cc.callFunc(this.onCloud,this),cc.delayTime(2),cc.callFunc(this.offCloud,this))),this.loading.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){e.loading.getChildByName("BG").active=!0}),cc.delayTime(2),cc.callFunc(this.loadProgressBar,this)))))}},loadProgressBar:function(){var e=this;this.loading.getChildByName("BG").getChildByName("ProgressBar").runAction(cc.repeat(cc.sequence(cc.delayTime(.2),cc.callFunc(function(){e.loading.getChildByName("BG").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress+=.1})),10)),this.loading.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(this.onCloud,this),cc.delayTime(2),cc.callFunc(function(){e.loading.getChildByName("BG").active=!1}),cc.callFunc(this.loadBoardGame,this),cc.callFunc(this.offCloud,this),cc.delayTime(1),cc.callFunc(function(){e.loading.active=!1})))},loadBoardGame:function(){this.startLayout.active=!1,this.boardGame.active=!0},onCloud:function(){this.loading.getChildByName("cloud1").runAction(cc.moveBy(1,400,0)),this.loading.getChildByName("cloud3").runAction(cc.moveBy(1,-400,0)),this.loading.getChildByName("cloud4").runAction(cc.moveBy(1,400,0)),this.loading.getChildByName("cloud12").runAction(cc.moveBy(1,700,0)),this.loading.getChildByName("cloud11").runAction(cc.moveBy(1,-680,0)),this.loading.getChildByName("cloud13").runAction(cc.moveBy(1,-500,0)),this.loading.getChildByName("cloud16").runAction(cc.moveBy(1,500,0)),this.loading.getChildByName("cloud14").runAction(cc.moveBy(1,350,0)),this.loading.getChildByName("cloud15").runAction(cc.moveBy(1,-460,0)),this.loading.getChildByName("cloud2").runAction(cc.moveBy(1,500,0)),this.loading.getChildByName("cloud6").runAction(cc.moveBy(1,450,0)),this.loading.getChildByName("cloud7").runAction(cc.moveBy(1,650,0)),this.loading.getChildByName("cloud8").runAction(cc.moveBy(1,-560,0))},offCloud:function(){this.loading.getChildByName("cloud1").runAction(cc.moveBy(1,-400,0)),this.loading.getChildByName("cloud3").runAction(cc.moveBy(1,400,0)),this.loading.getChildByName("cloud4").runAction(cc.moveBy(1,-400,0)),this.loading.getChildByName("cloud12").runAction(cc.moveBy(1,-700,0)),this.loading.getChildByName("cloud11").runAction(cc.moveBy(1,680,0)),this.loading.getChildByName("cloud13").runAction(cc.moveBy(1,500,0)),this.loading.getChildByName("cloud16").runAction(cc.moveBy(1,-500,0)),this.loading.getChildByName("cloud14").runAction(cc.moveBy(1,-350,0)),this.loading.getChildByName("cloud15").runAction(cc.moveBy(1,460,0)),this.loading.getChildByName("cloud2").runAction(cc.moveBy(1,-500,0)),this.loading.getChildByName("cloud6").runAction(cc.moveBy(1,-450,0)),this.loading.getChildByName("cloud7").runAction(cc.moveBy(1,-650,0)),this.loading.getChildByName("cloud8").runAction(cc.moveBy(1,560,0))},start:function(){}}),cc._RF.pop()},{User:"User"}],UserBoard:[function(e,t,n){"use strict";cc._RF.push(t,"540a4VudVdN9L17owAaluqg","UserBoard");e("mEmitter"),e("emitName");cc.Class({extends:cc.Component,properties:{score:cc.Label,nameOnBoardGame:cc.Label,username:cc.Label,leadBoard:cc.Node,boardGame:cc.Node,userList:cc.Prefab,content:cc.Node,_offBoard:null,_flag:!1},onLoad:function(){this.sortScore(),this.addLeadBoard(),this.nameOnBoardGame.string=this.username.string,this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this)},textChange:function(e){this.username.string=e},sortScore:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));null!=e&&(e=e.sort(function(e,t){return t.score-e.score})),cc.sys.localStorage.setItem("users",JSON.stringify(e))},updateScore:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));if(e){cc.log(this.score);for(var t=0;t<e.length;t++)null!=this.score.string&&e[t].name==this.nameOnBoardGame.string&&(e[t].score=parseInt(this.score.string));cc.sys.localStorage.setItem("users",JSON.stringify(e))}},addLeadBoard:function(){var e=JSON.parse(cc.sys.localStorage.getItem("users"));if(e&&e){this.content.removeAllChildren();for(var t=0;t<e.length;t++){var n=cc.instantiate(this.userList);n.parent=this.content,n.y=-10-20*t,n.getChildByName("username").getComponent(cc.Label).string=e[t].name,n.getChildByName("score").getComponent(cc.Label).string=e[t].score,this.content.height+=2}}},loadLeadBoard:function(){var e=this;this._flag||(this._flag=!0,this.addLeadBoard(),this.leadBoard.runAction(cc.sequence(cc.callFunc(function(){e.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),cc.moveBy(.3,0,-700),cc.delayTime(1.5),cc.callFunc(function(){e.boardGame.getComponent(cc.Sprite).node.on("mousedown",e.unloadLeadBoard,e)}))))},unloadLeadBoard:function(){var e=this;this._flag&&(this._flag=!1,this.leadBoard.runAction(cc.sequence(cc.callFunc(function(){e.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),cc.moveBy(.3,0,700),cc.delayTime(1.5),cc.callFunc(function(){e.boardGame.getComponent(cc.Sprite).node.on("mousedown",e.unloadLeadBoard,e)}))))},start:function(){},update:function(e){}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],UserName:[function(e,t,n){"use strict";cc._RF.push(t,"7ae3etmfqNBBrW/tSEAZuyF","UserName"),cc.Class({extends:cc.Component,properties:{labelName:cc.Label,showName:cc.Label},start:function(){cc.log(this.labelName,this.showName)}}),cc._RF.pop()},{}],User:[function(e,t,n){"use strict";cc._RF.push(t,"a7159MbXDVIDLaW+iIK6QSW","User");var o=cc.Class({name:"",score:0});t.exports=o,cc._RF.pop()},{}],Variables:[function(e,t,n){"use strict";cc._RF.push(t,"d63ddlYAu9A3btQcSG6L4dn","Variables");t.exports={audio:null,transAudio:"transAudio"},cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],block:[function(e,t,n){"use strict";cc._RF.push(t,"18c8bC2wGFDc689f47Doh79","block");e("mEmitter"),e("color");cc.Class({extends:cc.Component,properties:{labelPrefab:cc.Label},onLoad:function(){},start:function(){},update:function(e){}}),cc._RF.pop()},{color:"color",mEmitter:"mEmitter"}],color:[function(e,t,n){"use strict";cc._RF.push(t,"15341+/LGZDx6GZ448ggRN7","color");var o={0:cc.color(190,152,152,255),2:cc.color(235,224,213,255),4:cc.color(234,219,193,255),8:cc.color(240,167,110,255),16:cc.color(244,138,89,255),32:cc.color(245,112,85,255),64:cc.color(245,83,52,255),128:cc.color(234,200,103,255),256:cc.color(234,197,87,255),512:cc.color(234,192,71,255),1024:cc.color(146,208,80,255),2048:cc.color(0,176,240,255)};t.exports=o,cc._RF.pop()},{}],emitName:[function(e,t,n){"use strict";cc._RF.push(t,"11eceTxcsVGdo/xFQ5dFOG3","emitName");t.exports={moveUp:"moveUp",moveDown:"moveDown",moveLeft:"moveLeft",moveRight:"moveRight",EvtMoveUp:"EvtMoveUp",EvtMoveDown:"EvtMoveDown",EvtMoveLeft:"EvtMoveLeft",EvtMoveRight:"EvtMoveRight",generate:"generate",blockColor:"color",aniMoveUp:"animoveup",aniMoveDown:"animovedown",aniMoveLeft:"animoveleft",aniMoveRight:"animoveright",resetGame:"reset_game"},cc._RF.pop()},{}],gameOver:[function(e,t,n){"use strict";cc._RF.push(t,"87950VqC0FLL6c1mGnCdwQe","gameOver"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.tween(this.node).to(1,{scale:1,opacity:255},{easing:"backInOut"}).start()}}),cc._RF.pop()},{}],lodash:[function(e,t,n){"use strict";cc._RF.push(t,"d075c2YSVRCA7wq3OnrT/lW","lodash"),cc._RF.pop()},{}],mEmitter:[function(e,t,n){"use strict";cc._RF.push(t,"bdd22VmKh1MNr6LH2JKUZri","mEmitter");var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("events"),s=function(){function e(){c(this,e),this._emiter=new i,this._emiter.setMaxListeners(100)}return o(e,[{key:"emit",value:function(){var e;(e=this._emiter).emit.apply(e,arguments)}},{key:"registerEvent",value:function(e,t){this._emiter.on(e,t)}},{key:"registerOnce",value:function(e,t){this._emiter.once(e,t)}},{key:"removeEvent",value:function(e,t){this._emiter.removeListener(e,t)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,e.instance=null}}]),e}();s.instance=null,t.exports=s,cc._RF.pop()},{events:1}],sound:[function(e,t,n){"use strict";cc._RF.push(t,"369c13G+3JLargpgYDj8tfE","sound");var o=e("mEmitter"),c=e("Variables");cc.Class({extends:cc.Component,properties:{button_sound:{default:null,type:cc.AudioClip},BG_sound:{default:null,type:cc.AudioClip},win_sound:{default:null,type:cc.AudioClip},lose_sound:{default:null,type:cc.AudioClip},move_sound:{default:null,type:cc.AudioClip}},onLoad:function(){o.instance.emit(c.transAudio,this)},start:function(){},playButton_sound:function(){this.pauseAll(),cc.audioEngine.play(this.button_sound,!1)},playBG_sound:function(){this.pauseAll(),cc.audioEngine.play(this.BG_sound,!1)},playWin_sound:function(){this.pauseAll(),cc.audioEngine.play(this.win_sound,!1)},playLose_sound:function(){this.pauseAll(),cc.audioEngine.play(this.lose_sound,!1)},playMove_sound:function(){this.pauseAll(),cc.audioEngine.play(this.move_sound,!1)},onDestroy:function(){},pauseAll:function(){cc.audioEngine.pauseAll()},Show_Window:function(){this.node.active=!0,this.node.opacity=0,this.node.scale=.2,cc.tween(this.node).to(.5,{scale:1,opacity:255},{easing:"quartInOut"}).start()},Hide_Window:function(){var e=this;cc.tween(this.node).to(.5,{scale:.2,opacity:0},{easing:"quartInOut"}).call(function(){e.node.active=!1}).start()}}),cc._RF.pop()},{Variables:"Variables",mEmitter:"mEmitter"}],star1:[function(e,t,n){"use strict";cc._RF.push(t,"1101981QiZKC5yKxgfSTGKA","star1"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.tween(this.node).to(.5,{position:cc.v2(-96.455,53.763),rotation:360,easing:"sineOutIn"}).start()}}),cc._RF.pop()},{}],star2:[function(e,t,n){"use strict";cc._RF.push(t,"0928b0fImlA5JaceRgHi9ay","star2"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.tween(this.node).to(.5,{position:cc.v2(2,94),rotation:360,easing:"sineOutIn"}).start()}}),cc._RF.pop()},{}],star3:[function(e,t,n){"use strict";cc._RF.push(t,"3048fDwtctCnJRJFusSkZlE","star3"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.tween(this.node).to(.5,{position:cc.v2(102.242,55.411),rotation:360,easing:"sineOutIn"}).start()}}),cc._RF.pop()},{}]},{},["AnimationMove","CreateBlock","EvtMove","HowToPlay","MainController","MoveBlock","Variables","sound","StartGame","User","UserBoard","UserName","star1","star2","star3","block","color","emitName","gameOver","lodash","mEmitter"]);
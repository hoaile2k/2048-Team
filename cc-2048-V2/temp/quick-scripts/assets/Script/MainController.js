(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/MainController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd0d9fquJzRBVaR3B39X3NAN', 'MainController', __filename);
// Script/MainController.js

"use strict";

var Emitter = require("mEmitter");
var emitName = require("emitName");
var Colors = require("color");

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Emitter.instance = new Emitter();

        this.evtSetColor = this.setColor.bind(this);
        Emitter.instance.registerEvent(emitName.blockColor, this.evtSetColor);
    },
    start: function start() {},
    setColor: function setColor(listBlock, arrayBlock) {
        var color = Colors;
        for (var index = 0; index < 16; index++) {
            if (arrayBlock[index] == 0) {
                listBlock[index].getComponent("block").labelPrefab.string = "";
                listBlock[index].color = color[0];
            }
            if (arrayBlock[index] == 2) {
                listBlock[index].color = color[2];
            }
            if (arrayBlock[index] == 4) {
                listBlock[index].color = color[4];
            }
            if (arrayBlock[index] == 8) {
                listBlock[index].color = color[8];
            }
            if (arrayBlock[index] == 16) {
                listBlock[index].color = color[16];
            }
            if (arrayBlock[index] == 32) {
                listBlock[index].color = color[32];
            }
            if (arrayBlock[index] == 64) {
                listBlock[index].color = color[64];
            }
            if (arrayBlock[index] == 128) {
                listBlock[index].color = color[128];
            }
            if (arrayBlock[index] == 256) {
                listBlock[index].color = color[256];
            }
            if (arrayBlock[index] == 512) {
                listBlock[index].color = color[512];
            }
            if (arrayBlock[index] == 1024) {
                listBlock[index].color = color[1024];
            }
            if (arrayBlock[index] == 2048) {
                listBlock[index].color = color[2048];
            }
        }
    }
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MainController.js.map
        
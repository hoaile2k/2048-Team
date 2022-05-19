const Emitter = require("mEmitter")
const emitName = require("emitName")
cc.Class({
    extends: cc.Component,

    properties: {
        username: cc.Label,
        leadBoard: cc.Node,
        boardGame:cc.Node,
        _offBoard: null,
        _flag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this);
    },
    textChange(value){
        cc.log(value);
        this.username.string = value;
    },
    loadLeadBoard(){
        if(!this._flag){
            this._flag = true;
            this.leadBoard.runAction(cc.moveBy(0.3,0,-700));
        }
    },
    unloadLeadBoard(){
        if(this._flag){
            this._flag = false;
            this.leadBoard.runAction(cc.moveBy(0.3,0,700));
        }
    },
    start () {

    },

    // update (dt) {},
});

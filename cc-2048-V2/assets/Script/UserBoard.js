const Emitter = require("mEmitter")
const emitName = require("emitName")
cc.Class({
    extends: cc.Component,

    properties: {
        username: cc.Label,
        leadBoard: cc.Node,
        boardGame:cc.Node,
        userList: cc.Prefab,
        content: cc.Node,
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
    addLeadBoard(){
        if(!cc.sys.localStorage.length){
            return;
        }else if(cc.sys.localStorage.length){
            // this.content.removeAllChildren();
            for(let i=0;i<cc.sys.localStorage.length;i++){
                cc.log(cc.sys.localStorage.getItem(`userId${i}`));
                // let item = cc.instantiate(this.userList);
                // item.parent = this.content;
                // item.y = -30-(i*60);
                // item.getChildByName("username").getComponent(cc.Label).string = cc.sys.localStorage.getItem(i).name;
                // item.getChildByName("score").getComponent(cc.Label).string = cc.sys.localStorage.getItem(i).score;
                // this.content.height += 10;
            }
        }
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
        this.addLeadBoard();
    },

    update (dt) {
        
    },
});

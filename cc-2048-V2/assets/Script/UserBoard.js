const Emitter = require("mEmitter")
const emitName = require("emitName")
var sortArr = []
cc.Class({
    extends: cc.Component,

    properties: {
        nameOnBoardGame: cc.Label,
        username: cc.Label,
        leadBoard: cc.Node,
        howToPlayBoad: cc.Node,
        boardGame:cc.Node,
        userList: cc.Prefab,
        content: cc.Node,
        _offBoard: null,
        _flag: false,
        _flagSort: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nameOnBoardGame.string = this.username.string;
        this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this);
    },
    textChange(value){
        cc.log(value);
        this.username.string = value;
    },
    sortScore(){
        let arrLocal = cc.sys.localStorage;
        let temp;
        for(let i=0;i<arrLocal.length-1;i++){
            for(let j=1;j<arrLocal.length;j++){
                if(JSON.parse(arrLocal.getItem("userId"+i)).score < JSON.parse(arrLocal.getItem("userId"+j)).score){
                    temp = arrLocal.getItem("userId"+i);
                    arrLocal.setItem(`userId${i}`, arrLocal.getItem("userId"+j));
                    arrLocal.setItem(`userId${j}`, temp);
                }
            }
            sortArr.push(temp);
        }
    },
    addLeadBoard(){
        if(!cc.sys.localStorage.length){
            return;
        }else if(cc.sys.localStorage.length){
            this.content.removeAllChildren();
            for(let i=0;i<cc.sys.localStorage.length;i++){
                cc.log(JSON.parse(cc.sys.localStorage.getItem(`userId${i}`)));
                let item = cc.instantiate(this.userList);
                item.parent = this.content;
                item.y = -10-(i*20);
                item.getChildByName("username").getComponent(cc.Label).string = JSON.parse(cc.sys.localStorage.getItem(`userId${i}`)).name;
                item.getChildByName("score").getComponent(cc.Label).string = JSON.parse(cc.sys.localStorage.getItem(`userId${i}`)).score;
                this.content.height += 10;
            }
        }
    },
    loadHowToPlay(){

    },
    loadLeadBoard(){
        if(!this._flag){
            this._flag = true;
            this.leadBoard.runAction(cc.sequence(
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),
                cc.moveBy(0.3,0,-700),
                cc.delayTime(1.5),
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this)}),
            ));
        }
    },
    unloadLeadBoard(){
        if(this._flag){
            this._flag = false;
            this.leadBoard.runAction(cc.sequence(
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),
                cc.moveBy(0.3,0,700),
                cc.delayTime(1.5),
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this)}),
            ));
        }
    },
    start () {
        this.sortScore();
        this.addLeadBoard();
    },

    update (dt) {
        
    },
});

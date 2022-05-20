const Emitter = require("mEmitter")
const emitName = require("emitName")
<<<<<<< Updated upstream
=======
var sortArr = []
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
        _flagSort: false,
>>>>>>> Stashed changes
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this);
    },
    textChange(value){
        cc.log(value);
        this.username.string = value;
    },
<<<<<<< Updated upstream
=======
    sortScore(){
        let arrLocal = cc.sys.localStorage;
        let max;
        for(let i=0;i<arrLocal.length;i++){
            let temp = JSON.parse(arrLocal.getItem("userId"+i));
            for(let j=1;j<arrLocal.length;j++){
                if(temp.score < JSON.parse(arrLocal.getItem("userId"+j)).score){
                    max = JSON.parse(arrLocal.getItem("userId"+j));
                }else{
                    max = temp;
                }
            }
            sortArr.push(max);
        }
    },
>>>>>>> Stashed changes
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
    loadLeadBoard(){
        if(!this._flag){
            this._flag = true;
<<<<<<< Updated upstream
            this.leadBoard.runAction(cc.moveBy(0.3,0,-700));
=======
            this.leadBoard.runAction(cc.sequence(
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),
                cc.moveBy(0.3,0,-700),
                cc.delayTime(1.5),
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this)}),
            ));
>>>>>>> Stashed changes
        }
    },
    unloadLeadBoard(){
        if(this._flag){
            this._flag = false;
<<<<<<< Updated upstream
            this.leadBoard.runAction(cc.moveBy(0.3,0,700));
=======
            this.leadBoard.runAction(cc.sequence(
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.off("mousedown")}),
                cc.moveBy(0.3,0,700),
                cc.delayTime(1.5),
                cc.callFunc(()=>{this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this)}),
            ));
>>>>>>> Stashed changes
        }
    },
    start () {
        this.addLeadBoard();
    },

    update (dt) {
        
    },
});

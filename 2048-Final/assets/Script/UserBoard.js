const Emitter = require("mEmitter")
const emitName = require("emitName")
var sortArr = []
cc.Class({
    extends: cc.Component,

    properties: {
        buttonLeadBoard: cc.Button,
        score: cc.Label,
        nameOnBoardGame: cc.Label,
        username: cc.Label,
        leadBoard: cc.Node,
        boardGame:cc.Node,
        userList: cc.Prefab,
        content: cc.Node,
        get: cc.Canvas,
        _offBoard: null,
        _flag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.sortScore();
        this.addLeadBoard();
        this.nameOnBoardGame.string = this.username.string;
        this.boardGame.getComponent(cc.Sprite).node.on("mousedown",this.unloadLeadBoard,this);

    },
    textChange(value){
        this.username.string = value;
    },
    sortScore(){
        let data = JSON.parse(cc.sys.localStorage.getItem("users"));
        if (data != null) {
            data = data.sort((a, b) => {
                return b.score - a.score;
            });
        }
        cc.sys.localStorage.setItem("users", JSON.stringify(data));
    },
    addLeadBoard(){
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));
        if(!arrUsers){
            return;
        }else if(arrUsers){
            this.content.removeAllChildren();
            for(let i=0;i<arrUsers.length;i++){
                let item = cc.instantiate(this.userList);
                item.parent = this.content;
                item.y = -10-(i*20);
                item.getChildByName("username").getComponent(cc.Label).string = arrUsers[i].name;
                item.getChildByName("score").getComponent(cc.Label).string = arrUsers[i].score;
                this.content.height += 2;
            }
        }
    },
    loadLeadBoard(){
            this.sortScore();
            this.addLeadBoard();
            this.leadBoard.runAction(cc.sequence(
                cc.moveTo(0.3,0,0),
                cc.delayTime(1.5),
            ));
        
    },
    unloadLeadBoard(){

        if(this._flag){
            this._flag = false;
            this.leadBoard.runAction(cc.sequence(
                cc.moveTo(0.3,0,1000),
                cc.delayTime(1.5),
            ));
        }
    },
    hideLeadBoard(){
        this.leadBoard.runAction(cc.sequence(
            cc.moveBy(0.3,0,1000),
            cc.delayTime(1.5)
        ));
        this._flag = false;
    },
    start () {
        
    },

    update (dt) {
        
    },
});

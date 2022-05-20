const Emitter = require("mEmitter")
const emitName = require("emitName");
var sortArr = []
cc.Class({
    extends: cc.Component,

    properties: {
        score: cc.Label,
        nameOnBoardGame: cc.Label,
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
    updateScore(){
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));
        if(arrUsers){
            cc.log(this.score)
            
            for(let i=0;i<arrUsers.length;i++){
                if(this.score.string != null){{
                    if(arrUsers[i].name == this.nameOnBoardGame.string){
                        arrUsers[i].score = parseInt(this.score.string);
                    }
                }}
                
            }
            cc.sys.localStorage.setItem("users", JSON.stringify(arrUsers));
        }else return;
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
        if(!this._flag){
            this._flag = true;
            this.addLeadBoard();
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
        
    },

    update (dt) {
        
    },
});

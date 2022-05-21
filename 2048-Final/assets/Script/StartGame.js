const user = require("User");
const Emitter = require("mEmitter")
const Variables = require('Variables');
var users = []
cc.Class({
    extends: cc.Component,

    properties: {
        startLayout: cc.Node,
        userBoard: cc.Node,
        logo: cc.Sprite,
        loading: cc.Node,
        boardGame: cc.Node,
        username: cc.Label,
        nameEditBox: cc.EditBox,
        alertMessage: cc.Node,
        _flag: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(cc.sys.localStorage.getItem('debug')) cc.sys.localStorage.removeItem('debug');
        Emitter.instance.registerEvent(Variables.transAudio, this.transAudio, this);
    },
    openUserBoard(){
     //   Variables.audio.playBackGround_sound()
        this.userBoard.active = true;
        this.node.active = false;
        this.logo.node.runAction(cc.moveBy(1,0,100));
    },
    createUser(){
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));
        if(!arrUsers){
            let newUser = new user();
            newUser.name = this.username.string;
            newUser.score = 0;
            users.push(newUser);
            cc.sys.localStorage.setItem("users", JSON.stringify(users));
        }else if(arrUsers){
            users = arrUsers;
            let newUser = new user();
            newUser.name = this.username.string;
            newUser.score = 0;
            users.push(newUser);
            cc.sys.localStorage.setItem("users", JSON.stringify(users));
        }
    },
    validateEditBox(){
        let arrUsers = JSON.parse(cc.sys.localStorage.getItem("users"));  
        if(!arrUsers){
            this._flag = false;
            return true;
        }else{
            for(let i = 0; i< arrUsers.length; i++){
                if(arrUsers[i].name == this.nameEditBox.string){
                    this.alertMessageBox("Your name have taken!");                  
                    return false;
                }
            }
            if(!this.nameEditBox.string) {               
                this.alertMessageBox("Please enter your name!");
                return false;
            }else{
                this._flag = false;
                return true;
            } 
        }
    },
    alertMessageBox(value){
        this.alertMessage.getChildByName("alertRichText").getComponent(cc.RichText).string = `<color=B4ECE3>Alert  </c><color=FFF8D5>${value}</color>`;
        this.alertMessage.runAction(cc.sequence(cc.moveBy(1,0,-160),cc.delayTime(1.5),cc.moveBy(1,0,160),cc.callFunc(()=>{this._flag = false})));
    },
    loadingGame(){
        if(!this._flag){
            this._flag = true;
            if(!this.validateEditBox()){
               Variables.audio.playMove_sound()
                return;
            }else if(this.validateEditBox()){
                this.createUser();
                if(!this._flag){
                    this._flag = true;
                    this.loading.active = true;
                    Variables.audio.playLoading_sound()
                    this.loading.runAction(cc.sequence(cc.callFunc(this.onCloud,this),cc.delayTime(2),cc.callFunc(this.offCloud,this)));
                    this.loading.runAction(cc.sequence(
                        cc.delayTime(1),
                        cc.callFunc(()=>{this.loading.getChildByName("BG").active = true}),
                        cc.delayTime(2),
                        cc.callFunc(this.loadProgressBar,this)
                        
                        )
                    );
                }
            }
        }
    },
    loadProgressBar(){
        Variables.audio.playLoading_sound()
        this.loading.getChildByName("BG").getChildByName("ProgressBar").runAction(
            cc.repeat(
                cc.sequence(cc.delayTime(0.2),
                cc.callFunc(()=>{this.loading.getChildByName("BG").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress+=0.1})
                ),10
            )
        );
        this.loading.runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(this.onCloud,this),
            cc.delayTime(2),
            cc.callFunc(()=>{this.loading.getChildByName("BG").active = false}),
            cc.callFunc(this.loadBoardGame,this),
            cc.callFunc(this.offCloud,this),
            cc.delayTime(1),
            cc.callFunc(()=>{this.loading.active = false}),
            )
        );
    },
    transAudio(data) {
        Variables.audio = data
    }, 
    loadBoardGame(){
        this.startLayout.active = false;
        this.boardGame.active = true;
    },
    onCloud(){
        this.loading.getChildByName("cloud1").runAction(cc.moveBy(1,400,0));
        this.loading.getChildByName("cloud3").runAction(cc.moveBy(1,-400,0));

        this.loading.getChildByName("cloud4").runAction(cc.moveBy(1,400,0));
        this.loading.getChildByName("cloud12").runAction(cc.moveBy(1,700,0));
        this.loading.getChildByName("cloud11").runAction(cc.moveBy(1,-680,0));

        this.loading.getChildByName("cloud13").runAction(cc.moveBy(1,-500,0));
        this.loading.getChildByName("cloud16").runAction(cc.moveBy(1,500,0));
        this.loading.getChildByName("cloud14").runAction(cc.moveBy(1,350,0));

        this.loading.getChildByName("cloud15").runAction(cc.moveBy(1,-460,0));
        this.loading.getChildByName("cloud2").runAction(cc.moveBy(1,500,0));

        this.loading.getChildByName("cloud6").runAction(cc.moveBy(1,450,0));
        this.loading.getChildByName("cloud7").runAction(cc.moveBy(1,650,0));
        this.loading.getChildByName("cloud8").runAction(cc.moveBy(1,-560,0));
    },
    offCloud(){
        this.loading.getChildByName("cloud1").runAction(cc.moveBy(1,-400,0));
        this.loading.getChildByName("cloud3").runAction(cc.moveBy(1,400,0));

        this.loading.getChildByName("cloud4").runAction(cc.moveBy(1,-400,0));
        this.loading.getChildByName("cloud12").runAction(cc.moveBy(1,-700,0));
        this.loading.getChildByName("cloud11").runAction(cc.moveBy(1,680,0));

        this.loading.getChildByName("cloud13").runAction(cc.moveBy(1,500,0));
        this.loading.getChildByName("cloud16").runAction(cc.moveBy(1,-500,0));
        this.loading.getChildByName("cloud14").runAction(cc.moveBy(1,-350,0));

        this.loading.getChildByName("cloud15").runAction(cc.moveBy(1,460,0));
        this.loading.getChildByName("cloud2").runAction(cc.moveBy(1,-500,0));

        this.loading.getChildByName("cloud6").runAction(cc.moveBy(1,-450,0));
        this.loading.getChildByName("cloud7").runAction(cc.moveBy(1,-650,0));
        this.loading.getChildByName("cloud8").runAction(cc.moveBy(1,560,0));
    },
    start () {
  //      Variables.audio.playBackGround_sound()

    },

    // update (dt) {},
    onDestroy(){
        Emitter.instance.removeListener(Variables.transAudio, this.transAudio, this);
    }
});

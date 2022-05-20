const Emitter = require("mEmitter");
const Variables = require('Variables');
cc.Class({
    extends: cc.Component,

    properties: {
        button_sound:{
            default : null,
            type : cc.AudioClip
         },
        BG_sound: {
            default : null,
            type : cc.AudioClip 
        },
        win_sound: {
            default : null,
            type :cc.AudioClip 
        },
        lose_sound: {
            default : null,
            type :cc.AudioClip 
        },
        move_sound: {
            default : null,
            type :cc.AudioClip
        },
       

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {   
        Emitter.instance.emit(Variables.transAudio, this)
    },

    start () {

    },
    playButton_sound (){
        this.pauseAll()
        cc.audioEngine.play(this.button_sound, false );
    },
    playBG_sound(){
        this.pauseAll()
        cc.audioEngine.play(this.BG_sound,false)
    },
    playWin_sound(){
        this.pauseAll()
        cc.audioEngine.play(this.win_sound,false)
    },
    playLose_sound(){
        this.pauseAll()
        cc.audioEngine.play(this.lose_sound,false)
    },
    playMove_sound(){
        this.pauseAll()
        cc.audioEngine.play(this.move_sound,false)
    },
    onDestroy: function (){ },

    pauseAll : function () {
        cc.audioEngine.pauseAll();
    },
    Show_Window() {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
            .to(0.5, { scale: 1, opacity: 255 }, { easing: "quartInOut" })
            .start();

    },
    Hide_Window() {
        cc.tween(this.node)
            .to(0.5, { scale: 0.2, opacity: 0 }, { easing: "quartInOut" })
            .call(() => { this.node.active = false; })
            .start();
 
    },

    // update (dt) {},
});

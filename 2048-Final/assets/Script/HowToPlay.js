const times  = require("lodash");

cc.Class({
    extends: cc.Component,

    properties: {
        menu: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    loadHowToPlay(){
        this.menu.active = true; 
        this.menu.opacity = 0; 
        this.menu.scale = 0.2; 
        cc.tween(this.menu) 
            .to(0.5, { scale: 1, opacity: 255 }, { easing: "quartInOut" }) 
            .start(); 
    },
    unloadHowToPlay(){
        cc.tween(this.menu) 
            .to(0.5, { scale: 0.2, opacity: 0 }, { easing: "quartInOut" }) 
            .call(() => { this.menu.active = false; }) 
            .start(); 
    },
    start () {

    },

    // update (dt) {},
});

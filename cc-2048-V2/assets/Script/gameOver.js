
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.node)
        // .(1, { scale: 0.4, opacity: 0 }, { easing: "quartInOut" })
     //   .to(0.2,{ scale: 1.5 })
        .to(1, { scale: 1, opacity: 255 }, { easing: "backInOut" })
        .start()
    },

    // update (dt) {},
});

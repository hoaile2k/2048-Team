
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.node)
        .to(2, { scale: 1, opacity: 255 }, { easing: "backInOut" })
        .start()
    },

    // update (dt) {},
});

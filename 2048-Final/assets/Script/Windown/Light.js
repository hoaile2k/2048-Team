

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.active = true;
        this.node.opacity = 0;     
        cc.tween(this.node)
        .repeatForever(
        cc.tween()
        .delay(2)
        .to(1,{ opacity: 255},{ easing: 'sineOutIn'})
        .delay(1)
        .to(0.5,{ opacity: 0},{ easing: 'sineOutIn'}))
        .start();

    },

    // update (dt) {},
});

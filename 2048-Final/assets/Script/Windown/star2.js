
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.tween(this.node)

        .to(0.5,{position:cc.v2 (2, 94),rotation: 360, easing: 'sineOutIn'})
       
        .start()
    },
    
        

    // update (dt) {},
});
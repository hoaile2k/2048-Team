cc.Class({
    extends: cc.Component,

    properties: {
        userBoard: cc.Node,
        logo: cc.Sprite,
        loading: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    openUserBoard(){
        this.userBoard.active = true;
        this.node.active = false;
        this.logo.node.runAction(cc.moveBy(1,0,100));
    },
    loadingGame(){
        this.loading.active = true;
        this.loading.runAction(cc.sequence(cc.callFunc(this.onCloud,this),cc.delayTime(2),cc.callFunc(this.offCloud,this)));
        this.loading.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(()=>{this.loading.getChildByName("BG").active = true}),
            cc.delayTime(2),
            cc.callFunc(this.loadProgressBar,this)
            )
        );
    },
    loadProgressBar(){
        this.loading.getChildByName("BG").getChildByName("ProgressBar").runAction(
            cc.repeat(
                cc.sequence(cc.delayTime(0.2),
                cc.callFunc(()=>{
                    this.loading.getChildByName("BG").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress+=0.1
                    if(this.loading.getChildByName("BG").getChildByName("ProgressBar").getComponent(cc.ProgressBar).progress >= 0.99){
                        cc.director.loadScene("2048");

                    }
                })
                
                ),10
            )
           
        );
        if(this.loading.progress == 1){
            cc.log('GO')
        }
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

    },

    // update (dt) {},
});

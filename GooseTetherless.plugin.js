 /**
 * @name GooseModThetherlessInjector
 * @version 0.0.2
 * @description injects GooseMod Tetherlessly, allowing for betterdiscord updates to function properly and providing stabily as for some reason it uninjects for me alot
 * @author WmeLuna
 * @authorId 865632950443835392
 * @updateUrl https://github.com/WmeLuna/ubuntu-dotfiles/raw/main/GooseTetherless.plugin.js
 */

module.exports = class GooseModThetherlessInjector{
     
load() { }
start() {
    function waitForGoose(){
        if(typeof goosemod !== "undefined"){
            BdApi.showToast("GooseMod Loaded", {type:"success"})
        }
        else{setTimeout(waitForGoose, 250);}
    }
    waitForGoose()
    BdApi.linkJS("gooseinject", 'https://raw.githack.com/GooseMod/GooseMod/dist-prod/index.js')
}
stop(){}
}

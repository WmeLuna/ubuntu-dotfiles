 /**
 * @name GooseModThetherlessInjector
 * @version 1.0.1
 * @description injects GooseMod Tetherlessly, allowing for betterdiscord updates to function properly and providing stabily as for some reason it uninjects for me alot
 * @author WmeLuna
 * @authorId 865632950443835392
 * @updateUrl https://raw.githubusercontent.com/WmeLuna/ubuntu-dotfiles/main/GooseTetherless.plugin.js
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

 /**
 * @name GooseModThetherlessInjector
 * @version 0.0.1
 * @description injects GooseMod Tetherlessly, allowing for betterdiscord updates to function properly and providing stabily as for some reason it uninjects for me alot
 * @author WmeLuna
 * @authorId 865632950443835392
 *  
 */

module.exports = class name{
     
load() { }
start() {
    const scr = document.createElement('script');
    scr.src = 'https://raw.githack.com/GooseMod/GooseMod/dist-prod/index.js';
    document.head.appendChild(scr);
}
stop(){}
}

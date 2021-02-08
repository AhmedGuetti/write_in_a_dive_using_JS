//Variable Here
const log = document.getElementById('log');
const input = document.getElementById('input');
var arrlog;






//Funcion Here


//log to the div Function
//Function that's log the text
function logtextadd(text){
    const char = document.createTextNode(text);
    log.appendChild(char);
};
function logtextremove(){
    const lastchar = log.lastChild;
    log.removeChild(lastchar);
};




//Function that make the logic under the event  
function keyinput(event){
    //arrlog = Array.from(log.innerHTML);

    if(event.key == 'Backspace'){
        if(log.innerHTML.length <= 0){
            return 0
        }
        else{
            logtextremove()
        }

        }
    else if(event.key == 'CapsLock' || event.key == 'AudioVolumeDown'|| event.key == 'AudioVolumeUp' || event.key == 'ArrowDown' || event.key == 'ArrowUp' || event.key == 'ArrowRight' || event.key == 'ArrowRight' || event.key == 'Control' || event.key == 'AltGraph' || event.key == 'Shift' || event.key == 'Alt' || event.key == 'Tab' || event.key == 'Escape' || event.key == 'AudioVolumeMute' || event.key == 'MediaPlayPause' || event.key == 'MediaTrackPrevious' || event.key == 'MediaTrackNext' || event.key == 'Meta' || event.key == 'Meta' || event.key == 'F1' || event.key == 'F2' || event.key == 'F3' || event.key == 'F4' || event.key == 'F5' || event.key == 'F6' || event.key == 'F7' || event.key == 'F8' || event.key == 'F9' || event.key == 'F10' || event.key == 'F11' || event.key == 'F12' ){
        return 0;
    }
    else{
        logtextadd(event.key);
        console.log(event.key.length)


    }
};




//Dom Manipulation Here
input.addEventListener('keydown' ,(event) => {
    keyinput(event)
        
    });
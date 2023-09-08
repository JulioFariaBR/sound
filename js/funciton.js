import { button1, button2, button3, button4, audio1, audio2, audio3, audio4} from "./vars.js";

let som1 = false; 
let som2 = false; 
let som3 = false; 
let som4 = false;

export function functionSom1() {
    if (som1 == false) {
        button1.className = "button pause"
        som1 = true
        audio1.play()
    } else {
        button1.className = "button play"
        som1 = false
        audio1.pause()
    }
}

export function functionSom2() {
    if (som2 == false) {
        button2.className = "button pause"
        som2 = true
        audio2.play()
    } else {
        button2.className = "button play"
        som2 = false
        audio2.pause()
    }
}

export function functionSom3() {
    if (som3 == false) {
        button3.className = "button pause"
        som3 = true
        audio3.play()
    } else {
        button3.className = "button play"
        som3 = false
        audio3.pause()
    }
}

export function functionSom4() {
    if (som4 == false) {
        button4.className = "button pause"
        som4 = true
        audio4.play()
    } else {
        button4.className = "button play"
        som4 = false
        audio4.pause()
    }
}

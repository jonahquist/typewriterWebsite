        /*const element = document.querySelector('#intro');

        var row1 = element.appendChild(document.createElement('div'));
        const text1 = "JONAH QUIST";
        var i = 0;

        function type1() {
            setTimeout(function() {
            row1.innerHTML += text1.charAt(i);
            i++;
            if (i < text1.length) {
                type1(text1); 
            }
        }, 50)
        }

        type1();

        element.appendChild(document.createElement('br'));

        var row2 = element.appendChild(document.createElement('div'));
        const text2 = "Hi my name is jonah quist";
        var j = 0;

        function type2() {
            setTimeout(function() {
            row2.innerHTML += text2.charAt(j);
            j++;
            if (j < text2.length) {
                type2(text2); 
            }
        }, 50)
        }

        type2();
        */


var cart = document.getElementById("caret");
cart.focus();
cart.blur();

const fast = 20;

const row1 = document.querySelector('#line-1');
const text1 = row1.innerHTML;
row1.innerHTML = "";
const row2 = document.querySelector('#line-2');
const text2 = row2.innerHTML;
row2.innerHTML = "";
const row3 = document.querySelector('#line-3');
const text3 = row3.innerHTML;
row3.innerHTML = "";
const row4 = document.querySelector('#line-4');
const text4 = row4.innerHTML;
row4.innerHTML = "";
const row5 = document.querySelector('#line-5');
const text5 = row5.innerHTML;
row5.innerHTML = "";
const row6 = document.querySelector('#line-6');
const text6 = row6.innerHTML;
row6.innerHTML = "";
const carett = document.querySelector('#caret');
const textCaret = carett.innerHTML;
carett.innerHTML = "";

let texts = [text1, text2, text3, text4, text5, text6, textCaret]
let elements = [row1, row2, row3, row4, row5, row6, carett]
console.log(elements);
console.log(texts);

function setCaret(editableElement) {
    var range, selection;
    range = document.createRange();
    range.selectNodeContents(editableElement);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function typing(elementNum, speed) {
    let text = texts[elementNum];
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            elements[elementNum].append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed)
}

function delay(n) {
    return new Promise(function(resolve) {
        setTimeout(resolve, n*fast);
    })
}

async function asyncFunction() {
    /*typingEffect(0, 150);

    await delay(2);

    typingEffect(1, 150);
    */
   for (let i = 0; i < 6; i++) {
       typing(i, fast);
       /*if (i > 1) {
        elements[i-1].innerHTML = "<div>Sophomore student at the <a href = \"https://washington.edu\"><span style = \"color: #D680FF\" >[University of Washington]</span></a> majoring</div>";
        }
        */
       await delay(texts[i].length);
   }
   row2.innerHTML = "<div>Sophomore at the <a href = \"https://www.hcde.washington.edu/\"><span class = \"purple\" id=\"purple\" style = \"text-decoration: none;\" >[University of Washington]</span></a></div>";
   row3.innerHTML = "<div>majoring in Human Centered Design and</div>";
   row4.innerHTML = "<div>Engineering. You can check out my <a class=\"green\" href = \"https://github.com/jonahquist\">[Github]</a> or</div>";
   row5.innerHTML = "<div>my <a class=\"red\" ref = \"resume.pdf\" href = \"resume.pdf\">[Resume]</a>!</div>";
   row6.innerHTML = "<div>email: <a class=\"blue\" href = \"mailto:quistjo@uw.edu\">quistjo@uw.edu</a></div>";
   await delay(50);
   typing(6, fast);
   


   
}
/*function typingEffect(element, speed, callback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let text = element.innerHTML;
            element.innerHTML = ""; 
            var i = 0;
            var timer = setInterval(function() {
                if (i < text.length) {
                    element.append(text.charAt(i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        }, 5000);
        resolve();
    })
}
*/


//typingEffect(row1, 50).then(typingEffect(row2, 150)).then(typingEffect(row3, 150)).then(typingEffect(row4, 150)).then(typingEffect(row5, 150)).then(typingEffect(row6, 150));
asyncFunction();
document.addEventListener('keydown', (event) => {
    keyPresser(event.code);

    
  }, false);

const keyList = new Array("KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "BracketRight", "Backspace", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight");
function keyPresser(key) {
    if (keyList.includes(key)) {
        var found = document.querySelector("#" + key);
        found.style.opacity(0.5);
    }
}



cart.spellcheck = false;
cart.blur();
cart.focus();

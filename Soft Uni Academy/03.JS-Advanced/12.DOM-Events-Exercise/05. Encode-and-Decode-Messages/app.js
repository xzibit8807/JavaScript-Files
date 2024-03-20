function encodeAndDecodeMessages() {
    const buttonsRef = document.querySelectorAll("button");
    const textAreas = document.querySelectorAll("textarea");
    const encodeBtn = buttonsRef[0];
    const decodeBtn = buttonsRef[1];
    const encodeTextArea = textAreas[0];
    const decodeTextArea = textAreas[1];

    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndReceive);

    function encodeAndSend(event){
        let currentText = encodeTextArea.value;
        let newMsg = "";
        for(let ch of currentText){
            let numValue = ch.charCodeAt();
            numValue ++;
            newMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = newMsg;
        encodeTextArea.value = "";
    }
    function decodeAndReceive(event){
        let currentValue = decodeTextArea.value;
        let decodeMsg = "";
        for(let ch of currentValue){
            let numValue = ch.charCodeAt();
            numValue--;
            decodeMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = decodeMsg;
    }
}
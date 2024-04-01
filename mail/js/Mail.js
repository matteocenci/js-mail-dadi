const mailList = [
    "loris@dadi.it", 
    "giovanni@dadi.it", 
    "matteo@dadi.it", 
    "luca@dadi.it"
];


const sendBtnElem = document.getElementById("send-btn");


sendBtnElem.addEventListener("click", function(){

    // const userMail = prompt("Inserisci la tua mail:");
    const mailInputElem = document.getElementById("mail");
    const mailValue = mailInputElem.value
    
    console.log(mailInputElem);
    
    let found = false;
    
    for (let i = 0; i < mailList.length; i++) {
        console.log(i, mailList[i]);
        if (mailValue === mailList[i]) {
            console.log("trovato!!!");
            found = true;
            break;
        }
    }
    
    if (found === true) {
        result.innerHTML = 'accesso consentito';
    } else {
        result.innerHTML = 'accesso negato';
    }
})



// const sendBtnElem = document.getElementById("send-btn");
// console.log(sendBtnElem);

// sendBtnElem.addEventListener("click", function(){
//     // test
//     // console.log("Click");






// })
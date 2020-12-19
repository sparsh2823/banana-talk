
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

// serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/minion.json"


function getTranslatedURL(text){
    return (serverURL + "?" + "text=" + text)
}

function errorHandler(error){
    console.log("error occured" , error)
    alert("Something wrong with server,try again after some time")
}


function clickHandler(){

    // outputDiv.innerText="here I am " + txtInput.value

    
    var inputText=txtInput.value; // taking input

    // calling server for processing 
    fetch(getTranslatedURL(inputText))
     .then(response=>response.json())
     .then(json=>{
         var translatedText=json.contents.translated
         outputDiv.innerText= translatedText // OUTPUT


     })

     .catch(errorHhandler)   

}


btnTranslate.addEventListener('click',clickHandler)






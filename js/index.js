function init() {
    setTimeout(function () {
        document.body.innerHTML = readHtml('./views/formulario.html');
    }, 3000);
}

function readHtml(url) {
    let request = new XMLHttpRequest();
    let output = null;
    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                output = request.responseText;
            }
        };
        request.open("GET", url, false);
        request.send(null);
    } catch (e) {
        console.log(e);
        output = '<h1>Sorry..., There was a Problem</h1>';
    } finally {
        return output;
    }
}

function _makeYourSecretPassword() {
    let _myCharacterInput = document.getElementById("_myCharacterInput").value;
    let _myExampleKey = document.getElementById("_myExampleKey").value;

    let _myNewFillKey = toPrimaryMakeIsFillKey(_myCharacterInput, _myExampleKey);
    let _generatingNewSecretPassword = generatingNewSecretPassword(_myCharacterInput, _myExampleKey);
    forExampleStartTheMagic(_myCharacterInput, _myNewFillKey, _generatingNewSecretPassword);
}

function generatingNewSecretPassword(myCharacterInput, myExampleKey) {
    let allCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", "_", "$", "&", "#", "@"];
    let numberInput = myCharacterInput.length;
    let numeroAleatorio = myExampleKey.length;
    let output = "";
    for (var i = 0; i < numberInput; i++) {
        numeroAleatorio = parseInt(Math.random() * allCharacters.length);
        output += allCharacters[numeroAleatorio];
    }
    return output;
}

function toSecondMakeIsGenerateArray(myArrayGenerate) {
    let promise = new Promise((resolve) => {
        let myNewArr = [];
        myArrayGenerate.forEach((element, index) => {
            let myNewInput = [];
            if (index) {
                let newArr = myNewArr[index - 1].slice(1);
                newArr.push(myNewArr[index - 1][0]);
                myNewInput = newArr;
            } else {
                myNewInput = myArrayGenerate;
            }
            myNewArr.push(myNewInput);
        });
        resolve(myNewArr);
    });
    return promise;
}

function forExampleInProcess(input) {
    let aux = document.createElement("input");
    aux.setAttribute("value", input);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function toGenerateMyAllCharacters() {
    let promise = new Promise((resolve) => {
        let allCharacters = "A!aB#b0C$cD%d1E&eF-f2G_gH.h3I:iJ*j4K=kL¿l5M?mN/n6Ñ~ñO(o7P)pQ+q8R{rS}s9T,tU;uV¡vW<wX>xY[yZ]z";
        resolve(allCharacters.split(""));
    });
    return promise;
}

function toThirdMakeIsGenerateSecretKey(myCharacter, myNewFillKey, myNewArr) {
    let mySecretPassword = "";
    let i = 0;
    while (i < myCharacter.length) {
        let j = myNewArr[0].findIndex((element) => element == myCharacter.charAt(i));
        let k = myNewArr[0].findIndex((element) => element == myNewFillKey.charAt(i));
        mySecretPassword += myNewArr[j][k];
        i++;
    }
    return mySecretPassword;
}

function forExampleStartTheMagic(myCharacterInput, myNewFillKey, generatingNewSecretPassword) {
    toGenerateMyAllCharacters().then((myNewAllCharacter) => {
        toSecondMakeIsGenerateArray(myNewAllCharacter).then((myNewArr) => {
            forExampleInProcess(toThirdMakeIsGenerateSecretKey(myCharacterInput, myNewFillKey, myNewArr));
            document.getElementById("send-button").style.display = "none";
            document.getElementById("ready-button").style.display = "block";
            document.getElementById("new-secret-password-generate").innerHTML = "Your Secret Password is: " + generatingNewSecretPassword;
        });
    });
}

function _finallyGetOutput() {
    forExampleInProcess(document.getElementById("new-secret-password-generate").innerText);
    document.getElementById("ready-button").style.display = "none";
    document.getElementById("send-button").style.display = "block";
    document.getElementById("_myCharacterInput").value = null;
    document.getElementById("_myExampleKey").value = null;
    document.getElementById("new-secret-password-generate").innerHTML = "";
}

function toPrimaryMakeIsFillKey(myCharacter, myKey) {
    let i = 0;
    let j = 0;
    let preparingMyNewFillKey = "";
    while (i < myCharacter.length) {
        preparingMyNewFillKey += myKey.charAt(j);
        if (j > myKey.length - 2) {
            j = 0;
        } else {
            j++;
        }
        i++;
    }
    return preparingMyNewFillKey;
}

init();
let character = 'abcdefghijklmnopqrstuvwxyz';
let bigCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '0123456789';
let symbol = '@!#$%&';

function createPassword() {
    let characterLeng = 3;
    let bigCharacterLeng = 3;
    let numberLeng = 2;
    let symbolLeng =2;
    let characterGroup = '';
    let bigCharacterGroup = '';
    let numberGroup = '';
    let symbolGroup = '';
    let passWord = '';
    
    for (let i = 0; i < characterLeng; i++) {
        characterGroup += character.charAt(Math.floor(Math.random() * character.length));
    };

    for (let i = 0; i < bigCharacterLeng; i++) {
        bigCharacterGroup += bigCharacter.charAt(Math.floor(Math.random() * bigCharacter.length));
    };

    for (let i = 0; i < numberLeng; i++) {
        numberGroup += number.charAt(Math.floor(Math.random() * number.length));
    };

    for (let i = 0; i < symbolLeng; i++) {
        symbolGroup += symbol.charAt(Math.floor(Math.random() * symbol.length));
    };
    
    let passWordBase = characterGroup + bigCharacterGroup + numberGroup + symbolGroup;
    let passWordAray = passWordBase.split('');

    passWord = passWordAray.sort(function(){
        return Math.random()-0.5;
    }).join('');

    outPut = document.getElementById("password");
    outPut.innerHTML = passWord
    console.log(passWord);
    
    return passWord;
};
let wordlist = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%&';

function createPassword() {
    let leng = 10;
    let passWord = '';
    
    for(let i = 0; i < leng; i++){
        passWord += wordlist.charAt(Math.floor(Math.random() * wordlist.length));
    };
    
    outPut = document.getElementById("password");
    outPut.innerHTML = passWord
    console.log(passWord);
    return passWord;
};
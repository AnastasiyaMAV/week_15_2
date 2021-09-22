function cheakInput() {
    let nickName = document.getElementById('formGroupNickname').value;
    let email = document.getElementById('exampleInputEmail').value;
    let password = document.getElementById('exampleInputPassword').value;
    let tel = document.getElementById('exampleInputTel').value;

    if(nickName == ""){
        alert('Ввидите, пожалуйста, Никнейм!');
    } else if(email == ""){
        alert('Введите, пожалуйста, Email!');
    } else if(password == ""){
        alert('Введите, пожалуйтса, пароль!');
    } else if(tel == ""){
        alert('Введите, пожалуйста, телефон!');
    } else {
        //alert('Добро пожаловать, ' + nickName + '!');
        alert(`Добро пожаловать, ${nickName}!`);
    }
}
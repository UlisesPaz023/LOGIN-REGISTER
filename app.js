const regInput = document.getElementById('register');
regInput.addEventListener('click', ()=>{
  let user = {
    name : document.register.name.value,
    lastName : document.register.lastName.value,
    email : document.register.email.value,
    password : document.register.password.value,
    newPassword : document.register.newPassword.value
  }
  let emailFlag = false;

  if(emailFlag){
    alert('El correo electrónico ya está en uso.');
  } else {
    alert('Has sido registrado con éxito.');
    fetch("http://localhost:3000/users",{
      method : 'POST',
      body: JSON.stringify({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password 
      }),
      headers: {
        'Content-type':'application/json; charset=UTF-8',
      }
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error))
  }
})

import myJson from './db.json' assert {type: 'json'};

const logInput = document.getElementById('login');

logInput.addEventListener('click', ()=>{
  const user = {
    emailInput : document.login.email.value,
    passwordInput : document.login.password.value
  }
  let trueUserFlag;

  myJson.users.forEach((e)=>{
    if (e.email === user.emailInput || e.password === user.passwordInput){
      trueUserFlag = true;
    } 
  })

  if(user.emailInput === ''|| user.email === null || user.password === '' || user.password === null ){
    return alert('Debes completar todos los campos.')
  } else if(!trueUserFlag){
    return alert('Usuario y/o contraseña incorrectos.')
  } else {

    
    fetch(`http://localhost:3000/users/${user.emailInput}`,{
    })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => console.error(`Ha fallado el inicio de sesión debido a ${error}`))
    alert('Bienvenido');
  }
})
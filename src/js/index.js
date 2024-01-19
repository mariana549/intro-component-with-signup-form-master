let mensagemError = document.querySelectorAll('.form .errorMensagem');
let icon = document.querySelectorAll('.form .containerInputs')
function inputsVerificar() {
   const form = document.querySelectorAll('.form input');
   form.forEach((elemento, index) => {
      let firstName = form[0];
      let lastName = form[1];
      let emailAddress = form[2];
      let password = form[3];
      
      if (elemento.value.trim() === "") {
         elemento.classList.add("error");

         icon[0].classList.add('errorIcon');
         icon[1].classList.add('errorIcon');
         icon[2].classList.add('errorIcon');
         icon[3].classList.add('errorIcon');

         firstName.placeholder= ""
         lastName.placeholder= ""
         password.placeholder= ""
         emailAddress.placeholder = 'email@examplo.com';
         emailAddress.style.setProperty('--DarkBlue', 'red');

         mensagemError[index].style.display = 'inline-block'

      } else {
         elemento.classList.remove("error");

         icon[0].classList.remove('errorIcon');
         icon[1].classList.remove('errorIcon');
         icon[2].classList.remove('errorIcon');
         icon[3].classList.remove('errorIcon');

         mensagemError[index].style.display = 'none'
      }
   })
}

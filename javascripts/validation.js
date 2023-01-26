function emailValidation() {
    const form = document.getElementById('form');
    const emailConfirmField =document.getElementById('email_confirm');
    const element = document.createElement('p');
    const message = document.createTextNode("Les emails ne correspondent pas");
    element.setAttribute('id','alert');
    const contentField = document.getElementById('content');
    emailConfirmField.addEventListener('input', e => {
      if(form.email.value !== form.email_confirm.value) {
    if (!document.getElementById('alert')) {
        contentField.parentNode.insertBefore(element, contentField);
        element.classList.add("alert_color");
        element.appendChild(message);
        
        emailConfirmField.classList.add("alert_bg");
    }
}
    else {
        emailConfirmField.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
    }
});
};
       
  window.onload = function () {
    emailValidation();
  };
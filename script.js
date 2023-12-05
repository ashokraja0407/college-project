const  formOpenBtn = document.querySelector("#form-open"),
   home = document.querySelector(".home"),
   formContainer = document.querySelector(".form_Container"),
   formCloseBtn = document.querySelector(".form_close"),
   signupBtn = document.querySelector("#signup"),
   loginBtn = document.querySelector("#login"),
   pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",() => home.classList.add("show"));
formCloseBtn.addEventListener("click",() => home.classList.remove("show"));

pwShowHide.forEach((icon)  => {
   icon.addEventListener("click", () => {
    let getPwinput = icone.parentElement.querySelector("input");
    if(getPwinput.type === "password") {
        getPwinput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye");
    } else {
        getPwinput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
    }
   });
});

signupBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.add("active")
});
loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.remove("active")
});
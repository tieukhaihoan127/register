// Thêm thông tin người dùng
const form = document.querySelector("#form");

if(form) {
    if(!localStorage.index) {
        localStorage.index = "0";
    }
    else{
        let num = Number(localStorage.getItem("index"));
        num+=1;
        localStorage.setItem(`index`, num.toString());
        const tempName = "fullname" + num.toString();
        const tempEmail = "email" + num.toString();
        const tempPass = "password" + num.toString();

        form.addEventListener("submit", (e) => {
            const fullName = e.target.fullName.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            localStorage.setItem(`${tempName}`, fullName);
            localStorage.setItem(`${tempEmail}`, email);
            localStorage.setItem(`${tempPass}`, password);
        });

    }
}






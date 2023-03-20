class Logic {

    check(user, password) {
        let userid = localStorage.getItem("userid")
        let userpassword = localStorage.getItem("userpassword")
        let output = false;
        if (user == userid && password == userpassword) {
            output = true;
        }
        else {

            output = false;
        }
        return output
    }
}



window.addEventListener("DOMContentLoaded", () => {
    console.log("Weather App By Amit and Jaidev")
    // console.log("loaded")
    let logic = new Logic()


    let signuppage = document.getElementById("signuppage")
    signuppage.classList.add("inv")



    let signuphere = document.getElementById("signuphere")
    signuphere.addEventListener("click", () => {
        signuppage.classList.remove("inv")
        loginpage.classList.add("inv")
    });
    let backtologin = document.getElementById("backtologin")
    backtologin.addEventListener("click", () => {
        signuppage.classList.add("inv")
        loginpage.classList.remove("inv")
    });



    // local storage signin
    let lbtn = document.getElementById('lbtn')
    lbtn.addEventListener("click", () => {


        let user = document.getElementById('user').value
        let password = document.getElementById('password').value

        let output = logic.check(user, password)
        if (output) {

            console.log("login successfull")
            window.location = "postlogin.html"

        }
        else {
            document.getElementById('user').value = ""
            document.getElementById('password').value = ""

            document.getElementById('content').innerHTML = "Invalid User ID and Password"
            return
        }
    });




    // local storage  signup

    let lbtnsignup = document.getElementById("lbtnsignup")
    lbtnsignup.addEventListener("click", () => {
        let usersignup = document.getElementById("usersignup").value
        let passwordsignup = document.getElementById("passwordsignup").value
        if (usersignup != "" && passwordsignup != "") {
            document.getElementById('user').value = ""
            document.getElementById('password').value = ""
            document.getElementById('content').innerHTML = ""
            localStorage.setItem("userid", usersignup)
            localStorage.setItem("userpassword", passwordsignup)
            // let userid = localStorage.getItem("userid")
            // let userpassword = localStorage.getItem("userpassword")
            // console.log(userid)
            // console.log(userpassword)
            // document.getElementById('content').innerHTML = ""
            signuppage.classList.add("inv")
            loginpage.classList.remove("inv")

        }
        else {
            document.getElementById("contents").innerHTML = "Please fill the above requirements"
            return
        }



    });




});
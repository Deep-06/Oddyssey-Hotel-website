

//DOMContentLoaded it is triggered when DOM is ready
document.addEventListener("DOMContentLoaded", function(){

    // Get the login form and add an event listener for form submission
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", handleLoginFormSubmit);
  
    // Get the signup form and add an event listener for form submission
    const signupForm = document.getElementById("signup");
    signupForm.addEventListener("submit", handleSignupFormSubmit);
  });
  
  // Function to handle login form submission
  function handleLoginFormSubmit(event) {
    event.preventDefault();
  
    // Get the values entered in the login form
    const email = document.getElementById("login_mail").value;
    const password = document.getElementById("login_pass").value;

    let alert=document.getElementById("login-alert")

    let arr=JSON.parse(localStorage.getItem("signupData"))||[]

    if(arr.find(e=>e.email===email &&e.password===password)){
      console.log("signed in sucessfull")
      alert.innerText="signed in sucessfull"
    }else{
      console.log("wrong credentials")
      alert.innerText="wrong credentials"
    }
   

   
  
    // Clear the login form fields after submission 
    document.getElementById("login_mail").value = "";
    document.getElementById("login_pass").value = "";
  }
  
  // Function to handle signup form submission
  function handleSignupFormSubmit(event) {
    event.preventDefault();
  
    // Get the values entered in the signup form
    const firstname = document.querySelector(".signup-firstname").value;
    const lastname = document.querySelector(".signup-lastname").value;
    const gender = document.querySelector(".signup-gender").value;
    const email = document.querySelector(".signup-mail").value;
    const password = document.querySelector(".signup-pass").value;
    const password_check=document.querySelector(".signup-password").value
    
  
    // Store the signup data in local storage

    const signupData = {
      firstName: firstname,
      lastName: lastname,
      fullName: `${firstname} ${lastname}`,
      gender: gender,
      email: email,
      password: password,
    };

    let arr=JSON.parse(localStorage.getItem("signupData"))||[]

    
   const duplicate=arr.find((e)=>  e.email===signupData.email);
   const invalid_password=password===password_check? true:false
   let alert=document.getElementById("alert")
  
   if(!duplicate && (invalid_password||password!=="") && firstname!==""&&lastname!==""&&gender!=="" && email!=="" &&password!=="",password_check!==""){
        console.log(signupData.email)
        arr.push(signupData) 
        alert.innerText=`signed in sucessfully`
       
    }else if(!invalid_password){
        alert.innerText=`invalid password`
    
    }else if(firstname===""||lastname===""||gender==""||email==""||password=="",password_check==""){
      alert.innerText=`fill all feilds`
    }else{
      alert.innerText=`already signed up`
    }
   
    
    localStorage.setItem("signupData", JSON.stringify(arr));
  

    // Clear the signup form fields after submission 
    document.querySelector(".signup-firstname").value = "";
    document.querySelector(".signup-lastname").value = "";
    document.querySelector(".signup-gender").value = "";
    document.querySelector(".signup-mail").value = "";
    document.querySelector(".signup-pass").value = "";
    document.querySelector(".signup-password").value = "";
  }
  
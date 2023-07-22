

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

    let alertElement=document.getElementById("login-alert")

    let arr=JSON.parse(localStorage.getItem("signupData"))||[]


    if(arr.find(e=>e.email===email &&e.password===password)){
      console.log("signed in sucessfull")
      alertElement.innerText="signed in sucessfull"
      Redirect()
    }else if(email==`admin@admin.com`,password==`admin`){
      console.log(email,password)
      Redirect("admin")
    }
    else{
      console.log("wrong credentials")
      alertElement.innerText="wrong credentials"
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
      unique_id: `${firstname}+${Math.floor(Math.random()*1e+16).toString(16)}`
    };

    let arr=JSON.parse(localStorage.getItem("signupData"))||[]

    
   const duplicate=arr.find((e)=>  e.email===signupData.email);
   const invalid_password=password===password_check? true:false
   let alertElement=document.getElementById("alert")
  
if (!duplicate && invalid_password && firstname !== "" && lastname !== "" && gender !== "" && email !== "" && password !== "" && password_check !== "") {
  console.log(signupData.email);
  arr.push(signupData);

// post user database to the server
  postdata("https://mock-odyssey-api-server.onrender.com/products",signupData)

  alertElement.innerText = "Signed up successfully";
} else if (!invalid_password) {
  alertElement.innerText = "Invalid password";
} else {
  alertElement.innerText = "Please fill all fields";
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
  
// redirect to the  admin and home page 
  function Redirect(...user) {
      
    if(user=="admin"){
    window.location.replace("./hotel.html")
    }else{
    window.location.replace("/index.html")
    }
     
  }

    //  post data to server
     async function postdata(url,obj){
      try{
        let res=await fetch(url,{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(obj)
        })
        let data=await res.json()
        console.log(data)
      }catch(err){
        console.log(err)
      }
     }

     
     async function getdata(url,user){
      
      try{
        let res=await fetch(url,{
          method:"GET",
        
        })
        let data=await res.json()
        console.log(data)
      let x=data.map((item)=>{return item.country})
       return x.find((item)=>item==user)
      }catch(err){
        console.log(err)
      }
     }


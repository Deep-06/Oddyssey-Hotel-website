import nav from "./Navbar.js";
import footer from "./footer.js";

let navdiv=document.querySelector('nav')
navdiv.innerHTML=nav

let footdiv=document.querySelector('footer')
footdiv.innerHTML=footer

let btn = document.getElementById("submit");
  // let Dname=document.getElementById("dname");
  // let Dmsg=document.getElementById("dmsg");
  // let inpname=document.getElementById("name");
  // let inpmsg=document.getElementById("message");

  btn.addEventListener("click",function(){
    alert("Message Send Successfully")

    // Dname.innerText=inpname.value;
    // Dmsg.innerText=inpmsg.value;
  })
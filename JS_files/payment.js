// import nav from "./Navbar.js";

// import footer from "./footer.js";
// let navdiv=document.querySelector('nav')
// navdiv.innerHTML=nav

// let footdiv=document.querySelector('footer')
// footdiv.innerHTML=footer


let total=localStorage.getItem("total")
// console.log(total)

let totalamount=document.getElementById("total-amount")
totalamount.append(total)

let cnfbtn=document.querySelector("#payment-form");
cnfbtn.addEventListener("submit",function(e){
    e.preventDefault()
    alert(`Your Hotel Booking of ₹ ${total} is Done . Details Send To Your Email Address Thank you.`)
    
    window.location.href="/index.html"

})
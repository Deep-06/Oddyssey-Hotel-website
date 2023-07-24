const form = document.getElementById('details-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const pincode = document.getElementById('Pincode').value;
  const mobilenumber = document.getElementById('MobileNumber').value;
  const checkin = document.getElementById('Check-in').value;
  const checkout = document.getElementById('Check-out').value;
  
  
  
  console.log(fullname, address, city, state, pincode,mobilenumber,checkin,checkout);
  window.location.href="payment.html"
  // let user_res = JSON.parse(localStorage.getItem("user-response"));

  // if(user_res==true){
  //   window.location.href="/HTML/payment.html"
  //  }else{
  //   window.location.href="/HTML/login.html"
  //  }

});



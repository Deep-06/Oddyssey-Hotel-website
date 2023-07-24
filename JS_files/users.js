let global = [];
let tbodyel = document.querySelector("tbody");
let countEl = document.querySelector(".counter");
let c = 0;
let torders = document.querySelector("#total-orders");
let formel = document.querySelector("form");

let categoryEl = document.getElementById("category");
let genderEl = document.getElementById("gender");
let imageEl = document.getElementById("image");
let nameEl = document.getElementById("name");
let priceEl = document.getElementById("price");
let ratingEl = document.getElementById("rating");
let tagEl = document.getElementById("tag");
let updatebtn = document.querySelector(".update-btns");
let stCount = document.getElementById("s-count");
let sCount = document.getElementById("o-stock");

let buttonEl = document.querySelector(".btns");
let idEl = document.getElementById("id");
let AddPro = document.getElementById("btn");

AddPro.addEventListener("click", (e) => {
  idEl.style.display = "none";
  updatebtn.style.display = "none";
  e.preventDefault();
  document.getElementById("vac").style.display = "block";

  buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi");
    fetch(`https://mock-odyssey-api-serverrr.onrender.com/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        country: categoryEl.value,
        location:genderEl.value,
        rating: ratingEl.value,
        price: priceEl.value,
        image: imageEl.value,
      }),
    }).then((Response)=>{
      console.log(Response.status);
      window.location.reload()
    })
   
  });

});

let togglebtn = document.querySelectorAll(".checkbox")[0];
let search = document.querySelectorAll(".fa-solid fa-magnifying-glass")[0];
let body = document.querySelectorAll("#interface")[0];
let dash = document.querySelectorAll(".i-name")[0];
togglebtn.addEventListener("click", () => {
  console.log("toggle");
  body.classList.toggle("dark");
  dash.classList.toggle("dark");
});

let tproducts = document.getElementById("total-products");

getdata();
async function getdata() {
  let req = await fetch("https://mock-odyssey-api-serverrr.onrender.com/users");
  let data = await req.json();

  display(data);
  global = data;
  tproducts.textContent = data.length;
}

function display(data) {
  //   console.log(data[0].price)

  tbodyel.innerHTML = "";
  data.forEach((element, i) => {
    console.log(element.country);
    let card = document.createElement("tr");
    tbodyel.append(card);

    let td1 = document.createElement("td");
    td1.innerText = element.country;

    let td2 = document.createElement("td");
    td2.innerText = element.rating;

    let td3 = document.createElement("td");
    td3.innerText = element.price;
    td3.setAttribute("id", "td4");

    let td4 = document.createElement("td")
    let image = document.createElement("img")
    image.setAttribute("src", element.image)
    td4.append(image)

    let td5 = document.createElement("td");
    td5.innerText = element.location;

    let td6 = document.createElement("td");
    td6.innerText = "Delete"
    td6.style.color = "red"
    td6.style.cursor = "pointer"


    td6.addEventListener("click", () => {

      global.forEach((ele, ind) => {

        if (ind == i) {
          // let requiredd = e.target.element.id
          fetch(`https://mock-odyssey-api-serverrr.onrender.com/products/${ele.id}`, {
            method: "DELETE",
            headers: {
              'Content-type': 'application/json'
            },
          })
            .then(response => response.json())
            .then(data => console.log(data))
         
        }


      })
      display(global)
    })

    let td7 = document.createElement("td");
    td7.innerText = "Edit"

  td7.addEventListener("click", (e) => {
      e.preventDefault();
      // idEl.style.display = "none"
      document.getElementById("vac").style.display = "block"

      console.log("hello")
    })
    updatebtn.addEventListener("click", (e) => {
      e.preventDefault();
      let obj = {
        image: imageEl.value,
        country: categoryEl.value,
        rating: ratingEl.value,
        price: priceEl.value,
        location:genderEl

      }
      global.forEach((elem, ind) => {
        
        if (elem.id == idEl.value) {
          console.log('edit')

          fetch(`https://mock-odyssey-api-serverrr.onrender.com/products/${elem.id}`, {
            method: "PUT",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)

          }).then(Response => console.log(Response.status))
        }
      })
      display(global)
      window.location.reload()
    })
    card.append(td4, td1, td2, td3, td5, td6,td7);
  });

  
}

countEl.addEventListener("click", () => {
  c++;
  torders.textContent = c;
  // stCount.textContent --
  if (stCount.textContent >= 0) {
    stCount.textContent--;
    if (stCount.textContent == -1) {
      stCount.textContent = 5;

      sCount.textContent++;
    }
  }
});
let searchinp = document.getElementById("searchinp")

formel.addEventListener("submit", (e) => {
  e.preventDefault();
  let textel = searchinp.value;

  let filtered = global.filter((element) => {
    if (element.country.toUpperCase().includes(textel.toUpperCase()) == true) {
      return true;
    } else {
      return false;
    }
  });
  display(filtered);
});

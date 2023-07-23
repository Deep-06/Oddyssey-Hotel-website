//main is location  where we want to append data

function display(main,data){
    data.forEach(e => {
        let card=cardList(e)
        console.log(card)
        main.append(card)
    });    
}
function cardList(item){
    let card=document.createElement("tr");
    card.className="cardList";

    let fullName=document.createElement("td");
    fullName.className="user-name";
    fullName.innerText=item.fullName

    let gender=document.createElement("td");
    gender.className="gender";
    gender.innerText=item.gender;

    let mail=document.createElement("td");
    mail.className="e-mail";
    mail.innerText=item.email;

    let password=document.createElement("td");
    password.className="password"
    password.innerText=item.password

    let user_id=document.createElement("td");
    user_id.className="user-id";
    user_id.innerText=item.id;

    card.append(fullName,gender,mail,password,user_id)
   
    return card


}

export {cardList,display}
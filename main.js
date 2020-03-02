fetch("data.json")   
.then((response)=>{
    return response.json()
}).then((data)=>{
   //console.log(data);
   display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    //card view
    let card=document.createElement("div");
    card.classList.add("card");

    //heading
    let heading=document.createElement("h1");
    heading.textContent=info.name;
    bodyElement.append(card);
    card.append(heading);
    let line=document.createElement("hr");
    card.append(line);

    let roll=document.createElement("h1");
    roll.textContent=info.role;
    card.append(roll);

    let mail=document.createElement("a");
    mail.href="mailto:"+info.email;
    mail.textContent=info.email;
    card.append(mail);
     let br=document.createElement("br");
     let br1=document.createElement("br");
     card.append(br);
     card.append(br1);

    let number=document.createElement("a");
    number.href="tel:"+info.mobile;
    number.textContent=info.mobile;
    card.append(number);
    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);

}
    
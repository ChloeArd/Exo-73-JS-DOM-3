let avatarEls = document.getElementsByTagName("img");

for (let i = 0; i < avatarEls.length; i++) {
    avatarEls.item(i).style.height = 300 + "px";
}

avatarEls.addEventListener("mouseover", function (){
    document.getElementsByTagName('img').innerHTML = "Tu as survolé l'image";
})












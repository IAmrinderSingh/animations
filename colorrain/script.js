function rain(){
    let body=document.querySelector("body");
    let amount=500;
    let i=0;
    while (i<amount){
        let drop=document.createElement("i");
        let drop_width=Math.random()*5;
        let drop_postion=Math.floor(Math.random()*window.innerWidth);
        let delay=Math.random()*-25;
        let duration=Math.random()*5;
        drop.style.left=drop_postion+'px';
        drop.style.width=0.2+drop_width+'px';
        drop.style.animationDelay=delay+'s';
        drop.style.duration=duration+'s';
        body.appendChild(drop);
        i++;
    }
}
rain();
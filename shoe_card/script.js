// 3-d card animation
const container=document.querySelector(".container");
const card=document.querySelector(".card");

// rotatinf container on mouse hover
container.addEventListener("mousemove",(e)=>{
    console.log(e.pageX,e.pageY);
    let xAxis=(window.innerWidth/2-e.pageX)/20;
    let yAxis=(window.innerHeight/2-e.pageY)/20;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


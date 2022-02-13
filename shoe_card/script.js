// 3-d card animation
const container=document.querySelector(".container");
const card=document.querySelector(".card");
const img=document.querySelector("img");
const title=document.querySelector(".title");
const description=document.querySelector(".description");
const sizes=document.querySelector(".sizes");
const purchase=document.querySelector(".purchase");
// rotating container on mouse hover
container.addEventListener("mousemove",(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/25;
    let yAxis=(window.innerHeight/2-e.pageY)/25;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

// when mouse moves in
container.addEventListener("mouseenter",(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/25;
    let yAxis=(window.innerHeight/2-e.pageY)/25;
    card.style.transition="none";
    // poping out card elements
    img.style.transform=`translate3d(${xAxis}px,${yAxis}px,150px) rotate(-40deg)`;
    title.style.transform=`translate3d(0px,0px,130px)`;
    description.style.transform=`translate3d(0px,0px,120px)`;
    sizes.style.transform=`translate3d(0px,0px,100px)`;
    purchase.style.transform=`translate3d(0px,0px,90px)`;
});

// when mouse moves out

container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateX(0deg) rotateY(0deg)`;
    // poping in card elements
    img.style.transform=`translate3d(0px,0px,0px) rotate(0deg)`;
    title.style.transform="translate3d(0px,0px,0px)";
    description.style.transform="translate3d(0px,0px,0px)";
    sizes.style.transform="translate3d(0px,0px,0px)";
    purchase.style.transform="translate3d(0px,0px,0px)";
});
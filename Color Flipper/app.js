const colors =["green", "red","rbga(133,12,200)","#f15025","yellow"];
const btn =document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
       const randomNo = getrandomNO();
       document.body.style.backgroundColor= colors[randomNo];
       color.textContent = colors[randomNo];
})
function getrandomNO(){
    return Math.floor(Math.random() * colors.length);
}
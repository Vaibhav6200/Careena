content1 = document.getElementById("content1")
content2 = document.getElementById("content2")
content3 = document.getElementById("content3")
content4 = document.getElementById("content4")
content5 = document.getElementById("content5")

window.onload = Btn1;
function Btn1(){
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
function Btn2(){
    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";
}
function Btn3(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
    content5.style.display = "none";
}
function Btn4(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "flex";
    content5.style.display = "none";
}
function Btn5(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "flex";
}
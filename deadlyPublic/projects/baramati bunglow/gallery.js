const curr = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click',imgClick));

function imgClick(e){

    //reset opacity
    imgs.forEach(img=>img.style.opacity = 1);
    //change current img to src of curr. img
    curr.src = e.target.src 

    //add fadein class
    curr.classList.add('fade-in');
    //remove the class
    setTimeout(()=>curr.classList.remove('fade-in'),500);
    //change opacity

    e.target.style.opacity = opacity;
}

var i = 1;
var l = imgs.length;

var a = document.querySelector('.forward');
var b = document.querySelector('.back');
a.addEventListener('click',imgBtnClkFoward);
b.addEventListener('click',imgBtnClkBack);
function imgBtnClkFoward(e){
    imgs.forEach(img=>img.style.opacity = 1);
    curr.src = imgs[i%l].src;
    curr.classList.add('fade-in');
    setTimeout(()=>curr.classList.remove('fade-in'),500);
    imgs[i%l].style.opacity = opacity;
    i++;
}

function imgBtnClkBack(e){
    imgs.forEach(img=>img.style.opacity = 1);
    curr.src = imgs[i%l].src;
    curr.classList.add('fade-in');
    setTimeout(()=>curr.classList.remove('fade-in'),500);
    imgs[i%l].style.opacity = opacity;
    i--;
    if(i<0){
        i = l-1;
    }

}

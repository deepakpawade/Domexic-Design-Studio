//Sticky Menu background
window.addEventListener('scroll',function(){
    if(window.scrollY>150){
        document.querySelector('#navbar').getElementsByClassName.opacity=0.4;
    }
    else{
        document.querySelector('#navbar').getElementsByClassName.opacity=1;
    }
});

//Smooth Scrolling
$('#navbar a, btn').on('click',function(e)
{
    if(this.hash!==''){
        e.preventDefault();
    
        const hash=this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 100
        },100);
    }
});
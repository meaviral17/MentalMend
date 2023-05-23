



//+++++++++++++++++++++++++++++++++HAMBURGER MENU+++++++++++++=++++++++++++++++++++++++



const hamburger=document.querySelector('.hamBurger');


const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const midLine1=document.querySelector('.mid-line1');
const midLine2=document.querySelector('.mid-line2');

const mobileNav=document.querySelector('#mobile-nav');

const mobileNavList=document.querySelectorAll('.mobile-view-list');


hamburger.addEventListener('click',()=>{
    

    line1.classList.toggle('changetheline1');
    line3.classList.toggle('changetheline3');

    midLine1.classList.toggle('changeMidLine1');
    midLine2.classList.toggle('changeMidLine2');

    mobileNav.classList.toggle('show-nav');

})




mobileNavList.forEach((list)=>{
    list.addEventListener('click',()=>{
        mobileNav.classList.remove('show-nav');

        line1.classList.toggle('changetheline1');
        line3.classList.toggle('changetheline3');
    
        midLine1.classList.toggle('changeMidLine1');
        midLine2.classList.toggle('changeMidLine2');
    })
})
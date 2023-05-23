

// IMAGE AMIMATIONS


const images=document.querySelectorAll('.container-img ');


let options ={
    root: null,
    rootMargin:'0px',
    threshold:0
}


let observer=new IntersectionObserver((entries,observe)=>{
    entries.forEach((entry)=>{

        // console.log(entry.target.classList);
        if(entry.target.classList[2]!="side"){

            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }else{
                entry.target.classList.add('fade-out');
            }
        }else{

            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }else{
                entry.target.classList.add('fade-out-2');
            }
        }


    })
})

images.forEach((image)=>{
    observer.observe(image);
})
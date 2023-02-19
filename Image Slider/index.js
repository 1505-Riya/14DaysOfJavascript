const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");

const imgsEl=document.querySelectorAll("img");

const imgContainerEl=document.querySelector(".image-container");

let currentImg=1;

let timeout;


nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});
prevEl.addEventListener("click",()=>
{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

function updateImg(){
    //last to first and first to last
    if(currentImg>imgsEl.length){
        currentImg=1;
    }else if(currentImg<1){
        currentImg=imgsEl.length;
    }

    imgContainerEl.style.transform =`translateX(-${(currentImg-1)*500}px)`;
    
    // auto slider
    timeout=setTimeout(()=>
    {
        currentImg++;
        updateImg();
    },3000);
}

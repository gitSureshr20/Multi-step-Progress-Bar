const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const iconWrapper = document.querySelectorAll(".icon-wraper");

let currentSelectedStep = 1;

nextBtn.addEventListener("click",()=>{
    if(currentSelectedStep < iconWrapper.length){
        currentSelectedStep++
    }
    handleUpdateStep();
})

prevBtn.addEventListener("click",()=>{
    if(currentSelectedStep > 1){
        currentSelectedStep--;
    }
    handleUpdateStep();
})

function handleUpdateStep(){
iconWrapper.forEach((item,index)=>{
    if(index < currentSelectedStep){
        item.classList.add("active")
    }
    else{
        item.classList.remove("active")
    }
})
progress.style.width =
    ((currentSelectedStep - 1) / (iconWrapper.length - 1)) * 100 + "%";




if(currentSelectedStep === 1){
    prevBtn.disabled =true;
}
else if(currentSelectedStep === iconWrapper.length){
    nextBtn.disabled=true
}
else{
    prevBtn.disabled=false;
    nextBtn.disabled=false;
}
}

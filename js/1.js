const box = document.getElementsByClassName("box");
window.addEventListener("scroll",()=>{
    for(let i = 0 ; i < box.length ; i++)
    {
        let heightPresent = 0;
        heightPresent = box[i].offsetTop;
        if(window.pageYOffset > heightPresent-0.5*box[i].clientHeight){
            box[i].classList.add("active");
        }
        else{
            box[i].classList.remove("active");
        }
        // console.log(box[i].offsetTop , window.pageYOffset);
    }
    // console.log(window.pageYOffset);
});
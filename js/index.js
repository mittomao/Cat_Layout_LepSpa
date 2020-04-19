const loadweb = document.getElementsByClassName("load");
  window.addEventListener("scroll" , ()=>{
      for(var i = 0 ; i < loadweb.length;i++){
        var inload = loadweb[i].offsetTop - 1000;
        if (window.pageYOffset > inload) {

        if(i%2==0)
        {
          loadweb[i].classList.add('goload');
        }
        else
          loadweb[i].classList.add('goload1');
         
	   }
	   else
	   {
		      loadweb[i].classList.remove('goload');
          loadweb[i].classList.remove('goload1');    
	   }
	  }
});


const scroll_top= document.querySelector("#btn-scroll");
scroll_top.addEventListener("click",()=>{
    let height_present = self.pageYOffset;
    let set = height_present;
    let run = setInterval(() => {
        height_present-=0.01*set;
        window.scrollTo(0,height_present);
        if(height_present < 0)
        {
          clearInterval(run);
        }
    }, 20);
});
const btn_click_right = document.querySelector("#btn_click_right");
btn_click_right.addEventListener("click",()=>{
  
    document.body.classList.toggle("toggle-menu");
});

const btn_click_chat = document.querySelector("#btn_click_chat");
btn_click_chat.addEventListener("click",()=>{
  
    document.body.classList.toggle("toggle-form-chat");
});



// 

// const small = document.querySelector(".small-cursor");
// const large = document.querySelector(".large-cursor");
// document.onmousemove = (e)=>{
//   small.style.left = (e.pageX - 5) + "px";
//   small.style.top = (e.pageY - 5) + "px";
//   large.style.left = (e.pageX - 22) + "px";
//   large.style.top = (e.pageY - 22) + "px";
//   small.style.display = "block";
//   large.style.display = "block";
// }

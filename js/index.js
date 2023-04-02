const fileReader=document.querySelector('input[type="file"]');
const slider=document.querySelector(".slider");
const leftButton=document.querySelector(".left");
const rightButton=document.querySelector(".right");
const images=document.querySelectorAll(".slider img")
let i =0;
const imgs=[];



fileReader.addEventListener("change",function(e){
   const reader = new FileReader();
   reader.onloadend= function(){
    const img = new Image();
    img.src = reader.result;
    slider.appendChild(img);
    img.style.display="none"
    imgs.push(img);
    console.log(img,imgs);

   }
   reader.readAsDataURL(fileReader.files[0])
},false)

rightButton.addEventListener("click",function(e){
  if(imgs[i]===imgs[0]){
   imgs[2].style.display="none"
   imgs[i].style.display="flex";
   console.log("n");
   i++;
  }
  else if(imgs[i]===imgs[1]){
   imgs[0].style.display="none"
   imgs[i].style.display="flex"
   i++
   console.log("ig");
  }
  else if(imgs[i]===imgs[2]){
   imgs[1].style.display="none";
   imgs[i].style.display="flex"
   i=0
  }
})

leftButton.addEventListener("click",function(e){
    if(imgs[i]===imgs[0]){
    imgs[0].style.display="none";
    imgs[2].style.display="flex"
    i=2;
   }
    else if(imgs[i]===imgs[1]){
     imgs[1].style.display="none"
     imgs[0].style.display="flex"
     i=1
    }
   else if(imgs[i]===imgs[2]){
    imgs[2].style.display="none"
    imgs[1].style.display="flex";
    console.log("in");
    i--;
   }
   
 })






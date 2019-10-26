const button=document.querySelector('.popup-btn');
const popup=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');
button.addEventListener('click',(e)=>{
  popup.style.display='block';  
})
close.addEventListener('click',(e)=>{
  popup.style.display='none';
})
popup.addEventListener('click',(e)=>{
  popup.style.display='none';
})

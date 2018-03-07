// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Get all the link
var link = document.querySelectorAll('#nav-menu a');
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
  modalBtn.classList.toggle('active');
  return false;
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
  modalBtn.classList.toggle('active');
  return false;
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
    modalBtn.classList.toggle('active');
    return false;
  }
}

// END OF MODAL ELEMENt 

// PARALLAX BACKGROUND EFFECT 

// const parallax= document.getElementById("bg-3");
// window.addEventListener("scroll", function() {
//     let scrolledHeight= window.pageYOffset,
//     limit= parallax.offsetTop+ parallax.offsetHeight;
//     if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
//         parallax.style.backgroundPositionY= (scrolledHeight - parallax.offsetTop) /1.5+ "px";
//     } 
//     else {
//         parallax.style.backgroundPositionY= "0";
//     }
// });

window.addEventListener('scroll', function(e) { 
  let yScroll = window.pageYOffset;
  // Header Parallax Effect 
  document.getElementById('bg-4').style.transform  =  'translate(-'+ yScroll /22 +'%, '+ yScroll /2 +'%)';
  document.getElementById('bg-1').style.transform  =  'translate('+ yScroll /18 +'%, '+ yScroll /4 +'%)';
  document.getElementById('bg-3').style.transform  =  'translate(-'+ yScroll /6 +'%,  '+ yScroll /6 +'%)';
  document.getElementById('bg-2').style.transform  =  'translate('+ yScroll /26 +'%, '+ yScroll /5.5 +'%)';

  // USP Parallax Effect 
  
 if (yScroll > document.querySelector('#usp').offsetTop - window.innerHeight) {
   let offset = Math.min(0, yScroll - document.querySelector('#usp').offsetTop + window.innerHeight - 650) ;
   document.querySelector('#usp .card:nth-child(1)').style.transform  = 'translate('+ offset  +'px,'+ Math.abs(offset * 0.2) +'px) ';
   document.querySelector('#usp .card:nth-child(3)').style.transform  = 'translate('+ Math.abs(offset)  +'px, '+ Math.abs(offset * 0.2) +'px)';
 }
    
     

  // document.querySelector('#usp .card').style.transform  =  'translate('+ yScroll /20 +'%, + 0)';

});


// // 
document.addEventListener('DOMContentLoaded', function(){
  let about = document.getElementById('about');
  let topLayer = about.querySelector('.top');
  let handle = about.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(about.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  about.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.2;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});
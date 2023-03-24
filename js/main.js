


const menuOverlay = document.getElementById("overMenu");
const openMenu = document.getElementById("menuOpen");
const closeMenu = document.getElementById("menuClose");
const contentMenu = document.getElementById('containerMenu');

//tadgsdg
const card = document.querySelector('.geral-item');
const des = document.querySelector('.descrip');
let isShow = true;




openMenu.addEventListener('click', openModal);
closeMenu.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick)

function openModal(){
  menuOverlay.style.display = 'block';
  contentMenu.style.width  = '320px';
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}


function closeModal(){
  menuOverlay.style.display = 'none';
  contentMenu.style.width  = '0px';
  document.body.style.overflow = "auto"; 
  document.body.style.height = "auto"
}


function outsideClick(e) {
  if (e.target == menuOverlay) {
    closeModal()
  }
}







window.addEventListener('scroll', function() {
  const nav = document.querySelector('.myNav');
  if(window.scrollY > 0) {
    nav.style.backgroundColor = '#5865f2';
  } else { transparent
    nav.style.backgroundColor = 'transparent';
  }
});

const options = document.querySelectorAll('.po');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(option => option.classList.remove('selected'));
    option.classList.add('selected');
  });
});


card.addEventListener('click', function() {

if(isShow) {
  
  card.style.height = '200px';
  card.style.backgroundColor = '#5865f2';
  card.style.color = 'white';
  des.style.display = 'block';
  isShow = false;

} else {
  card.style.height = '100px';
  card.style.backgroundColor = '#f6f6f6';
  card.style.color = 'black';
  des.style.display = 'none';
  isShow = true;

}




});
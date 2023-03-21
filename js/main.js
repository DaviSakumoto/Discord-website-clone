


const menuOverlay = document.getElementById("overMenu");
const openMenu = document.getElementById("menuOpen");
const closeMenu = document.getElementById("menuClose");
const contentMenu = document.getElementById('containerMenu');




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
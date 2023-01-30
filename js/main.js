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
}

function closeModal(){
  menuOverlay.style.display = 'none';
  contentMenu.style.width  = '0px';
}


function outsideClick(e) {
  if (e.target == menuOverlay) {
    closeModal()
  }
}

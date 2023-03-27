


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






const cards = document.querySelectorAll('.geral-item');
var des = document.querySelectorAll('.descrip');
let isShow = true;

cards.forEach(opt => {
  opt.addEventListener('click', () => {

    cards.forEach( card => {

      if(isShow) {
      
        opt.style.height = '200px';
        opt.style.backgroundColor = '#5865f2';
        opt.style.color = 'white';
        des.style.display = 'block';
        isShow = false;

      } else {
        opt.style.height = '100px';
        opt.style.backgroundColor = '#f6f6f6';
        opt.style.color = 'black';
        des.style.display = 'none';
        isShow = true;
      
      }

    });
    
  });
});




/* cards.forEach(opt => {
  opt.addEventListener('click', () => {

    cards.forEach( opt => 

    if(isShow) {
      
      cards.style.height = '200px';
      cards.style.backgroundColor = '#5865f2';
      cards.style.color = 'white';
      des.style.display = 'block';
      isShow = false;
      console.log('cliquei');
    
    } else {
      cards.style.height = '100px';
      cards.style.backgroundColor = '#f6f6f6';
      cards.style.color = 'black';
      des.style.display = 'none';
      isShow = true;
    
    }

    );
    
    });
});
 */

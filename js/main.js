


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
const des = document.querySelectorAll('.descrip');
const plusbtn = document.querySelectorAll('.botaomais');

let currentCardIndex = -1;

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (currentCardIndex !== -1 && currentCardIndex !== index) {
      // Se há um card aberto e não é o mesmo que foi clicado agora, fecha o card anterior
      cards[currentCardIndex].style.height = '100px';
      cards[currentCardIndex].style.backgroundColor = '#f6f6f6';
      cards[currentCardIndex].style.color = 'black';
      des[currentCardIndex].style.display = 'none';
      plusbtn[currentCardIndex].classList.remove('rotate');
    }
    if (card.style.height === '100px') {
      // Se o card clicado estava fechado, abre o card
      card.style.height = '200px';
      card.style.backgroundColor = '#5865f2';
      card.style.color = 'white';
      des[index].style.display = 'block';
      plusbtn[index].classList.add('rotate');
      currentCardIndex = index;
    } else {
      // Se o card clicado estava aberto, fecha o card
      card.style.height = '100px';
      card.style.backgroundColor = '#f6f6f6';
      card.style.color = 'black';
      des[index].style.display = 'none';
      plusbtn[index].classList.remove('rotate');
      currentCardIndex = -1;
    }
  });
});




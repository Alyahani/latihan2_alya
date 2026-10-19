const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');
    
    if (bodyHalaman.classList.contains('light-mode')) {
      btnTema.textContent = 'Mode Gelap';
    } else{
      btnTema.textContent = 'Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

if (btnBukaModal && elemenModal) {
  btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
  });
}

if (btnTutupModal && elemenModal) {
  btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
  });
}

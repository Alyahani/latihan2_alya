
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');
const temaTersimpan = localStorage.getItem('tema');

if (temaTersimpan === 'terang') {
 bodyHalaman.classList.add('light-mode');
}

function perbaruiTombolTema() {
 btnTema.textContent = bodyHalaman.classList.contains('light-mode')
	? '🌙 Mode Gelap'
	: '☀️ Mode Terang';
}

perbaruiTombolTema();

btnTema.addEventListener('click', function() {
 bodyHalaman.classList.toggle('light-mode');

 if (bodyHalaman.classList.contains('light-mode')) {
 btnTema.textContent = '🌙 Mode Gelap';
 } else {
 btnTema.textContent = '☀️ Mode Terang';
 }
})

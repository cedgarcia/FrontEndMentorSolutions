// Trying arrow functions
const showLinks = document.querySelector('.links');
const btn = document.querySelector('.card__btn');

btn.addEventListener('click', ()=> {
    if (showLinks.style.display === 'none' || showLinks.style.display === "") {
        showLinks.style.display = 'flex';
      } else if (showLinks.style.display === 'flex') {
        showLinks.style.display = 'none';
      }
})
console.log("credits to ApplePieGirrafe")
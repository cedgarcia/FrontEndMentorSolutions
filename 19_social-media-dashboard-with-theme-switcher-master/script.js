document.querySelector('.changeTheme-btn').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  var currentTheme = document.querySelector('.current-theme').innerHTML;
  if (currentTheme == 'Dark Mode') {
    document.querySelector('.current-theme').innerHTML = 'Light Mode';
  } else {
    document.querySelector('.current-theme').innerHTML = 'Dark Mode';
  }
});

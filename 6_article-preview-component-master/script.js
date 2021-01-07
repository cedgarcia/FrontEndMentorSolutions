function displayPopup() {
    let popup = document.getElementById('popup');
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
}
const titleElement = document.getElementById('main-title');
const descElement = document.querySelector('.description');


descElement.addEventListener('click', function() {
  
    titleElement.textContent = "Twieee - New Name!";
    

    descElement.style.fontSize = "18px";
    descElement.classList.add('active');
});
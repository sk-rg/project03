
let count = 0;


const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');


function updateCounter() {
    counterDisplay.textContent = count;
    
    
    counterDisplay.classList.remove('positive', 'negative', 'zero');
    
   
    if (count > 0) {
        counterDisplay.classList.add('positive');
    } else if (count < 0) {
        counterDisplay.classList.add('negative');
    } else {
        counterDisplay.classList.add('zero');
    }
}



decrementBtn.addEventListener('click', function() {
    count--;
    updateCounter();
});

incrementBtn.addEventListener('click', function() {
    count++;
    updateCounter();
});

resetBtn.addEventListener('click', function() {
    count = 0;
    updateCounter();
});
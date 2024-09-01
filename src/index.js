 // Initialize counter
 let counter = 0;

 // Get elements
 const counterDisplay = document.getElementById('counterDisplay');
 const plusButton = document.querySelector('.counter-plus');
 const minusButton = document.querySelector('.counter-minus');

 // Update display
 const updateDisplay = () => {
     counterDisplay.textContent = counter;
 };

 // Add event listeners
 plusButton.addEventListener('click', () => {
     counter++;
     updateDisplay();
 });

 minusButton.addEventListener('click', () => {
     counter--;
     updateDisplay();
 });
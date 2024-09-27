let counter = 0;
const counterInput = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateCounter() {
	counterInput.value = counter;
}

incrementButton.addEventListener('click', () => {
	counter++;
	updateCounter();
});

decrementButton.addEventListener('click', () => {
	counter--;
	updateCounter();
});

// Initial counter display
updateCounter();


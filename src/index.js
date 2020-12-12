

// 1. select
const button = document.querySelector('#click-me');

// console.log(button)
// console log driven development

// 2. add event listener
// button.addEventListener('EVENT', BEHAVIOR)
// button.addEventListener('click', () => {})
button.addEventListener('click', (event) => {
	// console.log(event);
	// 3. change the inner text of the btn

	// console.log(event.currentTarget);
	// console.log(button);

	button.innerText = 'clicked';
});

// Select the HTML elements by their unique IDs
const nameInput = document.getElementById('user-name');
const greetButton = document.getElementById('greet-btn');
const greetingOutput = document.getElementById('greeting-output');
const resetButton = document.getElementById('reset-btn');

// Add a click event listener once the button is selected
greetButton.addEventListener('click', () => {
  const enteredName = nameInput.value;

  greetingOutput.classList.remove('hidden');

  if (enteredName.trim() === '') {
    greetingOutput.textContent = 'Please type a name first!';
  } else {
    greetingOutput.textContent = `Hello, ${enteredName}! Welcome to coding!`;
  }
})


resetButton.addEventListener('click', () => {
  nameInput.value = '';
  
  greetingOutput.classList.add('hidden');

  greetingOutput.textContent = ''

  nameInput.focus();
});

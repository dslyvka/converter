document.querySelector('.result').addEventListener('submit', e => {
  e.preventDefault();
  let number = parseInt(document.querySelector('.number').value);
  let numSystem = parseInt(document.querySelector('.numSystem').value);

  converter(number, numSystem);
  document.querySelector('.number').value = '';
});

function converter(number, numSystem) {
  if (number === 0) {
    alert('0');
    return;
  }
  if (isNaN(number)) {
    alert('Введите число!');
    return;
  }
  let remainder;
  let convertedString = '';
  const digits = '0123456789ABCDEF';

  while (number > 0) {
    remainder = Math.floor(number % numSystem);
    convertedString = digits[remainder] + convertedString;
    // console.log(digits[remainder]);
    number = Math.floor(number / numSystem);
  }

  alert(`Результат: ${convertedString}`);
}

// TODO: Validate this form
const allInputs = document.querySelectorAll('.form-control');

const allInputsArr = Array.from(allInputs);

const french = new RegExp('^(F-)?d{5}$', 'g');
const button = document.querySelector('.btn');
const checkbox = document.querySelector('#tos');

const isFilled = input => input.value;

const allFilled = () => allInputsArr.every(isFilled);

console.log(allInputsArr.every(isFilled));

const enableButton = () => {
  const all = allFilled();
  console.log(all);
  const checkboxChecked = checkbox.checked;
  if (all && checkboxChecked) {
    button.disabled = false;
  }
};

allInputs.forEach(input => input.addEventListener('blur', enableButton));

checkbox.addEventListener('click', enableButton);

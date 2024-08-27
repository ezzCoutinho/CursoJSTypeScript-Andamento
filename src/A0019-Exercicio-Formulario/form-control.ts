import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES: string = '.show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (evento: Event) {
  evento.preventDefault();
  hideErrorMessages(this);
  checkformEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSendForm(this)) {
    console.log('Formulário válido.');
  }
});

function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem.');
    showErrorMessage(password2, 'Senhas não batem.');
  }
}

function checkformEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Campo não pode ficar vazio.');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'E-mail inválido');
  }
}
function hideErrorMessages(formulario: HTMLFormElement): void {
  formulario
    .querySelectorAll(SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send: boolean = true;
  form.querySelectorAll(SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;
}

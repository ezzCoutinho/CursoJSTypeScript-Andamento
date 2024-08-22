// assertion, é informar ao compilador, que você conhece mais da variavel do que ele
/* Recomendável */
// Condição RECOMENDÁVEL
const body1 = document.querySelector('body'); // sei que não existe
if (body1) body1.style.background = 'red';

// Type assertion RECOMENDÁVEL
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement RECOMENDÁVEL
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/*Não recomnedável */
// sinal "!" -> este objeto não pode ser nulo. non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;

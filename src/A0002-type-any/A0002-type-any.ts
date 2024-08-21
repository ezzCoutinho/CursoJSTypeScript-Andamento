// Utilize any apenas em último caso.
// any === qualquer
function showMessage(msg: any): any {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

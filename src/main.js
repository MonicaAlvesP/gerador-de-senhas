import { nanoid } from 'nanoid';
import clipboardCopy from 'clipboard-copy';
import './style.css';

const passwordButton = document.querySelector('button');
const showPassword = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  const password = nanoid(8);
  showPassword.innerHTML = password;
});

showPassword.addEventListener('click', () => {
  const password = showPassword.innerHTML;
  clipboardCopy(password)
  .then(() => {
    alert('Senha copiada para o clipboard!')
  })
  .catch((err) => {
    console.log('Erro ao copiar para o clipboard:', err)
  })
})
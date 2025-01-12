import { nanoid } from 'nanoid';
import './style.css';

const passwordButton = document.querySelector('button');
const showPassword = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  const password = nanoid(8);
  showPassword.innerHTML = password;
});
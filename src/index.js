import './styles/style.css';

import { postData, getApiData } from './modules/api.js';

const reset = document.querySelector('.reset-btn');
const submit = document.querySelector('.submit-btn');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
});

reset.addEventListener('click', getApiData);
window.addEventListener('load', getApiData);
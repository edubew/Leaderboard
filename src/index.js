import './styles/style.css';

const scores = [
  {
    name: 'Winnie:',
    points: 85,
  },
  {
    name: 'Edube:',
    points: 80,
  },
  {
    name: 'Lorians:',
    points: 90,
  },
  {
    name: 'Mitchelle:',
    points: 75,
  },
];

const scoresContainer = scores.map((score) => `
  <tr>
    <td>${score.name}</td>
    <td>${score.points}</td>
  </tr>
`).join('');

const tableScores = document.querySelector('.table-scores');
tableScores.innerHTML += scoresContainer;

// Create the form dynamically
const form = document.createElement('form');
form.innerHTML = `
 <input type ="text" placeholder = "Your name" required></br>
 <input type ="text" placeholder = "Your score" required></br>
 <button type ="submit" class ="btn">Submit</button></br>
`;
const addScore = document.querySelector('#add-scores');
addScore.appendChild(form);

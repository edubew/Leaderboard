import './styles/style.css';

class Score {
  constructor(id, name, points) {
    this.name = name;
    this.points = points;
    this.id = id;
  }
}

// Create the form dynamically
const addScore = document.querySelector('#add-scores');

const form = document.createElement('form');
form.innerHTML = `
 <input type ="text" placeholder = "Your name" required>
 <input type ="text" placeholder = "Your score" required>
 <button type ="submit" class ="btn">Submit</button>
`;
addScore.appendChild(form);

// Create the scores tables
const addScoreToTable = (score) => {
  const tableScores = document.querySelector('.table-scores');

  const row = document.createElement('tr');
  row.innerHTML = `
 <td>${score.name}</td>
 <td>${score.points}</td>
`;
  tableScores.appendChild(row);
};

// Parse data into local storage

import './styles/style.css';

class Score {
  constructor(id, name, score) {
    this.name = name;
    this.score = score;
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
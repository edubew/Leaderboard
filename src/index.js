import './styles/style.css';

const tableScores = document.querySelector('.table-scores');
const name = document.querySelector('.name');
const points = document.querySelector('.points');

const getGameScores = (gamescore) => {
  let output = '';
  gamescore.map((score) => {
    output += `
    <tr>
     <td>${score.username}</td>
     <td>${score.points}</td>
    </tr>
    `;
    tableScores.innerHTML = output;
  });
};

const postData = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', {
    method: 'POST',
    body: JSON.stringify({
      username: name.value,
      points: points.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  name.value = '';
  points.value = '';
};

const tableScores = document.querySelector('.table-scores');
const name = document.querySelector('.name');
const score = document.querySelector('.scores');
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lLwxzvstdE0zBWjxl3BY/scores';

// Function to display game scores
export const getGameScores = (gamescore) => {
  let output = '';
  // Clear the table before adding new scores
  tableScores.innerHTML = '';
  gamescore.forEach((score) => {
    output += `
        <li>${score.user}:
        <span>${score.score}%</span></li>
    `;
  });
  tableScores.innerHTML = output;
};

// Function to post data to the API
export const postData = async () => {
  const userScore = parseInt(score.value, 10);

  if (userScore <= 100) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          user: name.value,
          score: userScore,
          index: Date.now(),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        name.value = '';
        score.value = '';
      } else {
        throw new Error('Failed to post data to the API');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error('Score cannot be more than 100%');
  }
};

// Function to fetch API data
export const getApiData = async () => {
  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      getGameScores(data.result);
    } else {
      throw new Error('Failed to fetch data from the API');
    }
  } catch (error) {
    console.error(error);
  }
};

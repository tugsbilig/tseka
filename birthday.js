function checkAnswer() {
  const answer = document.getElementById('answerInput').value.trim().toLowerCase();
  const errorMessage = document.getElementById('errorMessage');

  if (answer === 'ori gants') {
    window.location.href = 'birthday.html';
  } else {
    errorMessage.innerText = "bitchhh you better be joking!";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const optionButtons = document.querySelectorAll('.option');
  const answerButtons = document.querySelectorAll('.answer-btn');
  const inputCheck = document.querySelector('.input-check');
  const inputAnswer = document.querySelector('.input-answer');
  const tfButtons = document.querySelectorAll('.tf-btn');

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.correct === 'true';
      optionButtons.forEach((btn) => {
        btn.classList.remove('correct', 'incorrect');
      });

      if (isCorrect) {
        button.classList.add('correct');
      } else {
        button.classList.add('incorrect');
      }
    });
  });

  answerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.classList.toggle('hidden');
    });
  });

  if (inputCheck && inputAnswer) {
    inputCheck.addEventListener('click', () => {
      const answer = inputAnswer.value.trim().toLowerCase();
      const feedback = inputCheck.nextElementSibling;

      if (answer === 'obediencia') {
        feedback.textContent = '¡Correcto! La respuesta es: obediencia.';
        feedback.classList.remove('hidden');
      } else {
        feedback.textContent = 'Puedes intentarlo nuevamente: la respuesta correcta es "obediencia".';
        feedback.classList.remove('hidden');
      }
    });
  }

  tfButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.correct === 'true';
      tfButtons.forEach((btn) => btn.style.background = '#e6f0f9');

      if (isCorrect) {
        button.style.background = '#cfe9d7';
      } else {
        button.style.background = '#f7d7d7';
      }
    });
  });
});

{/* <title>Пример формы с проверкой на валидность</title>
</head>
<body>
  <h1>Форма с проверкой на корректность ввода</h1>
  
  <!-- форма -->
  <form id="myForm" onsubmit="return validateForm()">
	<label for="email">Email:</label>
	<input type="email" id="email" name="email" required><br>
	
	<div id="message" class="error"></div> <!-- сообщение об ошибке -->
	
	<button type="submit" disabled>Отправить</button> <!-- кнопка отправки -->
  </form>
  
  */

	function validateForm() {
	  // проверяем корректность ввода email
	  var email = document.getElementById("email").value;
	  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		document.getElementById("message").classList.add("error");
		return false;
	  }
	  
	  return true;
	};


	// Для проверки выбранного состояния checkbox можно использовать следующий код:

const checkbox = document.querySelector('#checkbox');
if (!checkbox.checked) {
  checkbox.classList.add('error');
  const message = document.createElement('span');
  message.textContent = 'Checkbox не выбран';
  document.querySelector('.message').appendChild(message);
}
// Для очистки сообщений об ошибках и удаления классов ошибок можно использовать следующий код:

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  for (let i = 0; i < errors.length; i++) {
    errors[i].classList.remove('error');
    const span = document.querySelector(`.message .${i}`);
    span.remove();
  }
}
clearErrors();
// Чтобы вывести значения полей формы в консоль и очистить форму, можно использовать следующий код после успешной проверки валидности:

console.log(document.forms[0].elements);
document.forms.myForm.reset();
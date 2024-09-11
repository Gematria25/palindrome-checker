const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function checkButtonHandler() {
  let text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  const cleanInputText = /[^a-z0-9]/gi;
  text = text.replace(cleanInputText, "").toLowerCase(); 

  if (text == text.split("").reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
};

checkButton.addEventListener("click", checkButtonHandler);
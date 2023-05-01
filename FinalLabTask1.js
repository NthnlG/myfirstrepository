function add() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = firstNumber + secondNumber;
    document.getElementById("result").value = result;
  }
  
  function subtract() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = firstNumber - secondNumber;
    document.getElementById("result").value = result;
  }
  
  function multiply() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = firstNumber * secondNumber;
    document.getElementById("result").value = result;
  }
  
  function divide() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    let result = firstNumber / secondNumber;
    document.getElementById("result").value = result;
  }
  
  function clearFields() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").value = "";
  }
  
  function showAlert() {
    let fullName = prompt("What is your full name?");
    alert("Work of " + fullName);
  }
  
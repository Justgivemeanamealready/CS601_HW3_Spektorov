"use strict";
//This function re-usably converts strings (which is what you get from a prompt) into intigers, and then adds them together
function converter(string) {
  let standIn = string.split(" ");
  for (let i = 0; i < standIn.length; i++) {
    standIn[i] = parseInt(standIn[i]);
  }
  return standIn[0] + standIn[1];
}
//This function checks that the input is proper.
function inputter(number) {
  const test = Number.isInteger(number);
  return test;
}
//This function asks for numbers, and then combines them
function adder(name) {
  let combo = prompt(
    `Fantastic ${name}, now please give me two intigers separated by a space.`,
    "1 2"
  );
  let combination = converter(combo);
  console.log(combination);
  let truthTest = inputter(combination);
  console.log(truthTest);
  while (truthTest == false) {
    let combo = prompt(
      `I am sorry ${name}, but that wasn't two intigers separated by a space.\nLets try that again.\nPlease give me two intigers separated by a space.`,
      "1 2"
    );
    combination = converter(combo);
    console.log(combination);
    truthTest = inputter(combination);
    console.log(truthTest);
  }
  alert("The sum of your two numbers is: " + combination);
  if (combination > 10) {
    alert("That is a big number.");
  } else if (combination <= 10) {
    alert("That is a small number.");
  }
}
//Start of the Program
function initiator() {
  alert(
    "Mellow Salutations my fellow parsons, mighty fine day for filling out a questioneer is it?"
  );
  let input = prompt("Please enter your name", "NAME HERE");
  alert("Greetings " + input);
  adder(input);
  let checker = false;
  do {
    checker = confirm("Do you wish to add more numbers together?");
    if (checker == true) {
      adder(input);
    } else {
      alert("Thank you for using Calculatron.");
    }
  } while (checker == true);
}

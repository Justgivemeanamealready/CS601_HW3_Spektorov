"use strict";

//This function re-usably converts strings (which is what you get from a prompt) into intigers, and then adds them together
function converter(string) {
  let standIn = string.split(" ");
  console.log(standIn);
  for (let i = 0; i < standIn.length; i++) {
    standIn[i] = parseInt(standIn[i]);
  }
  return standIn[0] + standIn[1];
}
//This function asks for numbers, and then combines them
function adder(name) {
  let combo = prompt(
    `Fantastic ${name}, now please give me two intigers separated by a space.`,
    "1 2"
  );
  let combination = converter(combo);
  alert("The sum of your two numbers is: " + combination);
  if (combination > 10) {
    alert("That is a big number.");
  } else if (combination <= 10) {
    alert("That is a small number.");
  }
}

alert(
  "Mellow Salutations my fellow parsons, might fine day for filling out a questioneer is it?"
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

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;
  let sumUpToNumber = 0;
  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const OutputResultElement = document.getElementById("calculated-sum");
  OutputResultElement.textContent = sumUpToNumber;
  OutputResultElement.style.display = "block";
}
calculateSumButtonElement.addEventListener("click", calculateSum);

//highlight links

const highlightLinksButtonElements = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElements.addEventListener("click", highlightLinks);

//display userdata
const displayUserDataElement = document.querySelector("#user-data");
const dummyUserData = {
  firstName: "john",
  lastName: "tesf",
  age: 34,
};
function displayUserData() {
  const outputDataElement = document.querySelector("#output-user-data");
  outputDataElement.innerHTML = "";
  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    newUserDataListItemElement.textContent =
      key.toUpperCase() + ":" + dummyUserData[key];
    outputDataElement.append(newUserDataListItemElement);
  }
}
displayUserDataElement.addEventListener("click", displayUserData);

//roll a dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");
  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber){
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollsListItemElement = document.createElement("li");
    const outputText = "Roll" + numberOfRolls + " : " + rolledNumber;
    newRollsListItemElement.textContent = outputText;
    hasRolledTargetNumber = rolledNumber == enteredNumber;
    diceRollsListElement.append(newRollsListItemElement);
  }
  outputTotalRollsElement.textContent = numberOfRolls;
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );
  outputTargetNumberElement.textContent = enteredNumber;
}
rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);

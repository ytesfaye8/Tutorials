// // Exercise Time!

// // 1. Select the <h1> element by "drilling into the DOM" and
// //    save it in a variable with a name of your choice
// let header2 = document.body.children[0];
// console.dir(header2);

// let header1 = document.querySelector("h1");
// console.dir(header1);
// // 2. Use the variable from (1) and get access to the "parent"
// //    element of the stored <h1> element (i.e. to the <body> element)
// console.dir(header1.parentElement
//     );

// //    BONUS: Try using the variable from (1) to get access to the
// //    sibling element (i.e. the <p> element next to the <h1> element)

// console.dir(header1.nextElementSibling);

// // 3. Select the <h1> element with getElementById and store in
// //    the same or a new variable (up to you)
// let header = document.getElementById("head");
// console.dir(header);

// // 4. Select the second <p> element with querySelector (you might
// //    need to add something in the HTML code, e.g. a class)
// //    and store it in a new variable with a name of your choice
// let headers = document.querySelector("#head");
// console.dir(headers);
// let parag = document.querySelector(".par");
// console.dir(parag);

// // 5. BONUS TASK: Try changing the text content of the <p> element
// //    you selected in (4) and set it to any other text of your choice
// let chang = (parag.textContent = "jojo");
// console.dir(chang);
// firstParagraph.appendChild(newAnchorElement);
// firstParagraph.insertBefore(newAnchorElement);
// let newAnchorElement = document.createElement("a");
// let firstParagraph = document.querySelector("p");
// newAnchorElement.href = "https://bard.google.com/";
// newAnchorElement.textContent = "google";
// // newAnchorElement.addEventListener();
// firstParagraph.append(newAnchorElement);
// let firstH1element = document.querySelector("h1");
// // firstH1element.remove();
// // firstH1element.parentElement.removeChild(firstH1element);
// // firstParagraph.parentElement.append(firstParagraph);
// console.log(firstParagraph.innerHTML);
// console.log(firstParagraph.textContent);
// firstParagraph.textContent = "hi! this is a <strong> imprtant!</strong>";
// firstParagraph.innerHTML = "hi! this is a <strong> imprtant!</strong>";
// let paragraphElement = document.querySelector("p");
// function changeParagraphText(event) {
//   paragraphElement.textContent = "Clicked";
//   console.log("paragraph clicked!");
//   console.log(event);
// }
// paragraphElement.addEventListener("click", changeParagraphText);
// let inputElement = document.querySelector("input");
// function retrieveUserInput(event) {
//   // let enteredText = inputElement.value;
//   let enteredText = event.target.value;
//   //   let enteredText = event.data;

//   console.log(enteredText);
//   //   console.log(event);
// }
// inputElement.addEventListener("input", retrieveUserInput);
const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;
  const remainingCharacters = maxAllowedChars - enteredTextLength;
  remainingCharsElement.textContent = remainingCharacters;
  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
  }
}
productNameInputElement.addEventListener("input", updateRemainingCharacters);

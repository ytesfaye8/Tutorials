// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButton = document.querySelector("button");
console.log(firstButton.textContent);
//    - Select the second button by using an "id"
const secondButton = document.getElementById("second-button");
console.log(secondButton.textContent);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
// function clickedFirstButton() {
//    console.dir(firstButton);
//  }
//   function clickedSecondButton(event) {
//    console.dir(event.target);
//     }
// //    - Output the first button by using the variable in which it's stored
//  firstButton.addEventListener("click", clickedFirstButton);
// // //    - Output the second button WITHOUT using the variable in which it's stored
// secondButton.addEventListener("click", clickedSecondButton);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
console.dir(document);
const firstParagraph = document.body.children[2].children[1];
const thirdParagraph = document.body.children[2].children[3];
console.log(firstParagraph);
console.log(thirdParagraph);

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

//    - The second button changes the background color of the first paragraph to blue

function ChangeColorFirstParagraph() {
  firstParagraph.className = "";
}
secondButton.addEventListener("click", ChangeColorFirstParagraph);
jn

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function removeThirdParagraph() {
  thirdParagraph.classList.add("remove-paragraph");
}
firstButton.addEventListener("click", removeThirdParagraph);

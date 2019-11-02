// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector(".header-container")
container.appendChild(head());

function head() {
    const header = document.createElement("div");
    const span = document.createElement("span");
    const h1 = document.createElement("h1");
    const span1 = document.createElement("span");

    header.append(span, h1, span1);

    header.classList.add("header");
    span.classList.add("date");
    span1.classList.add("temp");

    span.textContent = "SMARCH 28, 2019";
    h1.textContent = "LambdaTimes";
    span1.textContent = "98";

    return header;

}

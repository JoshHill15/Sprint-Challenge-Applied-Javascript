// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(resp => {
    console.log(resp.data.topics);
    resp.data.topics.forEach(item => {
        console.log(item)
        const theTopics = tabCreator(item);
        tabs.appendChild(theTopics);
    })
})

function tabCreator(obj){
    const div = document.createElement("div");
    div.classList.add("tab");
    div.textContent = obj;

    return div;
}
const tabs = document.querySelector(".topics")
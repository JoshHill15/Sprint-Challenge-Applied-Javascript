// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios
//     .get("https://lambda-times-backend.herokuapp.com/articles")
//         .then(resp => {
//         const a = resp.data;
//         console.log(a);
//         axios
//             .get(resp.data.articles)
//             .then (resp2 => {
//                 console.log(resp2)
//             })
        

//     })
//     .catch(err => {
//         console.log("data not being receieved", err);
//     })

    axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(resp => {
    const a = resp.data.articles;
    console.log(a);
    for(let i in a){
        let b = a[i]
        // console.log(b)
        b.forEach(item =>{
            console.log(item)
            articleCreator(item)
            // for (let v in item){
            //     let c = item[v];
            //     console.log(c)
            //     let d = articleCreator(c)
            //     // console.log(d)
            //     // article.appendChild(d)
            // }
        })
    }
    
    })
    .catch(err => {
        console.log("data not being receieved", err);
    })

    // axios.get("https://lambda-times-backend.herokuapp.com/articles")
    // .then(resp => {
    // const a = resp.data.articles;
    // // console.log(a);
    // // console.log(Object.entries(a))
    // const values = Object.values(a);
    // values.forEach(item => {
    //     // console.log(item);
    //     item.forEach(val => {
    //         console.log(val)
    //         // let e = articleCreator(val)
    //         // for (let z in val){
    //         //     console.log(val[z]);
    //         //     let f = articleCreator(val[z]);
    //         //     // article.append(f)

    //         // }

    //     })
    // })
    
    // })
    .catch(err => {
        console.log("data not being receieved", err);
    })

    function articleCreator(o){
        const card = document.createElement("div");
        const headline = document.createElement("div");
        const author = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("span");
    
        card.append(headline, author, imgContainer, name);
        imgContainer.appendChild(img);
    
        card.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgContainer.classList.add("img-container");
    
        headline.textContent = o.headline;
        headline.setAttribute("href", o.headline)
        img.src = o.authorPhoto;
        name.textContent = o.authorName;

        // article.append(card)

        return card;
    }
    const article = document.querySelector("cards-container");
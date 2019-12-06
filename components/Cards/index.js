// STEP 3: Create Article cards.
// -----------------------
// [x] Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// [x] Study the response data you get back, closely.
// [x] You will be creating a component for each 'article' in the list.
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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response);
    const articles = response.data.articles;
    const cardComponents = document.querySelector(".cards-container");
    Object.keys(articles).forEach(articleKey => {
        const topicArticles = articles[articleKey];
        topicArticles.forEach(topicArticle => {
            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const newImg = document.createElement('div');
            const imgSource = document.createElement('img');
            const authorName = document.createElement('span');
        
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(newImg);
            author.appendChild(authorName);
            newImg.appendChild(imgSource);
        
            card.classList.add('card');
            headline.classList.add('headline');
            author.classList.add('author');
            newImg.classList.add('img-container');
        
            headline.textContent = topicArticle.headline;
            newImg.src = topicArticle.authorPhoto;
            authorName.textContent = `By ${topicArticle.authorName}`;

            cardComponents.appendChild(card);
        })
    });
})

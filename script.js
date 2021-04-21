const getData = async () => {
    const url = 'https://api.currentsapi.services/v1/latest-news?&apiKey=GW6OhgxM78D2miBzHAaKtqHd98f56M51KgzZl-LA2yqTtsLY';
    try {
        const response = await axios.get(url);
        // console.log(response.data.news);
        const newsArticlesList = response.data.news
        // console.log(newsArticlesList);
        newsArticlesList.forEach((article) => {


            console.log('right here', article.description)

            let articleHTML = ` 
          <h1>${article.title}</h1>
          <img src="${article.image}" alt="Article Image"> 
          <p>${article.description}</p>
          `

            const divToAppend = document.querySelector('.article-title')
            divToAppend.insertAdjacentHTML('beforeend', articleHTML)
            // headines




            // images


            // text

        })

    } catch (error) {
        console.error(error);
    }
}

getData();




// 
//console.log(url)
//       linkLauncher(response.data.response.results)
//function linkLauncher(articles) {
//   console.log(articles)
//     articles.forEach((article) => {
//         let a = document.createElement('a');
//       a.href = article.webUrl
//       a.innerText = article.webTitle
//         const appendDiv = document.querySelector('.art-link');
//       appendDiv.append(a)


//     })
// }










// const test = "response.data.response.results[0]";

// document.querySelector("test-btn").addEventListener('click', () => {
//     console.log(test);
// });


// function showTopHeadlines() {
//     console.log(news);
// }

// showTopHeadlines(news);


// error 426 protocol upgrade
//"https://newsapi.org/v2/everything?q=keyword&apiKey=2330b964e19d473bb67d2ba38f8bed91";
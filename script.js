    let getData = async () => {

        let url = 'https://api.currentsapi.services/v1/latest-news?&apiKey=GW6OhgxM78D2miBzHAaKtqHd98f56M51KgzZl-LA2yqTtsLY';

        try {
            let response = await axios.get(url);

            let newsArticlesList = response.data.news

            newsArticlesList.forEach((article) => {

                let articleHTML = `
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <img src="${article.image}" alt="article-image">
          `

                let divToAppend = document.querySelector('.article-title');
                divToAppend.insertAdjacentHTML('beforeend', articleHTML)
                return articleHTML

            })

        } catch (error) {
            console.error(error);
        } 
    }

    let button = document.querySelector('#search-btn');

    button.addEventListener('submit', getData);

    getData();
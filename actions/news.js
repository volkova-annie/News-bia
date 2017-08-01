export function updateNews(news) {
  return {
    type: 'news/UPDATE_NEWS',
    news: [...news]
  }
}

export function requestNews() {
  return (dispatch) => {
    const apiKey = 'ca97653137944f2fac0abe57e6a6d7e0';
    const url = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey='+apiKey;

    fetch(url)
      .then(response => response.json())
      .then(response => response.articles.map(article => {
        if (article.publishedAt) article.publishedAt = new Date(article.publishedAt)
        return article
      }))
      .then(news => {
        dispatch(updateNews(news))
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function deleteOneNews(url) {
  return (dispatch, getState) => {
    const news = getState().news;
    const filteredNews = news.filter(item => item.url !== url);

    dispatch(updateNews(filteredNews));
  }
}

export function sortNews(event) {
  const sorter = event.target.value;
  return (dispatch, getState) => {
    const news = getState().news;

    news.sort((a, b) => {
      const x = a[sorter] || "";
      const y = b[sorter] || "";
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    })

    dispatch(updateNews(news));
  }
}

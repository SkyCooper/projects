const newsQuerry = (cName) => {
  const url = `https://newsapi.org/v2/top-headlines?country=${cName}&apiKey=`;
  const apiKey = "2ae73e0e340345b39a263c6557eb8796";
  fetch(url + apiKey)
    .then((res) => res.json())
    .then((data) => news(data));
};

const news = (data) => {
  const { articles } = data;
  console.log(articles);
  articles.forEach((item) => {
    const { title, description, urlToImage, url } = item;
    const newsDiv = document.querySelector("#news-list");
    newsDiv.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
        </div>
      </div>
    </div>
    `;
  });
};

//? country Possible options (ülke değiştirmek için):
//* ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za.

window.addEventListener("load", newsQuerry("tr"));


//? country Possible options (ülke değiştirmek için):
const array =["br", "ae", "tw", "ua", "us", "ve", "za"]
const selectCountry = document.querySelector(".form-check");
const upperList = document.querySelector("#upper-list")

array.forEach(item => {
  selectCountry.innerHTML += `
      <input type="radio" name="country" id="${item}" value="${item}">
      <label for="${item}">${item}</label>
  `;
});

const newsQuerry = (cName) => {
  const url = `https://newsapi.org/v2/top-headlines?country=${cName}&apiKey=`;
  const apiKey = "2ae73e0e340345b39a263c6557eb8796";
  fetch(url + apiKey)
    .then((res) => res.json())
    .then((data) => news(data));
    console.log(cName);
};

const newsDiv = document.querySelector("#news-list");
const news = (data) => {
  const { articles } = data;
  console.log(articles);
  articles.forEach((item) => {
    const { title, description, urlToImage, url } = item;
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

window.addEventListener("load", newsQuerry("tr"));


selectCountry.addEventListener("click", (e)=>{
  newsDiv.innerText = "";
  newsQuerry(e.target.value);
})
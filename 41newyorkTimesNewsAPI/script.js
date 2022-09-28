const apiKey = "L6k85Ai0gDrPx60p8q6aAyEBBNkqjD8D";
const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
const divContainer = document.querySelector(".container");

const newDiv = document.createElement("div");
newDiv.id = "newsId";
newDiv.className = "newsClass";
newDiv.setAttribute("class", "newsClassSet");

const newP = document.createElement("p");
const text = document.createTextNode("burası yeni p elementi");
newP.appendChild(text);
newDiv.appendChild(newP);
divContainer.after(newDiv);
console.log(divContainer);

const newsRender = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => getNews(data))
    .catch((err) => console.log(err));
};

const getNews = (data) => {
  console.log(data.results);
  data.results.forEach((item) => {
    const { subsection, title, abstract, url, multimedia } = item;
    newDiv.innerHTML += `
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card ${subsection}">
         <div class="card-body">
          <h5 class="card-title">${title}</h5>
      <li class="list-group-item"><span>Section</span> <span class="">${subsection} </span></li>
      <img src="${multimedia[0].url}" class="card-img-top" alt="photo">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span>abstract</span> <span>${abstract}</span></li>
      </ul>
      <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
    </div>
  </div>
`;
  });
};

newsRender();

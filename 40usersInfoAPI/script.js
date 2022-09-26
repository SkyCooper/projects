const url = "https://api.github.com/users";

const fetchUsers = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => userInfo(data));
};

const userInfo = (users) => {
  const userDiv = document.querySelector(".users");
  console.log(users);
  users.forEach((user) => {
    const { login, avatar_url, id } = user;
    userDiv.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card" style="width: 18rem;">
      <img src="${avatar_url}" class="card-img-top" alt="...">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Login Name : ${login} </li>
        <li class="list-group-item">ID Number : ${id} </li>
      </ul>
        <div class="card-body">
        <a href="${url}" class="card-link">Link</a>
        </div>
      </div>
    </div>
    
    `;
  });
};

fetchUsers();

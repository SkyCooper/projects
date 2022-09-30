const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input#inputSearch");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

//* apiKey böyle olursa açıkta olur ve herkes görür.şifresiz hali
// localStorage.setItem("tokenKey", "6e1a3eda9fa53b82169bd49471c74f36");

//* apiKey bu şekilde şifrelendi ve localstorage atıldı
// localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("6e1a3eda9fa53b82169bd49471c74f36"));

//* apiKey bu şekilde şifreli halini localstorage'dan aldı artık onu yazdı, yukarıdakilerin hepsini ve localstoregedaki şifresi keyi sildi
localStorage.setItem(
  "tokenKey",
  "0VOd5IKuoqLwiambP40GBolH3J+PNCeCh0NdDUhctd87c7ZW7ACGog8yImDcTVoJ"
);

//! eventi forma verip, submit seçince artık enter için ilave keydown vs tanımlamaya gerek yok..
form.addEventListener("submit", (event) => {
  event.preventDefault(); //* submit sayfayı herseferinde refresh yapmasın diye
  getWeatherDataFromApi();
});

let lang = "tr";
let units = "metric";
let degree = "°C";

//Get api func. (http method == verbs)
const getWeatherDataFromApi = async () => {
  // alert("http request is gone!")

  // localstorage'dan key'i tokenKey olan değikenin valuesini çağırdık, şifreli olduğundan şifre çöz fonksiyonuna yolladık, böylece orjinal key hiç görünmedi.
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  console.log(tokenKey); // test etmek için yazdık,
  const inputValue = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

  try {
    const response = await fetch(url).then((res) => res.json());
    // const response = await axios(url)  //! axios ile yapılışı
    console.log(response);

    let { main, sys, weather, name } = response;
    name = name.replace(" Province", "");
    // const { main, sys, weather, name } = response.data; //!axios için

    //  bunlardan sadece bir tanesi kullanılması yeterli (OpenWeather icon)
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    //  bunlardan sadece bir tanesi kullanılması yeterli (AWS icon)
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    //* tekrarı önlemek için kartlar oluşmadan önce sorgulama/filitreleme yapmak lazım
    //!document. demedi, önceden oluşturulan değişkenden devam etti
    const cityNameSpans = list.querySelectorAll(".city span");
    // console.log(cityNameSpans);  // nodelist olarak gelir.
    const cityNameSpansArray = Array.from(cityNameSpans); // işlem yapabilmek için array oldu
    if (cityNameSpansArray.length > 0) {
      const filteredArray = cityNameSpansArray.filter(
        (span) => span.innerText == name
      );
      if (filteredArray.length > 0) {
        //* sonuç sıfırdan büyük olacağı için direk uyarı versin, yani eşleşme var
        msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
        setTimeout(() => {
          msg.innerText = ""; // burada form.reset() olmaz.
        }, 3000); // 3sn sonra mesaj kaybolsun
        form.reset(); // inputu temizlemek için
        return; //* kod kesilsin aşağıya geçmein diye
      }
    }

    //* best practise önce create etmektir.
    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `
    <h2 class="city-name" data-name="${name}, ${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
    </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>${degree}</sup></div>
    <figure>
      <img class="city-icon" src="${iconUrlAWS}">
      <figcaption>${weather[0].description}</figcaption>
    </figure>
  `;
    //* figure ve figcaption kullanımı:  SEO açısından google algoritmasında daha öncelikli

    //* append / prepend
    // list.append(createdLi);  böyle yazılırsa ilk yazılan başta kalır yenisi sağına gelir

    list.prepend(createdLi); //* böyle yazılırsa hep son yazılan başta kalır.

    // form.reset(); //* inputun içini boşaltmak için, hem try hemde catch de vardı, 2 tane gerek yok, en dışa bir tane yazdık ve diğerlerini kaldırdık.

    //!Capturing --> ile ikonları değştirme
    createdLi.addEventListener("click", (e) => {
      if (e.target.tagName == "IMG") {
        //*tagnme büyük harf gelir.
        e.target.src = e.target.src == iconUrl ? iconUrlAWS : iconUrl;
      } else if (e.target.classList.contains("city-temp")) {
        units == "metric" ? (units = "imperial") : (units = "metric");
        degree == "°C" ? (degree = "°F") : (degree = "°C");
        console.log(units);
        console.log(degree);
        // e.target.innerHTML = `
        //   <div class="city-temp">${units}<sup>${degree}</sup></div>
        //   `;
      }
    });

    //!Bubling --> ile kartta herhangi biryere tıklayınca en dıştaki click tetiklensin ve belirlenen linke gitsin.
    // createdLi.addEventListener("click", (e)=>{
    //     alert(`LI element is clicked!!`);
    //     window.location.href = "https://clarusway.com";
    // });
    // createdLi.querySelector("figure").addEventListener("click", (e)=>{
    //     alert(`FIGURE element is clicked!!`);
    //     //STOP BUBBLING
    //     //e.stopPropagation();
    //     // window.location.href = "https://clarusway.com";
    // });
    // createdLi.querySelector("img").addEventListener("click", (e)=>{
    //     alert(`IMG element is clicked!!`);
    //     // window.location.href = "https://clarusway.com";
    // });

    //* olmayan şehirde hata verdirmek için
  } catch (error) {
    msg.innerText = `404 (City Not Found)`;
    setTimeout(() => {
      msg.innerText = ""; // burada form.reset() olmaz.
    }, 3000); // 3sn sonra mesaj kaybolsun
    // form.reset();
  }
  form.reset(); // inputu temizlemek için
};

document.querySelector(".options").addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("languages")) {
    lang = e.target.value;
  } else if (e.target.parentElement.classList.contains("switch")) {
    units = e.target.value;
    degree = e.target.nextElementSibling.id;
  }

});

//window onload
// document.querySelector(".cities").addEventListener("click", (e) => {
//   if (e.target.tagName == "IMG") {
//     alert("img is clicked!!!");
//   }
// });

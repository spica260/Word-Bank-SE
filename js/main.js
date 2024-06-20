let apiKey = "";
let limitImages = 12;

function getGiphy() {
  document.querySelector("#btnSearch").addEventListener("click", page => {
    page.preventDefault(); 
    document.querySelector('.container').innerHTML = "";

    let url = `https://api.giphy.com/v1/text/search?api_key=${apiKey}&limit=${limitImages}&q=`;
    let userSearch = document.querySelector("#search").value.trim();
    url = url + userSearch;

      fetch(url).then(response => response.json()).then(content => {
      for (let i = 0; i < content.data.length; i++) {
        console.log(content.data);
        let img = document.createElement("img");
        img.src = content.data[i].images.original.url;
        let out = document.querySelector(".container");
        out.appendChild(img);
      }
        document.querySelector("#search").value = "";
    })
  });
}
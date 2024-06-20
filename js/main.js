let apiKey = "o46suj18PSD39HljljlIrxYOkV9sDao4";
let limitImages = 12;

function getGiphy() {
  document.querySelector("#btnSearch").addEventListener("click", page => {
    page.preventDefault(); // Prevent the page to reload
    document.querySelector('.container').innerHTML = ""; // Clears the container for every user search

    let url = `https://api.giphy.com/v1/text/search?api_key=${apiKey}&limit=${limitImages}&q=`;
    let userSearch = document.querySelector("#search").value.trim();
    url = url + userSearch;

    // Fetch Giphy with url previously created
        fetch(url).then(response => response.json()).then(content => {
            for (let i = 0; i < content.data.length; i++) {
            console.log(content.data);
            let img = document.createElement("img");
            img.src = content.data[i].images.original.url;
            let out = document.querySelector(".container");
            out.appendChild(img);
        }
        document.querySelector("#search").value = ""; // Clears the input for every user search
    })
    // Catch any error that may occur
    .catch(bug => {
        console.error(bug);
      });
  });
}

getGiphy(); // Call the function
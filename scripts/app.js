const API_KEY = "1D6TfNiI9D9OHCqa7SCm2BttZwg6kdBY";
const URL = "http://api.giphy.com/v1/gifs/search?";

document.addEventListener('DOMContentLoaded', function(e) {
    console.log('1:DOMContentLoaded');
  apiCall('dogs');
  document.querySelector('.form-inline').addEventListener('submit', getSearch);
});

function getSearch(element){
    element.preventDefault();
    console.log('2:getSearch');
    let searchValue = document.querySelector('.form-control.gif-input').value;
    apiCall(searchValue);
    console.log(searchValue);
}


function apiCall(q){
    console.log('3: apiCall');
    fetch(`${URL}q=${q}&api_key=${API_KEY}`, {
        method: "GET",
    })
      .then(function(response) {
      return response.json()
      })
      .then(parseData)
      .catch(function(error){
        errorMessage(error);
      });
}

function parseData(response){
    console.log("4:ParseData")
    console.log(response);
    const data = response.data;
    
    let imageDiv = document.querySelector('.gif-gallery');
    imageDiv.innerHTML = [];
    
    for(let i = 0; i < data.length; i++){
    let url = data[i].images.fixed_height.url;
    console.log(url);
    let gifImages = document.createElement("img");
    gifImages.setAttribute("src", url);
    imageDiv.appendChild(gifImages);
    }
};

function errorMessage(error){
  console.log('5:errorMessage');
  console.log(error);  
};
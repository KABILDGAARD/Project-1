$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  method: "GET",
}).then(function (data) {
  console.log(data);
  var output = data.meals[0].strMealThumb;
  console.log(output);

  output = data.meals[0].strCategory;
  console.log(output);

  output = data.meals[0].strInstructions;
  console.log(output);

  output = data.meals[0].strSource;
  console.log(output);

  for (var i = 0; i < data.meals.length; i++) {
    meal.innerHTML += `<div class="rfimg" style=""><img class="rfimage" src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}"></div> 
        <br>
        <div class="rftitle" style="">${data.meals[i].strMeal}</div>
        <br>
        <button id="obtn" uk-toggle="target: #my-id" type="button">Instructions</button>
        <div id="my-id" uk-modal>
        <div id="mod1" class="uk-modal-dialog uk-modal-body">
        <h2 id="mod1h" class="uk-modal-title">Instructions</h2>
        ${data.meals[i].strInstructions}
        <br>
        <div class="rfsource" style="">Source: <br> <a href="${data.meals[i].strSource}" target="_blank">${data.meals[i].strSource}</a>
        </div>
        <br>
        <button id="cbtn" class="uk-modal-close" type="button" style="center">Close</button>
        </div>
        </div>`;
  }
});

$.ajax({
  url: "https://api.openbrewerydb.org/breweries?per_page=1",
  method: "GET",
}).then(function (data) {
  console.log(data);
  var output = data[0].name;
  console.log(output);

  output = data[0].brewery_type;
  console.log(output);

  output = data[0].state;
  console.log(output);

  output = data[0].website_url;
  console.log(output);

  for (var i = 0; i < data.length; i++) {
    drinks.innerHTML += 
    
        `<br>
        <div class="bfname" style="">${data[i].name}</div> 
        <br>
        <button id="obtn" class="" uk-toggle="target: #my-id" type="button">Map</button>
        <div id="my-id" uk-modal>
        <div id="mod1" class="uk-modal-dialog uk-modal-body">
        <h2 id="mod1h" class="uk-modal-title">Map</h2>
        <iframe id="bfmap"
        width="450"
        height="450"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGSqgDLirtkOO-bg8zZAzCv4_h4tdhAa4
          &q=Avondale+Brewing+Co, Birmingham+Alabama">
        </iframe>
        <br>
        <div class="bfwebsite" style="">Website: <br> <a href="${data[i].website_url}" target="_blank">${data[i].website_url}</a>
        </div>
        <br>
        <button id="cbtn" class="uk-modal-close" type="button" style="center">Close</button>
        </div>
        </div>`;
  }
});

//src="https://www.google.com/maps/embed/v1/location?key=AIzaSyAGSqgDLirtkOO-bg8zZAzCv4_h4tdhAa4
//&q=${data[i].longitude}, ${data[i].latitude}">

//src="https://www.google.com/maps/embed/v1/location?key=AIzaSyAGSqgDLirtkOO-bg8zZAzCv4_h4tdhAa4
//&q=bfname">

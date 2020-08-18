$("#searchicon").on("click", function(event) {
    event.preventDefault();


$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
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
    meal.innerHTML += 
    
    `<a class="uk-button uk-button-default" href="#modal-overflow" uk-toggle>Open</a>

    <div id="modal-overflow" uk-modal>
        <div class="uk-modal-dialog">

            <div id="rfhead" class="uk-modal-header">
                <h2 id="rftitle" class="uk-modal-title">${data.meals[i].strMeal}</h2>
            </div>
    
            <div class="uk-modal-body" uk-overflow-auto>
    
                <p>
                <div class="rfimg" style=""><img class="rfimage" src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}"></div> 
                </p>
                <br>
                <p>${data.meals[i].strInstructions}</p>
                <br>
                <p>
                <div class="rfsource" style="">Source: <br> <a href="${data.meals[i].strSource}" target="_blank">${data.meals[i].strSource}</a>
              </div>    
                </p>
                <br>
    
            </div>
    
            <div id="modfoot" class="uk-modal-footer uk-text-right">
                <button id="cbtn" class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            </div>
    
        </div>
    </div>`;
    
  }
});
})

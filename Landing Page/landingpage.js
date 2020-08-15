$.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
    method: "GET"
}).then(function (data) {
    console.log(data)
    var output = data.meals[0].strMealThumb;
    console.log(output)

    output = data.meals[0].strCategory;
    console.log(output)

    output = data.meals[0].strInstructions;
    console.log(output)

    output = data.meals[0].strSource;
    console.log(output)

    for (var i = 0; i < data.meals.length; i++) {
        meal.innerHTML +=

        `<div class="rfimg" style=""><img class="rfimage" src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}"></div> 
        <br>
        <div class="rftitle" style="">${data.meals[i].strMeal}</div> 
        <br>
        <div class="rfsource" style="">Source: <br> <a href="${data.meals[i].strSource}" target="_blank">${data.meals[i].strSource}</a></div>`;
    }

});

        // <br>
        // Category:  ${data.meals[i].strCategory} 
        // <br>
        // Instructions:  ${data.meals[i].strInstructions}

$.ajax({
    url: "https://api.openbrewerydb.org/breweries?per_page=1",
    method: "GET"
}).then(function (data) {
    console.log(data)
    var output = data[0].name;
    console.log(output)

    output = data[0].brewery_type;
    console.log(output)

    output = data[0].state;
    console.log(output)

    output = data[0].website_url;
    console.log(output)

    for (var i = 0; i < data.length; i++) {
        drinks.innerHTML +=

        `${data[i].name} 
        <br>
        Brewery Type:  ${data[i].brewery_type} 
        <br>
        Instructions:  ${data[i].state} 
        <br>
        Wesbite: <br> <a href="${data[i].website_url}" target="_blank">${data[i].website_url}</a>`;
    }
});
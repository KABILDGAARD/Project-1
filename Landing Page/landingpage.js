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

        `<img src="${data.meals[i].strMealThumb}" alt="${data.meals[i].strMealThumb}"> 
        <br>
        ${data.meals[i].strMeal} 
        <br>
        Category:  ${data.meals[i].strCategory} 
        <br>
        Instructions:  ${data.meals[i].strInstructions} 
        <br>
        Source: <a href="${data.meals[i].strSource}" target="_blank">${data.meals[i].strSource}</a>`;
    }

});

// $.ajax({
//     url: "https://api.openbrewerydb.org/breweries?by_state=california%1times",
//     method: "GET"
// }).then(function (data) {
//     console.log(data)
//     var output = data.breweries[0].name;
//     console.log(output)

//     output = data.breweries[0].brewery_type;
//     console.log(output)

//     output = data.breweries[0].state;
//     console.log(output)

//     output = data.breweries[0].website_url;
//     console.log(output)

//     for (var i = 0; i < data.breweries.length; i++) {
//         breweries.innerHTML +=

//         '${data.breweries[i].name} 
//         <br>
//         Brewery Type:  ${data.breweries[i].brewery_type} 
//         <br>
//         Instructions:  ${data.breweries[i].state} 
//         <br>
//         Wesbite: <a href="${data.breweries[i].website_url}" target="_blank">${data.breweries[i].website_url}</a>`;
//     }
// });
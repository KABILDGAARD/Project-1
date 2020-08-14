$.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
    method: "GET"
}).then(function (data) {
    console.log(data)
    var output = data.meals[0].strMealThumb;
    console.log(output)

    var output = data.meals[0].strCategory;
    console.log(output)


    var output = data.meals[0].strInstructions;
    console.log(output)

    var output = data.meals[0].strSource;
    console.log(output)
});


//     for (var i = 0; i < output.length; i++) {
//         meal.innerHTML +=

//             `<img src="${output[i].strMealThumb}" alt="${output[i].strMeal}"> 
//             <br>
        
        
//         ${output[i].strMeal} 
//         <br>
//         Category:  ${output[i].strCategory} 
//         <br>
//         Instructions:  ${output[i].strInstructions} 
//         <br>
//         Source: <a href="${output[i].strSource}">${output[i].strSource}</a>`;
//     }

// });
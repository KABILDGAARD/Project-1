class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
  
  ReactDOM.render(<MyComponent />, document.getElementById('meal')));

    const newInnerHTML = `
        <div class="row">
            <div class="columns five">
                <img src="${meal.strMealThumb}" alt="Meal Image">
                ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        ${meal.strYoutube ? `
        <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                </iframe>
            </div>
        </div>` : ''}
    `;
    
    meal_container.innerHTML = newInnerHTML;
}}
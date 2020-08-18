// $("#searchicon").on("click", function(event) {
//     event.preventDefault();

$("#searchicon").click(function () {
    event.preventDefault;
    $(".info").empty();
  
    //Get user's search request and store it in variable userInput
    var userInput = $("#ingredientsearch").val();
  
    //Variables used to create the request url
    var URL = "https://api.openbrewerydb.org/breweries?by_postal=";
    var jsonFormat = "&callback=JSON_CALLBACK";
    var ajaxURL = URL + userInput + jsonFormat;
  
    $.ajax({
      url: ajaxURL,
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

        output = data[0].longitude;
        console.log(output);

        output = data[0].latitude;
        console.log(output);
      
        for (var i = 0; i < data.length; i++) {
          drinks.innerHTML += 
        
        `<a id="modalbtn" class="uk-button uk-button-default" href="#modal-overflow" uk-toggle>${data[0].name}</a>
  
      <div id="modal-overflow" uk-modal>
          <div class="uk-modal-dialog">
  
              <div id="rfhead" class="uk-modal-header">
                  <h2 id="rftitle" class="uk-modal-title">${data[0].name}</h2>
              </div>
      
              <div class="uk-modal-body" uk-overflow-auto>
    
                  <iframe id="bfmap"
                  width="450"
                  height="450"
                  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAGSqgDLirtkOO-bg8zZAzCv4_h4tdhAa4
                    &q=${data[0].name}">
                  </iframe>
                  <br>
                  <p>${data[0].brewery_type}</p>
                  <br>
                  <p>
                  <div class="rfsource" style="">Source: <br> <a href="${data[0].website_url}" target="_blank">${data[0].website_url}</a>
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
  });
  
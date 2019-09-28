console.log('our app code goes here');

$("#search").click(function(e){
	e.preventDefault();
	$('#display').empty();
	var searchValue = $("#searchbox").val();
	var searchValue1 = JSON.stringify(searchValue);
	console.log(searchValue1);
fetch("https://restcountries-v1.p.rapidapi.com/name/" + searchValue ,{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "9f24baf32fmshbb4ae565ad2c065p11499ajsn78a07e72d500"
	}
})
.then(function(response) {
   // console.log (response)
   return response.json();
 })
 .then(function(data) {
   console.log(data)
     displayJSON(data)
 })
});

function displayJSON(data) {
	 for (var i = 0; i < data.length; i++) {
	 		var container = document.getElementById('container');
 	 		var pTag = document.createElement('p');
 	 		var pTag2 = document.createElement('p');
 	 		pTag.innerHTML = data[i].name;
 	 		var newTag = container.appendChild(pTag);
 	 		
 	 	
}};



// (function() {
//   $('#original-text').submit( function(e) {
// 	e.preventDefault();
// 	var $originalText = $(this);
// 	var $spinner = $('.spinner');
//
// 	$originalText.hide();
// 	$spinner.show();
//
// 	var url = "https://libberfy.herokuapp.com?html_form=1&q=" + $originalText.find('textarea').val()
//
// 	$.getJSON(url, function( response ) {
// 	  $spinner.hide();
// 	  var $madlibFormContainer = $('#madlib-form-container');
// 	  $madlibFormContainer.append(response.madlib);
// 	  $madlibFormContainer.find('input[type=submit]').addClass('btn btn-primary');
// 	  $inputFields = $madlibFormContainer.find('input[type=text]');
//
// 	  if($inputFields.length > 0) {
// 		$inputFields.addClass('form-control')
// 		$inputFields[0].focus();
// 	  } else {
// 		$('.error').show();
// 	  }
// 	});
//   });
//
//   $(document).on('submit', '#madlib-form-container', function(e) {
// 	e.preventDefault();
// 	var $madlibFormContainer = $(this);
//
// 	$madlibFormContainer.find('input[type=text]').each( function() {
// 	  $(this).replaceWith(this.value);
// 	});
// 	$madlibFormContainer.addClass('show-text');
// 	$madlibFormContainer.find('input[type=submit]').remove();
// 	var textToAudioUrl = "https://tts-api.com/tts.mp3?q=" + $madlibFormContainer.text();
//
// 	$('#audio').attr('href', textToAudioUrl).show();
//   });
// })();

//Marvel stuff

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);


var ts = Math.floor(Date.now() / 1000);
console.log(ts);
var privateKey = 'e3a35766e08b725483ff4f897c673f23b4f78f73';
var publicKey = 'e147157469eaafd8c42877fad76e062b';
var toHash = ts + privateKey + publicKey;
var md5Request = new XMLHttpRequest();
md5Request.open('GET', 'https://friend5.herokuapp.com/md5/' + toHash, true);
var hash;
md5Request.onload = function () {
	console.log(this.response);
	hash = this.response;
	var request = new XMLHttpRequest();
	request.open('GET', 'https://gateway.marvel.com:443/v1/public/events?limit=1&ts='+ ts+'&apikey=e147157469eaafd8c42877fad76e062b&hash='+ hash, true);
	// https://gateway.marvel.com:443/v1/public/events?apikey=e147157469eaafd8c42877fad76e062b
	request.onload = function () {

	  // Begin accessing JSON data here
	  var data = JSON.parse(this.response);
	  console.log(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.data.results.forEach(comic => {
	      const card = document.createElement('div');
	      card.setAttribute('class', 'card');

	      const h1 = document.createElement('h1');
	      h1.textContent = comic.title;

	      const p = document.createElement('p');
	      comic.description = comic.description.substring(0, 300);
	      p.textContent = `${comic.description}...`;

	      container.appendChild(card);
	      card.appendChild(h1);
	      card.appendChild(p);
	    });
	  } else {
	    const errorMessage = document.createElement('marquee');
	    errorMessage.textContent = `Gah, it's not working!`;
	    app.appendChild(errorMessage);
	  }
	}

	request.send();
}
md5Request.send();

// Madlibs
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange=(e)=>{
// console.log(Http.responseText)
// }

//Madlibs

// (function() {
//   $('#original-text').submit( function(e) {
// 	e.preventDefault();
// 	var $originalText = $(this);
// 	var $spinner = $('.spinner');
//
// 	$originalText.hide();
// 	$spinner.show();
//
// 	var url = "https://libberfy.herokuapp.com?html_form=1&q=" + $originalText.find('textarea').val()
//
// 	$.getJSON(url, function( response ) {
// 	  $spinner.hide();
// 	  var $madlibFormContainer = $('#madlib-form-container');
// 	  $madlibFormContainer.append(response.madlib);
// 	  $madlibFormContainer.find('input[type=submit]').addClass('btn btn-primary');
// 	  $inputFields = $madlibFormContainer.find('input[type=text]');
//
// 	  if($inputFields.length > 0) {
// 		$inputFields.addClass('form-control')
// 		$inputFields[0].focus();
// 	  } else {
// 		$('.error').show();
// 	  }
// 	});
//   });
//
//   $(document).on('submit', '#madlib-form-container', function(e) {
// 	e.preventDefault();
// 	var $madlibFormContainer = $(this);
//
// 	$madlibFormContainer.find('input[type=text]').each( function() {
// 	  $(this).replaceWith(this.value);
// 	});
// 	$madlibFormContainer.addClass('show-text');
// 	$madlibFormContainer.find('input[type=submit]').remove();
// 	var textToAudioUrl = "https://tts-api.com/tts.mp3?q=" + $madlibFormContainer.text();
//
// 	$('#audio').attr('href', textToAudioUrl).show();
//   });
// })();

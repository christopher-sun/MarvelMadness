const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


var request = new XMLHttpRequest();
request.open('GET', 'https://gateway.marvel.com:443/v1/public/events?limit=5&ts=123456789&apikey=e147157469eaafd8c42877fad76e062b&hash=9c0442a67cad74b32745fb23ba5fbb73', true);
// https://gateway.marvel.com:443/v1/public/events?apikey=e147157469eaafd8c42877fad76e062b
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(comic => {
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



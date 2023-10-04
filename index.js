let content = '';
fetch('http://localhost:1337/articles')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
      content +=
      `
      <article>
      <div class="title"><h1>${data[i].Titre}</h1></div>
      <div class="author"><h2><a href="author.html">${data[i].Auteurs.Nom}</a></h2></div>
      <div class="image"><img src="http://localhost:1337${data[i].Image.url}" alt="${data[i].Titre}"></div>
      <div class="content"><p>${data[i].Contenu}</p></div>
      </article>
      `
      document.querySelector('.container').innerHTML = content
    }
    })
    .catch(error => {
        console.error('Error:', error);
    });



let author = '';
fetch('http://localhost:1337/auteurs')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      for (let j = 0; j < data.length; j++) {
      author +=
      `
      <div>
      <div class="name"><h1>${data[j].Nom}</h1></div>
      <div class="content"><p>${data[j].Genre}</p></div>
      </div>
      `
      document.querySelector('.authorList').innerHTML = author
    }
    })
    .catch(error => {
        console.error('Error:', error);
    });
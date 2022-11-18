const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost/apinsmt/views/categories_get_all.php', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movies => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movies.Id

      const p = document.createElement('p')
      movies.Name = movies.Name.substring(0, 300)
      p.textContent = `${movies.Name}`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
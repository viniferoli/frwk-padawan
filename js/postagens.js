fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => fillTable(json))

function fillTable(json) {
  const table = document.getElementById('postagens')

  json.forEach(item => {
    var row = table.insertRow()
    var usuario = row.insertCell(0)
    var titulo = row.insertCell(1)
    var postagem = row.insertCell(2)

    usuario.innerHTML = item.userId
    titulo.innerHTML = item.title
    postagem.innerHTML = item.body
  })
}

fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => fillTable(json))

function fillTable(json) {
  const table = document.getElementById('albuns')

  json.forEach(item => {
    var row = table.insertRow()
    var usuario = row.insertCell(0)
    var titulo = row.insertCell(1)

    usuario.innerHTML = item.userId
    titulo.innerHTML = item.title
  })
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => fillTable(json))

function fillTable(json) {
  const table = document.getElementById('todos')

  json.forEach(item => {
    var row = table.insertRow()
    var usuario = row.insertCell(0)
    var titulo = row.insertCell(1)
    var completo = row.insertCell(2)

    usuario.innerHTML = item.userId
    titulo.innerHTML = item.title
    completo.innerHTML = item.completed
  })
}

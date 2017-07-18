let button = document.getElementById('search-button')
let searchArea = document.getElementById('search-area')
let ul = document.querySelector('ul')
let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='

const addRecipe = (recipe) => {
  let li = document.createElement('li')
  let img = document.createElement('img')
  let a = document.createElement('a')
  let aText = document.createTextNode(recipe.title)

  recipe.thumbnail ? img.src = recipe.thumbnail : img.src = "http://via.placeholder.com/250x250"

  a.appendChild(aText)
  a.href = recipe.href

  li.appendChild(img)
  li.appendChild(a)
  ul.appendChild(li)
}

const search = () => {
  fetch(url + searchArea.value)
  .then(response => response.json())
  .then(data => {
    data.results.forEach((recipe) => {
      addRecipe(recipe)
    })
  })
}

button.addEventListener("click", search)

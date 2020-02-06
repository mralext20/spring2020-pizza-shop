export default class Pizza {
  constructor(data) {
    this.pizzaName = data.pizzaName
    this.ingredients = data.ingredients || []
  }

  get Template() {
    return `
<h1>${this.pizzaName}</h1>
<h3>Ingredients: ${this.ingredients}</h3>
`
  }


}
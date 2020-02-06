export default class Pizza {
  constructor(data) {
    this.pizzaName = data.pizzaName
    this.ingredients = data.ingredients || []
  }

}
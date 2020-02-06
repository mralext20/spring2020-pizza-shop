import Pizza from "../Models/Pizza.js"
import _store from "../store.js"
import Ingredient from "../Models/Ingredient.js"


class PizzaService {
  constructor() {
    console.log("pizza service")
  }
  addPizza(newPizza) {
    newPizza = new Pizza(newPizza)
    _store.State.pizzas.push(newPizza)
  }

  addIngredient(newIngredient, pizzaId) {
    newIngredient = new Ingredient(newIngredient)
    let pizza = _store.State.pizzas.find(pizza => pizza.id === pizzaId)
    pizza.ingredients.push(newIngredient)
  }

  deletePizza(id) {
    let pizzas = _store.State.pizzas.filter(pizza => pizza.id !== id)
    _store.State.pizzas = pizzas


  }
}

const PIZZASERVICE = new PizzaService()
export default PIZZASERVICE
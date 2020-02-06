import Pizza from "../Models/Pizza.js"
import _store from "../store.js"


class PizzaService {
  constructor() {
    console.log("pizza service")
  }
  addPizza(newPizza) {
    newPizza = new Pizza(newPizza)
    _store.State.pizzas.push(newPizza)
  }
}

const PIZZASERVICE = new PizzaService()
export default PIZZASERVICE
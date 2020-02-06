import _pizzaService from "../Services/PizzaService.js"
import _store from "../store.js"

function _draw() {
  let pizzas = _store.State.pizzas

}

export default class PizzaController {
  constructor() {
    console.log("pizza controller")
  }

  addPizza(event) {

    event.preventDefault();

    let formData = event.target;

    let newPizza = {
      pizzaName: formData.pizzaName.value
    }

    console.log(newPizza);

    _pizzaService.addPizza(newPizza)

  }

}
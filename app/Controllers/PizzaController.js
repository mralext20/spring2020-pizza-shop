import _pizzaService from "../Services/PizzaService.js"
import _store from "../store.js"

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

    console.log(`newPizza is ${newPizza}`);



  }

}
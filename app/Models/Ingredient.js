import { generateId } from "../utils.js"

export default class Ingredient {
  /**
   * @param {{ingredientName: String, id:String}} data - 
   */
  constructor(data) {
    this.ingredientName = data.ingredientName
    this.id = data.id || generateId()
  }

  template(pizzaId) {
    return /*html*/`
<h4 class="col-10">${this.ingredientName}
</h4>
<div class="col-2"><button type="button" name="" onclick="app.pizzaController.deleteIngredient('${this.id}','${pizzaId}')" class="btn btn-danger btn-sm btn-block"><i class="fas fa-trash"></i></button>
</div>
`
  }

}
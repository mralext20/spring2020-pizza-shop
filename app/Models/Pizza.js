import { generateId } from "../utils.js"
import Ingredient from "./Ingredient.js"

export default class Pizza {
  /**
   * @param {{ pizzaName: any; id: string; ingredients: Ingredient[]; }} data
   */
  constructor(data) {
    this.pizzaName = data.pizzaName
    this.id = data.id || generateId()
    this.ingredients = data.ingredients || []
  }

  get Ingredients() {
    let template = ""
    this.ingredients.forEach(ingredient => {
      template += ingredient.template(this.id)
    })
    return template
  }

  get Template() {
    return /*html*/`
<div class="col-6">
<div class="row">
<h1 class="col-10">${this.pizzaName}</h1>
<button onclick="app.pizzaController.deletePizza('${this.id}')" class="btn col-2 btn-danger"><i class="fas fa-trash"></i></button>
</div>
<h3>Ingredients:
</h3>
<div class="row">
${this.Ingredients}
</div>
<form onsubmit="app.pizzaController.addIngredient(event, '${this.id}')">
                    <div class="form-group">
                        <label for="">Ingredients</label>
                        <input type="text" name="ingredientName" class="form-control" placeholder=""
                            aria-describedby="helpId">
                        <button class="btn btn-primary" type="submit">
                            Add Ingredient
                        </button>
                    </div>
                </form>
</div>
`
  }


}
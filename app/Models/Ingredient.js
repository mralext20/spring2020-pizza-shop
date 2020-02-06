import { generateId } from "../utils.js"

export default class Ingredient {
  constructor(data) {
    this.ingredientName = data.ingredientName
    this.id = data.id || generateId()
    this.ingredients = data.ingredients || []
  }

  get Template() {
    return /*html*/`
<div class="col-6">
<h1>${this.pizzaName}</h1>
<h3>Ingredients: ${this.ingredients}</h3>
<form onsubmit="app.pizzaController.addIngredient(event, ${this.id})">
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
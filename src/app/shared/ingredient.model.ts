export class Ingredient {
  static counter = 0;
  public name: string;
  public amount: number;
  public id: number;
  constructor(name: string, amount: number, id: number = Ingredient.counter) {
    this.name = name;
    this.amount = amount;
    this.id = id;
    if (id === Ingredient.counter) {
      Ingredient.counter = Ingredient.counter + 1;
    }
  }
}

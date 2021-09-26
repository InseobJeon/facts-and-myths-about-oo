export interface Menu {
  menuName: string;
}

export class Drinks {
  private readonly drinkName: string;
  constructor(private readonly menuToMake: Menu) {
    this.drinkName = menuToMake.menuName;
  }
}

export interface Baristar {
  makeCoffee(menuList: Menu[]): Drinks[];
}

export interface MenuList {
  getAllMenu(): Menu[];
  chooseMenu(menuNames: string[]): Menu[];
}

export interface Order {
  getOrder(menuNames: string[]): Menu[];
}

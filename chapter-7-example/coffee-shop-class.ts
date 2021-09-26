import { Baristar, Drinks, Menu, MenuList } from './coffee-shop-interface';

export class Americano implements Menu {
  constructor(public readonly menuName: string) {}
}

export class ProfessionalBarista implements Baristar {
  constructor() {}
  public makeCoffee(menuList: Menu[]): Drinks[] {
    return menuList.map<Drinks>((eachMenu) => new Drinks(eachMenu));
  }
}

export class GeekCoffeeShopMenuList implements MenuList {
  constructor(private readonly menu: Menu[]) {}

  public getAllMenu() {
    return this.menu;
  }

  private makeHashTable() {
    const menuHashTable: { [menuName: string]: Menu } = {};
    for (const eachMenu of this.menu) {
      if (!menuHashTable[eachMenu.menuName]) {
        menuHashTable[eachMenu.menuName] = eachMenu;
      }
    }
    return menuHashTable;
  }

  public chooseMenu(menuNames: string[]): Menu[] {
    const hashed = this.makeHashTable();
    const arrToReturn: Menu[] = [];
    for (const menuNameToChoose of menuNames) {
      if (!hashed.menuNameToChoose) {
        throw new Error('선택지에 없는 메뉴는 주문하실 수 없습니다.');
      }
      arrToReturn.push(hashed.menuNameToChoose);
    }

    return arrToReturn;
  }
}

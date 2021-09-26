import {
  Americano,
  GeekCoffeeShopMenuList,
  ProfessionalBarista,
} from './coffee-shop-class';
import { Drinks } from './coffee-shop-interface';

// create instances
const americano = new Americano('americano');
const menuList = new GeekCoffeeShopMenuList([americano]);
const baristar = new ProfessionalBarista();

// if an user order to get some drink
// find the menu first
const availableMenu = menuList.getAllMenu();
console.log(availableMenu);

// then, choose one of them
const menuToOrder = availableMenu[0];
console.log(menuToOrder);

// baristar makes coffee with order
const drinks = baristar.makeCoffee([menuToOrder]);

// check!
console.log(drinks);
console.log(drinks[0] instanceof Drinks);

import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";


export const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
  },
  {
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
  },
  {
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 256.53,
  },
  {
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
  },
  {
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 4.99,
  },
  {
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 1997.99,
  },
];

//Inside of the Array brackets are Object. This is because objects are more in detailed. 
//If we just had Array brackets with no objects, then we wouldnt have image, price, etc.
//But b/c we want more variety of pizza choices this was why we had Objects inside of the Array.

//We are basically creating a menu (item).

//NOW we could have put this information in MENU.JS but instead we import this page to MENU.JS inside the curly braces
//Also you loop this by the example in line  11 in Menu.JS
import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList"> 
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;


//rfce + enter automatically puts in template component

//The menu page will teach us most about he fundamental of react.js, you will use helper function, list, json, and dealing with data
//In the menu we want a title, and a div to display the menu items, so lets say we have 6 different divs of diffferent images, prices, descirption But that isnt effiencient

//you do not have to create a helpers folder, you can just have menulist as a file inside of src
//the reason why we created a menulist page was to make it more efficient

//We will import an actual variable (MenuList) at the top of this page
//B/C whenever you import a variable const (line 9 in movieList) you put them in brackets
//But if you are exporting a component you have to import the file, such as, lines 1,3, and 4

//We want to loop throught the list, in order to do so, we use  .map((element, key)), for each item (individually from MenuList) you want to return a new div

//Instead of using a div for the menu item we want to return a it. Just like a dot notation in javascript we want to retreive the elements (lines 12-17)
//In line 14 we are putting the key b/c react.js gives bugs if you  dont use the key item. It doesnt make any difference though

//Once you import the Menu.css in here, the layout should look good
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>


        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

//rfce + enter automatically puts in template component

//So in the home page we want to create the background with a picture  of a pizza, there will be a header and a button but to the left.
//The title is H1 for the homepage
//To add a background image you do NOT put it in a react CSS like you would in an index css
//Make sure to link home.css
//MAKE SURE if you are trying to put a picture as the background DO not put it in a container line 9, put it in the parent class line 8.

//BUTTON LINK
//We create the button so that it directs you to the menu
//So you wrap the menu with a link tag and import the link at the top like you did earlier for the Navbar component (line 2).
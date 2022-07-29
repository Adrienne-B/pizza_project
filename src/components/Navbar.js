import React, {useState} from "react"; 
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder'; 
import "../styles/Navbar.css";


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false) //this creates a statee.
    //1. Inside the bracket we are giving a name (Can be any name)/this is the value.
    //2. we put false because we do not want to show the links first.
    //3. setOpenLinks is a variable that when change it will rerender the changes that were made in function
    
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };
      //calling from line 30 and to ulternate you put ! so that it can be true and false
    
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}> 
                <img src={Logo}/>


                <div className="hiddenLinks">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                </div>
            </div>

        
            <div className="rightSide">
                <Link to="/">Home</Link>    
                <Link to="/menu">Menu</Link>  
                <Link to="/about">About</Link>    
                <Link to="/contact">Contact</Link>  
                <button onClick={toggleNavbar}> 
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
//rfce + enter automatically puts in template component
//Line 30 is the name of the function


//HOOK(s)/STATES
//We want a name of the variable or state so say openLInks inside of the [] array brackets
//create a function called setOpenLinks (for this example)
//We gave line 22 an ID in order to change the id based on the id of the state in line 9
//Now we wil use teneray operators which is like if-else statement ?(if its true..it will open) : else which means it will close, so in line 9..it is false


//TOGGLE FUNCTION/LAST THING TO DO
//This is a function we will use which means the button that will call the function wichi his toggleNavbar
//We want to change the value of open links so if hook is true we want to turn it into false OR if it is false we want to turn it into true (alternate).
//So in order to do this we grab the openlink variable that we got from the hook (line 52-56), and set it to the opposite of what it currently is
//So if you want it to alternate (change) you put a not symbol ! and then the value (hook value)
//The hamburger button should appear, once you put css styles to it..when you shrink the links should disappeaer and be inside the hamburger nav and when the window is stretch.. the links should be across

//LOGO SECTION
//The first section/left side is adding the logo to the left
//Unlike regular html or css where you use a path to insert an image "../", for Reeact/js you use {} AND import it at the top.
//To import an image (EXAMPLE like 2), you tyoe import..then you give it a name (so since we are importing a logo the variable name will be Logo), type from and then link the path.

//HIDE LINKS SECTION (HAMBURGER)
//In line 24. as the screen gets smaller you will see the links stacked on top and the hamburger BUT we do NOT want that
//We will use a Hook concept which will be STATE, which will be a boolean (true orfalse)
//If it set to true we want to show the links and remove the logo BUT if it is false we want to remove the logo and show the links
//So in line 1 you input {useState} and to create a state, the inital type will be false so that the links doesnt show ONLY the logo
//Now go to line 52 which will discuss how to transition from hamburger to wide navbar

//SHOW LINKS SECTION
//The second section/right side is adding the logo to the right
//Link component that you imported will help create links (line 3)
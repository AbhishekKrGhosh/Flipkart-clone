import a from './a.png';
import appliances from './image/appliances.png'
import beautyToysMore from './image/beautyToysMore.png'
import electronics from './image/electronics.png'
import fashion from './image/fashion.png'
import grocery from './image/grocery.png'
import home from './image/home.png'
import mobile from './image/mobile.png'
import topOffers from './image/topOffers.png'
import travel from './image/travel.png'
import c from './c.png';
import './NavbarCss.css';
import React from "react";
function Navbar(){
    return(<div>
      <table width="100%" cellPadding={50} bgcolor="#2874F0">
      
        <div>
            <tr><td><div>
                <img alt = "image" src = {a} height="75"/>
            </div></td>
            <td></td><div><table cellPadding={30}>
              <tr>
              <td><h3>Home</h3></td>
              <td><input type="text" placeholder='search'></input></td>
            
              <td><h3>more</h3></td>
              <td><h3>become a seller</h3></td>
              <td><h3>cart</h3></td>
              <td><h3>about</h3></td>
              <td><button>Login</button></td>
              <td><button>Sign Up</button></td></tr></table>
            </div><td></td>
            </tr>
        </div>
        </table><table>
          <tr>
            <td>
            <table width="100%">
              <tr>
                <td>
                  <img src={grocery}></img>
                </td>
                <td>
                  <img src={mobile}></img>
                </td>
                <td>
                  <img src={fashion}></img>
                </td>
                <td>
                  <img src={electronics}></img>
                </td>
                <td>
                  <img src={home}></img>
                </td>
                <td>
                  <img src={appliances}></img>
                </td>
                <td>
                  <img src={travel}></img>
                </td>
                <td>
                  <img src={topOffers}></img>
                </td>
                <td>
                  <img src={beautyToysMore}></img>
                </td>
              </tr>
              <tr><td>Grocery</td>
              <td>Mobile</td>
              <td>Fashion</td>
              <td>Electronics</td>
              <td>Home</td><td>
              Appliances</td>
              <td>Travel</td>
              <td>Top Offers</td>
              <td>Beauty,Toys&More</td></tr>
            </table>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
            <img width="100%" alt = "image" src = {c}/>
            </td>
          </tr>
        </table>
        </div>
    );
}
export default Navbar;
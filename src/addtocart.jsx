import React from "react";
import Cart from "./cart";
import { Useusercontect } from "./usecontext";


function Addtocart() {
document.title="Add To Cart"
const handlealart=()=>{
  if(total==0){alert("cart empty")}
else{alert("Order Confirmed")}}


const {list,setlist}=Useusercontect()
const total = list.reduce((acc, item) => acc + item.price * item.count, 0);
console.log("Total Price:", total); 
    return (
      <>
      <div className="top">
        <h1>MOBILES IN YOUR CART</h1>
      </div>
      {list.map((val,i)=><Cart key={i}
      id={val.id}
      title={val.title}
      img={val.images[1]}
      description={val.description}
      price={val.price}
      setlist={setlist}
      />
      )}
      <div className="bottom">
      <div className="center">
      <b><p>SUB TOTAL :₹{total}</p>
      <p>SHIPPING : FREE</p>
      <h3>GRAND TOTAL :₹{total}</h3></b>
      <hr/>
      <button className="cbtn" onClick={()=>handlealart()}>CHECK OUT</button>
      </div></div>
      
      </>
    )
  }
  
  export default Addtocart
 
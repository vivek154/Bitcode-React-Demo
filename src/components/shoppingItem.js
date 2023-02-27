import "./shoppingitem.css"
import FormatDate from './dateformat'
import Card from "./UI/Card";
import { useState } from "react";
const ShoppingItem=({i_name,i_cost,i_date,i_ratings})=>{
       
        
        let[name,setName]=useState(i_name);
        const cost=i_cost;
        const date=i_date;
        const ratings=i_ratings;
        function changeNameHandler(){
            setName(name="New Name");
        }
    
    return(
            <Card className="shopping-item">
                <div className="name-container">
                    <h1>{name}</h1>
                </div>
                <Card className="cost-container">
                   {cost}/.
                </Card>
                <div className="ratings-container">
                   {ratings} 
                </div>
                <FormatDate date={date}></FormatDate>
                <div>
                    <button onClick={changeNameHandler}>Change Name</button>
                </div>
            </Card>
      
        )
}
export default ShoppingItem;
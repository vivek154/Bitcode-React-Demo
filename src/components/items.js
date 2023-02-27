import { useState } from "react";
import "./items.css"
import ShoppingItem from "./shoppingItem"
import DateFilter from "./DateFilter";
import Card from "./UI/Card";

export default function Items(props){
    const Items=props.Item_objs;

    const [filteredYear,setFilteredYear]=useState("2021");
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);

    }
        const filteredItems=Items.filter((item)=>{
            return item.item_pur_date.getFullYear().toString()===filteredYear;
        })

        const  mappedItems=filteredItems.map((item_obj)=>{
            return(
                <ShoppingItem key={item_obj.item_id} i_name={item_obj.item_name} i_cost={item_obj.item_cost} i_ratings={item_obj.item_ratings} i_date={item_obj.item_pur_date}></ShoppingItem>
            )
        })
        return(
            <div className="main-container">
                <Card className=" items">
                    <DateFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></DateFilter>
                    
                    {(filteredItems.length===0)&& (<p className="no_items">No items Found</p>)}
                    {(filteredItems.length>0)&& (mappedItems)}
                    
                    
                    
                    {/*filteredItems.length===0?(<p className="no_items">No items Found</p>):(mappedItems)*/}
                     
                </Card>
            </div>
        )
    
}
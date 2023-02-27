
import { useState } from "react"
import "./ItemForm.css"

const ItemForm=(props)=>{
    //const[userInput,setUserInput]=useState({itemName:"",itemCost:"",itemPurDate:""});
    
    const[itemName,setTxtName]=useState("");
    const[itemCost,setItemCost]=useState("");
    const[itemPurDate,setItemPurDate]=useState("");
    const changeText=(event)=>{
      setTxtName(event.target.value);
     //setUserInput({...userInput,itemName:event.target.value});
     /* setUserInput((prevState)=>{
        return{...userInput,itemName:event.target.value}
        });*/
        
    }
    const changeCost=(event)=>{
        setItemCost(event.target.value);
        /*setUserInput((prevState)=>{
            return{...userInput,itemCost:event.target.value}
            });*/
    }
    const changeDate=(event)=>{
        setItemPurDate(event.target.value);
        /*setUserInput((prevState)=>{
            return{...userInput,itemPurDate:event.target.value}
            });*/
    }
    /*const btnClick=()=>{
        console.log(itemName,itemCost,itemPurDate);
    }*/
    const btnSubmitHandler=(event)=>{
        event.preventDefault();
        const itemData={
            item_name:itemName,
            item_cost:itemCost,
            item_pur_date:new Date(itemPurDate),
            item_id:props.lastItemID+1
        }
        console.log(typeof(itemData.item_pur_date));
        setTxtName("");
        setItemCost("");
        setItemPurDate("");
        
        props.submitData(itemData);}
    
    const cancelAddItem=()=>{
        props.hideNewForm();
    }    
    return(
        <form onSubmit={btnSubmitHandler}>
            <div className="new-item_controls">
                <div className="new-item_control">
                    <label>Title</label>
                    <input type="text" onChange={changeText} value={itemName}></input>
                </div>
                <div className="new-item_control" >
                <label>Cost</label>
                <input type="number" onChange={changeCost} value={itemCost}></input>
                </div>
                <div className="new-item_control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2023-05-01" onChange={changeDate} value={itemPurDate}></input>
                </div>
                <div className="new-item_actions">
                    <button type="submit" >Add Item</button>
                    <button type="button" onClick={cancelAddItem}>Cancel</button>

                </div>
            </div>
        </form>
    )
}
export default ItemForm
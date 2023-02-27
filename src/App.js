
import { useState } from 'react';
import './App.css';
import Items from './components/items';
import NewItem from './components/NewItem/NewItem';
const Item_array_initial=[
{item_name:"Headphone",item_cost:999,item_pur_date:new Date(2020,5,1),item_id:100,item_ratings:4.2},
{item_name:"Wireless Mouse",item_cost:599,item_pur_date:new Date(2021,10,5),item_id:101,item_ratings:3.4},{item_name:"SSD 128GB",item_cost:1499,item_pur_date:new Date(2023,1,25),item_id:102,item_ratings:4.5}]


const App=() =>{
  const [Item_array,setItemsArray]=useState(Item_array_initial);

  let [showNewItem,setShowNewItem]=useState(false);

  const fetchData=(data)=>{
    console.log(data);
    setItemsArray((prevItems)=>{
      return [data,...prevItems];
    })}

    const displayNewItem=()=>{
      setShowNewItem(showNewItem=true);
    }
    const hideNewForm=()=>{
      setShowNewItem(false);}
  return (

    <div className="App">
      {showNewItem && (<NewItem submitAppData={fetchData} lastItemId={Item_array_initial[Item_array_initial.length-1].item_id} hideNewForm={hideNewForm}></NewItem>)}
      {(!showNewItem) &&(<button className='add-item' onClick={displayNewItem}> Add Item</button>)}
        
      <Items Item_objs={Item_array}></Items>
    </div>
    
  );
}

export default App;


import ItemForm from "./ItemForm";
import "./NewItem.css";
 const NewItem=({submitAppData,lastItemID,hideNewForm})=>{
    
    const submitData=(data)=>{
        console.log(data);
        submitAppData(data);
    }
 
    return(
        <div className="new-item">
             <ItemForm submitData={submitData} lastItemID={lastItemID} hideNewForm={hideNewForm}></ItemForm>
        </div>
    )
}
export default NewItem;
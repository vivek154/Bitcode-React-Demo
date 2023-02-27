import Card from "./UI/Card";
export default function FormatDate(props){
    const day=props.date.getDate();
    const month=props.date.toLocaleString("en-US",{month:"short"});
    const year=props.date.getFullYear();
    return(
        <Card className=" main-container">
            {day} {month} {year}
        </Card>
    )
}

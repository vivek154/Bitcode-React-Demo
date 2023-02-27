import "./DateFilter.css"

const DateFilter=(props)=>{
    const dropDownHandler=(event)=>{
        console.log(event.target.value);
      props.onChangeFilter(event.target.value);
    }
    return(
        <div className="date-filter">
            <div className="date-filter_controls">
                <label>Filter Items By Year   </label>
                <select value={props.selected} onChange={dropDownHandler}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    )
}

export default DateFilter;
const Checkbox = (props) => {
    return (
        <div className="inputs">
            <input type="checkbox" onClick={() => props.updateFilter(props.filter, props.name)} />
            <label>{props.name}</label>
        </div>
    )
}

export default Checkbox;
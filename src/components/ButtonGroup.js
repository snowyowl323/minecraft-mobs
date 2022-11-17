import { useState } from "react";

const ButtonGroup = (props) => {
    const [activeButton, setActiveButton] = useState(0);

    const updateActive = (index, subtype) => {
        setActiveButton(index);

        props.updateFilter(props.type, subtype)
    }

    return (
        <div className="button-group">
            <h3>Select by {props.type}:</h3>
            {props.subtypes.map((subtype, index) => {
                if (index === activeButton) {
                    return <button onClick={() => { updateActive(index, subtype) }} className="filter-button active">{props.preText} {subtype} {props.postText}</button>
                } else {
                    return <button onClick={() => updateActive(index, subtype)} className="filter-button">{props.preText} {subtype} {props.postText}</button>
                }
            })}
        </div >
    )
}

export default ButtonGroup;

import MobIcon from "./MobIcon";

const DisplayList = (props) => {
    return (
        <div>
            <div className='mobIconList'>
                {props.filteredData.map((mob) => (
                    <MobIcon mob={mob} updateFavorites={props.updateFavorites} updateTotals={props.updateTotals} />
                ))}
            </div>
        </div>
    )
}

export default DisplayList;
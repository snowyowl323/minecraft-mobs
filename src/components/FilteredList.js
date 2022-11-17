import { useState } from "react";

import DisplayList from "./DisplayList";
import ButtonGroup from "./ButtonGroup";


const FilteredList = (props) => {
    const [filter, setFilter] = useState({ type: "All", dimension: "All", sort: "Name" });
    const [favorites, setFavorites] = useState({});
    const [totalHeight, setTotalHeight] = useState(0);
    const [totalHealth, setTotalHealth] = useState(0);

    const filterFunction = (mob) => {
        return (filter.type === "All" || filter.type === mob.type) && (filter.dimension === "All" || filter.dimension === mob.dimension)
    }

    const updateFilter = (state, value) => {
        let newFilter = filter;
        newFilter[state] = value;
        setFilter({ ...newFilter });
    }

    const sortFunction = (item1, item2) => {
        if (item1[filter.sort.toLowerCase()] < item2[filter.sort.toLowerCase()]) {
            return -1;
        } else if (item2[filter.sort] < item1[filter.sort]) {
            return 1;
        } else {
            return 0;
        }
    }

    const updateFavorites = (mobName, add) => {
        let newFavorites = favorites;
        if (add === "a" && newFavorites[mobName]) {
            newFavorites[mobName] += 1;
        } else if (add === "a") {
            newFavorites[mobName] = 1;
        } else if (add === "r" && newFavorites[mobName] > 1) {
            newFavorites[mobName] -= 1;
        } else {
            delete newFavorites[mobName]
        }
        setFavorites({ ...newFavorites })
    }

    const updateTotals = (newHeight, newHealth) => {
        setTotalHeight(Math.max(totalHeight + newHeight, 0))
        setTotalHealth(Math.max(totalHealth + newHealth, 0))
    }

    return (
        <div>
            <h2>Filters and Sorting</h2>
            <div className="button-groups">
                <ButtonGroup type={"type"} subtypes={["All", "Passive", "Neutral", "Hostile"]} postText={"Mobs"} updateFilter={updateFilter} />
                <ButtonGroup type={"dimension"} subtypes={["All", "Overworld", "Nether", "End"]} postText={"Mobs"} updateFilter={updateFilter} />
                <ButtonGroup type={"sort"} subtypes={["Name", "Height", "Health"]} preText={"Sort by"} updateFilter={updateFilter} />
            </div>

            <div className="favorites">
                <h3>Mob List</h3>
                <div className="moblist">
                    {Object.keys(favorites).map((item, index) => (
                        <div className="moblist-items">{`${index + 1}. ${item}`}</div>
                    ))}
                </div>
                <div className="total-height">Total Mob Height: {totalHeight}</div>
                <div className="total-height">Total Mob Health: {totalHealth}</div>
            </div>

            <h2>Mobs</h2>
            <DisplayList filteredData={props.data.filter(filterFunction).sort(sortFunction)} updateFavorites={updateFavorites} updateTotals={updateTotals} />
        </div>
    )
}

export default FilteredList;
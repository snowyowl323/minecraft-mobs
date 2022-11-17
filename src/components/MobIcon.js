import { useState } from "react";

const MobIcon = (props) => {
    const [favorited, setFavorited] = useState(0);

    return (
        <div className="tile">
            <div className="tile-text">
                <div>
                    <h3 className="tile-header">{props.mob.name}</h3>
                    <p className="tile-paragraph">{props.mob.description}</p>
                    <p className="tile-paragraph tile-stats"><b>Type:</b> {props.mob.type}</p>
                    <p className="tile-paragraph tile-stats"><b>Height (In Blocks):</b> {props.mob.height}</p>
                    <p className="tile-paragraph tile-stats"><b>Health:</b> {props.mob.health}</p>
                    <p className="tile-paragraph tile-stats"><b>Dimension:</b> {props.mob.dimension}</p>
                </div>
                {(favorited === 1) ? (
                    <button className="tile-button inactive" onClick={() => {
                        props.updateFavorites(props.mob.name, "r");
                        props.updateTotals(-props.mob.height, -props.mob.health);
                        setFavorited(0);
                    }}>Remove from Mob List!</button>
                ) : (
                    <button className="tile-button active" onClick={() => {
                        props.updateFavorites(props.mob.name, "a");
                        props.updateTotals(props.mob.height, props.mob.health);
                        setFavorited(1);
                    }}>Add to Mob List!</button>
                )}

            </div>
            <div className="image-container">
                <img src={props.mob.image}></img>
            </div>
        </div>
    )
}

export default MobIcon;
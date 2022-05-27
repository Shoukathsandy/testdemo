import { useState } from "react";
import { Colorbox } from "./Colorbox";

export  function Addcolor() {
    const [color, setColor] = useState("blue");
    const [colorlist, setColorlist] = useState(["red", "blue", "green"]);
    const styles = {
        backgroundColor: color,
    };
    return (
        <div>
            <input type="text" value={color} style={styles}
                onChange={(e) => setColor(e.target.value)}></input>
            <button onClick={() => setColorlist([...colorlist, color])}>Add Color</button>
            {colorlist.map((clr) => (<Colorbox color={clr} />))}
        </div>
    );
}


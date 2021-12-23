import { useState } from "react";


export default function StoryPoints(props) {
    const [val, setVal] = useState(props.val);

    const handleChange = (e) => {
        //console.log(e.target.value);

        //const inputVal = parseInt(e.target.value);
        let inputVal = e.target.value;
        
        if(inputVal < 1) {
            inputVal = 1
        }
        else if(inputVal > 10) {
            inputVal = 10
        }
        
        setVal(inputVal);
    }

    return (
        <input type='number' value={val} 
            onChange={handleChange} 
            onFocus={e => { e.target.select()}} />
    )
}
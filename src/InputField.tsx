import { useState } from "react";

type Props = {
    callback: Function,
    title: string,
    defaultValue: number,
    step: number,
    max: number,
    min: number,
    valueMax?: number,
    valueMin?: number,
};

export default function InputField(props: Props): JSX.Element {
    const [value, setValue] = useState(props.defaultValue);

    function handleInput(e: any) {
        var value = Math.min(props.valueMax ?? props.max, e.target.value);
        value = Math.max(props.valueMin ?? props.min, value);
        setValue(value);
        props.callback(value);
    }

    return (
        <div className="InputField">
            <p>{props.title} </p>
            <input type="range" min={props.min} max={props.max} name='value_slider'
                value={value} step={props.step} onInput={handleInput} />
            <br></br>
            <input type="text"
                // pattern="[0-9\.\-]*"
                name='value_typing'
                value={value} onInput={handleInput} />
        </div>
    )
}
import React, { useState } from 'react';
import './Ui.styles.css';

function SwitchButton() {
    const [isChecked, setIsChecked] = useState(true);

    function handleChecked(){
        setIsChecked(() => 'checked')
    }

    return (
        <label className="switch" onClick={handleChecked}>
            <input type="checkbox" checked />
            <span className="slider round"></span>
        </label>
    )
}

export default SwitchButton;
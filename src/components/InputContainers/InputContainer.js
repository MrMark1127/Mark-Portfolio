import React from "react";

function InputContainer(props) {
    return (
        <div>
            <label for={props.labelName} className="block mb-2 -mt-1 text-sm font-medium text-white dark:text-white">{props.labelText}</label>
            <input type={props.labelType} id={props.labelName} className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-vintage block w-full p-2.5" placeholder={props.placeholderText} required />
        </div>
    )
}

export default InputContainer

/* 

props.for
props.name = ID
props.

*/
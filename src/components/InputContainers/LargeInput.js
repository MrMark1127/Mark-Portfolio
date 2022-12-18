import React from "react";

function LargeInputContainer(props) {
    return(
        <div className="mb-6">
            <label for={props.labelName} className="block mb-2 text-sm font-medium text-white dark:text-white">{props.labelText}</label>
            <input type={props.labelType} id={props.labelName} className="block w-full p-6 text-white placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-700 text-sm focus:ring-vintage" placeholder={props.placeholderText} />
        </div>
    )
}

export default LargeInputContainer
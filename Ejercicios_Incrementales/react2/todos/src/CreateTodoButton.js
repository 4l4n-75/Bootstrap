import React from "react";

function CreatetodoButton () {
    const onClickButton = () => {
        alert('Esto debera de abrir el modal')
    }

    return(
        <button
         className="CreatetodoButton"
         onClick={onClickButton }
        >
            +
        </button>
    )
}
export { CreatetodoButton }
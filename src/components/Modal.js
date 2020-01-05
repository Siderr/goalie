import React, { useState, useEffect } from 'react'

const Modal = (props) => {
    const [isActive,toggleModal] = useState(true)
    useEffect(()=> {        
        toggleModal(!isActive)
    },[props.toggle])
    return (
        <div className={`modal ${isActive ? "is-active": ""}`}>
            <div className="modal-background" onClick={() => toggleModal(!isActive)}></div>
            <div className="modal-content">
                {/* <!-- Any other Bulma elements you want --> */}
                {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => toggleModal(!isActive)}></button>
        </div>
    )
}

export default Modal

import React from "react";
import ReactDOM  from "react-dom";

import useCustomPopper from "./useCustomPopper";
// const Button = React.forwardRef((props, ref) => 
//   <button className="primary" ref={ref} {...props}>{props.children}</button>
// );
// const Test = React.forwardRef((props, ref) => <Button ref={ref} {...props}>{props.children}</Button>);
export default function Popover({referenceElement, placement="bottom-start", modifiers=[], clickToOpen=true, appendTo=document.querySelector('body'), children, test=null}) {
    const popover1 = useCustomPopper(placement, modifiers, clickToOpen, test);
    const ReferenceElement = referenceElement;
    return (
        <>
        <ReferenceElement ref={popover1.setReferenceElement}></ReferenceElement>
        {/* {referenceElement((props, ref)} */}
        {/* <button className="primary" ref={popover1.setReferenceElement} >Trigger button</button> */}
        {ReactDOM.createPortal(<React.Fragment>{popover1.visible && <div ref={popover1.setPopperElement}
                style={{...popover1.styles.popper, display: "none", zIndex: 100 }} {...popover1.attributes.popper}>
                <div className="popover-container" style={{width: "312px"}}>{children}
                </div></div>}</React.Fragment>, appendTo)} 
        </> 
    )
}
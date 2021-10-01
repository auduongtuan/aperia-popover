import "./animation.scss";
import React from "react";
import * as ReactDOM from "react-dom";
import Popover from "./Popover";
import PopoverAnimation from "./PopoverAnimation";
import useCustomPopper from "./useCustomPopper";
import { useEffect, useRef } from "react";
import Input from "./ds/Input";
const Button = React.forwardRef((props, ref) => (
  <button className="primary" ref={ref} {...props}>
    {props.children}
  </button>
));
export default function App() {
  const popover1 = useCustomPopper("bottom-start");
  const popover2 = useCustomPopper("right-start");
  const popover3 = useCustomPopper("bottom-start", [], false, "no-flip");
  const popoverRoot = useRef();
  const Lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu justo at lorem egestas malesuada. Etiam lacus ipsum, facilisis nec sodales id, tincidunt a lacus. Cras egestas leo dignissim diam efficitur, quis placerat urna egestas. Duis eu diam in enim tempus consectetur quis a sapien. Nam fringilla ullamcorper sem, eget finibus libero. Curabitur pretium enim felis, id mollis dui pulvinar accumsan. Quisque et urna lacinia, mollis nisi sed, malesuada nulla. Ut mi nisl, aliquam sit amet arcu at, scelerisque semper turpis. Curabitur pretium tincidunt placerat. Morbi et lectus rutrum, ultricies arcu a, tempus mauris. Ut ut interdum tortor. Cras condimentum metus eu libero faucibus, at laoreet enim pharetra.";
  //   useEffect(() => {
  //     if(popover1.popperElement) {
  //         console.log("Animate");
  //         PopoverAnimation(popover1.referenceElement, popover1.popperElement, popover1.visible);
  //     }
  //   }, [popover1.popperElement])
  //   useEffect(() => {
  //     PopoverAnimation(popover2.referenceElement, popover2.popperElement, popover2.visible);
  //   }, [popover2.popperElement, popover2.visible])
  return (
    <div className="App">
      <div id="Popover-Root" ref={popoverRoot}></div>
      <div style={{ marginTop: "300px" }}>
        {/* <button className="primary" ref={popover1.setReferenceElement}>
            Trigger Button
            </button>
            {popover1.visible && <div ref={popover1.setPopperElement}
                style={{...popover1.styles.popper, display: "none", zIndex: 100 }} {...popover1.attributes.popper}>
                <div className="popover" style={{width: "312px"}}>{Lorem}
                </div></div>}      */}
        <Popover
          referenceElement={React.forwardRef((props, ref) => (
            <Button ref={ref}>Bottom start</Button>
          ))}
          appendTo={popoverRoot.current}
        >
          {Lorem}
        </Popover>
      </div>

      <div style={{ marginTop: "48px" }}>
        <Popover
          placement="right-start"
          appendTo={popoverRoot.current}
          referenceElement={React.forwardRef((props, ref) => (
            <Button ref={ref}>Right start</Button>
          ))}
        >
          {Lorem}
        </Popover>
      </div>

      <div style={{ marginTop: "48px" }}>
        <Popover
          placement="top-start"
          appendTo={popoverRoot.current}
          referenceElement={React.forwardRef((props, ref) => (
            <Button ref={ref}>Top start</Button>
          ))}
        >
          {Lorem}
        </Popover>
      </div>

      <div style={{ marginTop: "48px" }}>
        <Input
          style={{ width: "273px" }}
          ref={popover3.setReferenceElement}
          onFocus={popover3.openPopover}
          onBlur={popover3.closePopover}
          placeholder="Test"
        />
        {popover3.visible && (
          <div
            ref={popover3.setPopperElement}
            style={{ ...popover3.styles.popper, display: "none", zIndex: 100 }}
            {...popover3.attributes.popper}
          >
            <div className="popover-container" style={{ width: "312px" }}>
              {Lorem}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: "48px" }}>
        <h4 style={{ marginBottom: "36px" }}>Other easing</h4>
        <Popover
          placement="top-start"
          test="animation-2"
          appendTo={popoverRoot.current}
          referenceElement={React.forwardRef((props, ref) => (
            <Button ref={ref}>Easing 2</Button>
          ))}
        >
          {Lorem}
        </Popover>
      </div>

      <div style={{ marginTop: "48px" }}>
        <Popover
          placement="top-start"
          test="animation-3"
          appendTo={popoverRoot.current}
          referenceElement={React.forwardRef((props, ref) => (
            <Button ref={ref}>Easing 3</Button>
          ))}
        >
          {Lorem}
        </Popover>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("my-app"));

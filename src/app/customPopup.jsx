import * as React from "react";
import ReactDOM  from "react-dom";

// import { Popup, PopupProps } from "@progress/kendo-react-popup";
import maxSize from "popper-max-size-modifier";
import { usePopper } from 'react-popper';
import { useState } from "react";
import { detectOverflow } from '@popperjs/core';

/* Option 2: Max Size */
const applyMaxSize = {
  name: "applyMaxSize",
  enabled: true,
  phase: "beforeWrite",
  requires: ["maxSize"],
  fn({ state }) {
    const { height } = state.modifiersData.maxSize;
    // console.log(state.modifiersData.preventOverflow);

    // console.log(state);
    state.styles.popper.maxHeight = `${height}px`;
    state.styles.popper.overflow = 'auto';
  }
};

export const CustomPopup = (props) => {
  const [popperElement, setPopperElement] = useState(null);
  console.log(props.strategy ? props.strategy : 'fixed');
  const { styles, attributes, update } = usePopper(
    props.anchor,
    popperElement,
    {
      placement: "bottom-start",
      strategy: props.strategy ? props.strategy : 'fixed',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 4]
          }
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8,
            mainAxis: true, // true by default
            altAxis: true,
            boundary: document.querySelector('body'),
            rootBoundary: 'viewport',
          }
        },
        {
          ...maxSize,
          options: {
            boundary: document.querySelector('body'),
            padding: 8
          }
        },
        applyMaxSize
        /* Option 1: Uncomment this */
        // {
        //   name: 'flip',
        //   options: {
        //     fallbackPlacements: ['auto', 'bottom']
        //   }
        // },
      ]
    }
  );
  console.log(props);
  return props.appendTo ? ReactDOM.createPortal(<React.Fragment>
    {props.show &&
    /* Option 1: Remove overflowY */
    <div ref={setPopperElement} style={{...styles.popper, zIndex: 10004, overflowY: 'scroll'}}
    >{props.children}</div>
    }
    </React.Fragment>, props.appendTo) : <React.Fragment>
  {props.show &&
  /* Option 1: Remove overflowY */
  <div ref={setPopperElement} style={{...styles.popper, zIndex: 10004, overflowY: 'scroll'}}
  >{props.children}</div>
  }
  </React.Fragment>;
};
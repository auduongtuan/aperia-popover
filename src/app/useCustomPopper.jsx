import React, { useState, useEffect } from "react";
import { usePopper } from "react-popper";
import { detectOverflow } from "@popperjs/core";
import maxSize from "popper-max-size-modifier";
import PopoverAnimation from "./PopoverAnimation";

const applyMaxSize = {
  name: "applyMaxSize",
  enabled: true,
  phase: "beforeWrite",
  requires: ["maxSize"],
  fn({ state }) {
    console.log(state);
    const { height } = state.modifiersData.maxSize;
    // console.log(state.modifiersData.preventOverflow);

    // console.log(state);
    state.elements.popper.querySelector(
      ".popover"
    ).style.maxHeight = `${height}px`;
    state.elements.popper.querySelector(".popover").style.overflow = "auto";
  }
};

function useCustomPopper(
  placement = "bottom-start",
  modifiers = [],
  clickToOpen = true,
  test = null
) {
  const [visible, setVisibility] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const closePopover = () => {
    console.log("Close");
    PopoverAnimation(
      referenceElement,
      popperElement,
      true,
      () => {
        setVisibility(false);
      },
      test
    );
  };

  const openPopover = () => {
    setVisibility(true);
  };

  const handleClickOutside = (event) => {
    if (
      popperElement &&
      referenceElement &&
      !popperElement.contains(event.target) &&
      (clickToOpen || !referenceElement.contains(event.target)) // <-- dont close when click trigger
    ) {
      event.stopPropagation();
      closePopover();
      // setVisibility(false);
    }
  };

  function handleClick(event) {
    setVisibility(!visible);
  }

  // }, [referenceElement, popperElement]);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: placement,
      strategy: "fixed",

      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 4]
          }
        },
        // old setting
        // {
        //   name: 'preventOverflow',
        //   options: {
        //     padding: 8,
        //     mainAxis: true, // true by default
        //     altAxis: true
        //   }
        // },
        {
          name: "flip",
          options: {
            // allowedAutoPlacements: ['auto'],
            fallbackPlacements: ["auto"],
            padding: 8,
            boundary: document.querySelector("body")
          }
        },
        // new setting
        {
          name: "preventOverflow",
          options: {
            padding: 8,
            mainAxis: true, // true by default
            altAxis: true,
            // tether: false,
            boundary: document.querySelector("body"),
            rootBoundary: "viewport"
          }
        },
        // {
        //   ...maxSize,
        //   options: {
        //     boundary: document.querySelector('body'),
        //     padding: 8
        //   }
        // },
        // applyMaxSize,
        // myModifier,
        ...modifiers
      ]
    }
  );

  useEffect(() => {
    if (referenceElement && clickToOpen) {
      referenceElement.addEventListener("click", handleClick, true);
      return () => {
        referenceElement.removeEventListener("click", handleClick, true);
      };
    }
  }, [referenceElement]);

  useEffect(() => {
    if (popperElement) {
      document.addEventListener("click", handleClickOutside, true);
      PopoverAnimation(referenceElement, popperElement, null, test);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [popperElement]);

  return {
    visible,
    referenceElement,
    popperElement,
    setVisibility,
    setReferenceElement,
    setPopperElement,
    styles,
    attributes,
    update,
    closePopover,
    openPopover
  };
}
export default useCustomPopper;

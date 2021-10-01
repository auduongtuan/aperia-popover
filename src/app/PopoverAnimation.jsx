
export default function PopoverAnimation(referenceElement, popoverElement, close = false, callback, test) {
    const containerClass = ".popover-container";
    if (referenceElement && popoverElement) {
        const popoverInner = popoverElement.querySelector(containerClass);
        if(!close) {
            popoverElement.style.display = "";
            popoverInner.style.visibility = "hidden";
        }
        

        setTimeout(() => {
            const refPos = referenceElement.getBoundingClientRect();
            const popPos = popoverInner.getBoundingClientRect();
            if (!close) popoverInner.classList.add("popover-animation-initial");
            console.log(refPos, popPos);

            // start animation
            if (!close && !popoverInner.classList.contains("popover-animation-start")) {
                if(test != 'no-origin') popoverInner.style.transformOrigin = `${refPos.x-popPos.x+refPos.width/2}px ${refPos.y-popPos.y+refPos.height/2}px`;
                popoverInner.style.visibility = "visible";
                setTimeout(() => {
                    if(test == 'animation-2') {
                        popoverInner.classList.add('popover-animation-start-2');
                    } else {
                        popoverInner.classList.add('popover-animation-start');
                    }
                    // popoverInner.classList.remove('popover-animation-initial');
                }, 0);
            }
            // end animation
            if (close && !popoverInner.classList.contains("popover-animation-end")) {
                if(test != 'no-origin') popoverInner.style.transformOrigin = `${refPos.x-popPos.x+refPos.width/2}px ${refPos.y-popPos.y+refPos.height/2}px`;
                setTimeout(() => {
                    if(test == 'animation-2') {
                        popoverInner.classList.add('popover-animation-end-2');
                    } else {
                        popoverInner.classList.add('popover-animation-end');
                    }
                }, 0);
                const handleAnimation = () => {
                    callback();
                    popoverInner.removeEventListener("transitionend", handleAnimation, true);
                }
                if(callback) popoverInner.addEventListener("transitionend", handleAnimation, true);

            }
        }, 0);
    }
}


import React, { useState, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import {
  Dialog,
  DialogActionsBar
} from '@progress/kendo-react-dialogs';
import useCustomPopper from './useCustomPopper';
import useWindowSize from './useWindowSize';
import { CustomPopup } from "./customPopup";

import './style.css';

const App = () => {
  const size = useWindowSize();
  const PopoverRoot = useRef();
  const popover1 = useCustomPopper('bottom-start');
  const popover2 = useCustomPopper('left-start');
  const [dialogVisible, setDialogVisible] = useState(false);
  return (
    <div id="wrapper">
      <div>
      <h2>In Dialog</h2>
      <button onClick={() => setDialogVisible(true)}>Show Dialog</button>
      <h2>In Popover</h2>
      <button ref={popover1.setReferenceElement}>Show Popover</button>

      {popover1.visible && ReactDOM.createPortal(
          <div
            className="popover popover-md"
            ref={popover1.setPopperElement}
            style={{ ...popover1.styles.popper }}
            {...popover1.attributes.popper}
          >
            <div id="example-wrapper">
              <div>
                <DateRangePicker
                  calendarSettings={{ views: size.width > 640 ? 2 : 1 }}
                  popup={CustomPopup}
                  popupSettings={{
                    // appendTo: PopoverRoot.current,
          
                  }}
                />
              </div>
              <p>
                (use Alt+<code>↓</code> to open the calendar, <code>←</code> and{' '}
                <code>→</code> to navigate, <code>↑</code> to increment and{' '}
                <code>↓</code> to decrement the value)
              </p>
            </div>
           
          </div>
        , PopoverRoot.current)}

      </div>
      <h2>In Body</h2>
      <DateRangePicker
                  calendarSettings={{ views: size.width > 640 ? 2 : 1 }}
                  popup={CustomPopup}
                  popupSettings={{
                    appendTo: PopoverRoot.current,
                    strategy: 'absolute',
                    // className: 'z-index-100004'
                  }}
                />
        <div style={{marginTop: '32px'}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus vehicula justo, sed tristique leo gravida vitae. Praesent at libero quis ante semper malesuada. Cras gravida euismod consectetur. Mauris nec sapien aliquet, fermentum ipsum sed, euismod ipsum. Nam posuere eget lectus ut mattis. Etiam auctor sem sapien, a vulputate libero luctus sed. Quisque pharetra odio in ligula placerat, vel laoreet neque rhoncus. Curabitur eget urna et nunc facilisis porta. Suspendisse id felis et dui ornare ultrices et eu augue. Quisque enim ex, vehicula et nunc vestibulum, dignissim bibendum justo.</p>
        <p>Sed ultricies nulla a rutrum luctus. In ac feugiat libero. Vivamus vitae erat sed purus condimentum lacinia. Sed vitae lacus eu ante pharetra ullamcorper id et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ex diam, tristique sit amet sapien sed, iaculis lacinia erat. Mauris feugiat sit amet justo ultrices pellentesque. Mauris eget turpis non enim eleifend dapibus eget vel massa. Donec tincidunt quam neque, nec consequat mi volutpat vitae. Vestibulum auctor blandit ligula vel egestas. Duis a tempus neque. Pellentesque diam elit, scelerisque non quam ac, dapibus malesuada orci. In aliquet rutrum neque.</p>
        <p>Sed ultricies nulla a rutrum luctus. In ac feugiat libero. Vivamus vitae erat sed purus condimentum lacinia. Sed vitae lacus eu ante pharetra ullamcorper id et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ex diam, tristique sit amet sapien sed, iaculis lacinia erat. Mauris feugiat sit amet justo ultrices pellentesque. Mauris eget turpis non enim eleifend dapibus eget vel massa. Donec tincidunt quam neque, nec consequat mi volutpat vitae. Vestibulum auctor blandit ligula vel egestas. Duis a tempus neque. Pellentesque diam elit, scelerisque non quam ac, dapibus malesuada orci. In aliquet rutrum neque.</p>
        <p>Sed ultricies nulla a rutrum luctus. In ac feugiat libero. Vivamus vitae erat sed purus condimentum lacinia. Sed vitae lacus eu ante pharetra ullamcorper id et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ex diam, tristique sit amet sapien sed, iaculis lacinia erat. Mauris feugiat sit amet justo ultrices pellentesque. Mauris eget turpis non enim eleifend dapibus eget vel massa. Donec tincidunt quam neque, nec consequat mi volutpat vitae. Vestibulum auctor blandit ligula vel egestas. Duis a tempus neque. Pellentesque diam elit, scelerisque non quam ac, dapibus malesuada orci. In aliquet rutrum neque.</p>
        </div>
      <div id="Popover-Root" ref={PopoverRoot}>

      </div>
      <div id="Dialog-Root">
      {dialogVisible && <Dialog
        title={'Modal Heading'}
        closeIcon={true}
        height={'auto'}
        width={'100%'}
        onClose={() => setDialogVisible(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button ref={popover1.setReferenceElement}>Popover 1</button>
          {/* <button ref={popover2.setReferenceElement}>Popover 2</button> */}
        </div>
        <DateRangePicker
                  calendarSettings={{ views: size.width > 640 ? 2 : 1 }}
                  popup={CustomPopup}
                  popupSettings={{
                    appendTo: PopoverRoot.current,
                    strategy: 'fixed',
                    // className: 'z-index-100004'
                  }}
                />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus vehicula justo, sed tristique leo gravida vitae. Praesent at libero quis ante semper malesuada. Cras gravida euismod consectetur. Mauris nec sapien aliquet, fermentum ipsum sed, euismod ipsum. Nam posuere eget lectus ut mattis. Etiam auctor sem sapien, a vulputate libero luctus sed. Quisque pharetra odio in ligula placerat, vel laoreet neque rhoncus. Curabitur eget urna et nunc facilisis porta. Suspendisse id felis et dui ornare ultrices et eu augue. Quisque enim ex, vehicula et nunc vestibulum, dignissim bibendum justo.</p>

        <p>Sed ultricies nulla a rutrum luctus. In ac feugiat libero. Vivamus vitae erat sed purus condimentum lacinia. Sed vitae lacus eu ante pharetra ullamcorper id et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ex diam, tristique sit amet sapien sed, iaculis lacinia erat. Mauris feugiat sit amet justo ultrices pellentesque. Mauris eget turpis non enim eleifend dapibus eget vel massa. Donec tincidunt quam neque, nec consequat mi volutpat vitae. Vestibulum auctor blandit ligula vel egestas. Duis a tempus neque. Pellentesque diam elit, scelerisque non quam ac, dapibus malesuada orci. In aliquet rutrum neque.</p>
        
        {popover1.visible && ReactDOM.createPortal(
          <div
            className="popover popover-md"
            ref={popover1.setPopperElement}
            style={{ ...popover1.styles.popper }}
            {...popover1.attributes.popper}
          >
            <div id="example-wrapper">
              <div>
                <DateRangePicker
                  calendarSettings={{ views: size.width > 640 ? 2 : 1 }}
                  popup={CustomPopup}
                  popupSettings={{
                    // appendTo: PopoverRoot.current,
          
                  }}
                />
              </div>
              <p>
                (use Alt+<code>↓</code> to open the calendar, <code>←</code> and{' '}
                <code>→</code> to navigate, <code>↑</code> to increment and{' '}
                <code>↓</code> to decrement the value)
              </p>
            </div>
           
          </div>
        , PopoverRoot.current)}
       
        <DialogActionsBar>
          <button className="k-button">
            No
          </button>
          <button className="k-button">
            Yes
          </button>
        </DialogActionsBar>
      </Dialog>
      }
      </div>
      {/* {popover2.visible && (
          <div
            className="popover popover-sm"
            ref={popover2.setPopperElement}
            style={{ ...popover2.styles.popper }}
            {...popover2.attributes.popper}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tristique urna eu lorem porttitor, placerat pretium
              nunc pretium. Quisque luctus dictum leo, non laoreet massa
              ullamcorper id. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Pellentesque a semper turpis. Suspendisse sed dui in velit
              pulvinar interdum.{' '}
            </p>
          </div>
        )} */}
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));

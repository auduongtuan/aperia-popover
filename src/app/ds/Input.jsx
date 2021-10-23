import React, {useState, useEffect} from "react";
import styled, {css} from 'styled-components';
const InputWrapper = styled.div`
    
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    position: relative;
    border-radius: 6px;
    margin-top: 16px;
    font-size: 14px;
    label {
        line-height: 20px;
        color: #9696a0;
        position: absolute;
        top: 0;
        left: 0;
        padding: 12px 16px 0 16px;
        transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1), padding-top 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: text;
        width: 100%;
        display: block;
        pointer-events: none;
    }
    input, select {
        background: #ffffff;
        color: transparent;
        transition: padding 0.2s ease-in, border 0.2s ease-in, box-shadow 0.2s ease-in;
        width: 100%;
        height: 44px;
        border: 0;
        border: 1px solid #b4b4bb;
        border-radius: 6px;
        font-size: 14px;
        line-height: 20px;
        padding: 20px 16px 4px;
        &:focus {
            border: 0;
            outline: none;
            border: 2px solid var(--B60);
            padding: 19px 15px 3px;
            box-shadow: var(--shadowB);
        }
        
    }
    select {
        background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbiAyPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJzZWxlY3QtLy1tZWRpdW0tbGFiZWwtLy1hdmF0YXItLy0xLi1ub3JtYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjUuMDAwMDAwLCAtNzYuMDAwMDAwKSIgZmlsbD0iIzU5NTk2QSI+CiAgICAgICAgICAgIDxnIGlkPSJJY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNjUuMDAwMDAwLCA3Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00LjQxMDc0NDM1LDYuOTEwNzQ0MzUgQzQuNzE5MDUzLDYuNjAyNDM1NyA1LjIwODgzODA3LDYuNTg2MjA4OTMgNS41MzYyNDk1LDYuODYyMDY0MDQgTDUuNTg5MjU1NjUsNi45MTA3NDQzNSBMMTAsMTEuMzIxMjUgTDE0LjQxMDc0NDMsNi45MTA3NDQzNSBDMTQuNzE5MDUzLDYuNjAyNDM1NyAxNS4yMDg4MzgxLDYuNTg2MjA4OTMgMTUuNTM2MjQ5NSw2Ljg2MjA2NDA0IEwxNS41ODkyNTU3LDYuOTEwNzQ0MzUgQzE1Ljg5NzU2NDMsNy4yMTkwNTMgMTUuOTEzNzkxMSw3LjcwODgzODA3IDE1LjYzNzkzNiw4LjAzNjI0OTUgTDE1LjU4OTI1NTcsOC4wODkyNTU2NSBMMTAuNTg5MjU1NywxMy4wODkyNTU3IEMxMC4yODA5NDcsMTMuMzk3NTY0MyA5Ljc5MTE2MTkzLDEzLjQxMzc5MTEgOS40NjM3NTA1LDEzLjEzNzkzNiBMOS40MTA3NDQzNSwxMy4wODkyNTU3IEw0LjQxMDc0NDM1LDguMDg5MjU1NjUgQzQuMDg1MzA3NDQsNy43NjM4MTg3NCA0LjA4NTMwNzQ0LDcuMjM2MTgxMjYgNC40MTA3NDQzNSw2LjkxMDc0NDM1IFoiIGlkPSJDb2xvciI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=") no-repeat calc(100% - 12px) center;
       
    }
    input[aria-invalid="true"], select[aria-invalid="true"] {
        border: 1px solid #CC1700;
        &:focus {
            padding: 19px 15px 3px;
            border: 2px solid #CC1700;
            box-shadow: 0 0 4px 0 rgba(238,91,66,0.80), 0 0 8px 0 rgba(238,91,66,0.50);
  
        }
    }
    ${props => (props.invalid && props.filled) && css`
        label {
            color: #CC1700;
        }
    `};
    ${props => (props.focused || props.filled) && css`
        label {
            font-size: 10px;
            line-height: 12px;
            text-transform: uppercase;
            font-weight: 600;
            color: #787885;
            padding-top: 6px;
        }
        input, select {
            color: var(--N100);
        }
    `};

`;
const Input = React.forwardRef((props, ref) => {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);

    const onChangeHandle = (e) => {
        e.target.value.length > 0 ? setFilled(true) : setFilled(false);
        if(props.onChange) props.onChange(e);
    };
  
    const onFocusHandle = (e) => {
        setFocused(true);
        if(props.onFocus) props.onFocus(e);
    }
    const onBlurHandle = (e) => {
        setFocused(false);
        if(props.onBlur) props.onBlur(e);
    } 
    // use for select and phone
    // useEffect(() => {
    //    if(props.render) setFilled(true);
    // }, [props.render]);
    useEffect(() => {
        if(!props.value || props.value === '') {
            setFilled(false);
        } else {
            setFilled(true);
        }
    }, [props.render, props.value]);
   
    const childProps = {
        id: "input-" + props.name,
        onChange: onChangeHandle,
        onFocus: onFocusHandle,
        onBlur: onBlurHandle,
        ref: ref,
        placeholder: '',
        render: undefined
    }
    return (
        <InputWrapper focused={focused} filled={filled} invalid={props.ariaInvalid}>
            <label htmlFor={props.name && "input-" + props.name}>{props.placeholder && props.placeholder}</label>
            {
                (props.render) ? props.render({...props, ...childProps}) : <input {...props} {...childProps} placeholder="" />
            }
            
        </InputWrapper>
        // <FloatingLabel id={props.name && props.name} {...props} ref={ref} />
    );
});
export default Input;
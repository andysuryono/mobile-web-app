import React, { useState } from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 1px;
  padding: 16px;
  background: white;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`;

const Button = styled.button`
    flex-grow: 1;
    font-size: 12px;
    background-color: ${props => props.active ? '#424749' : 'white'};
    color: ${props => props.active ? 'white' : ''};
    border: 2px solid #f1f1f2;
    padding: 14px 24px;
    opacity: ${props => props.active ? 1 : 0.5};
    cursor: pointer;
    float: left;
    font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  &:after {
    content: "";
    clear: both;
    display: table;
  }
  & ${Button}:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
  & ${Button}:first-child {
    border-radius: 8px 0 0 8px;
  }
  & ${Button}:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

function ButtonLunchDinner() {
    // state
    const [button, setButton] = useState({isLunch: false});

    // onclick handler
    const onButtonClick = (isLunch) => {
        setButton({isLunch: isLunch});
    };

    return (
        <Wrapper>
            <ButtonGroup>
                <Button active={button.isLunch} onClick={() => onButtonClick(true)}>Lunch</Button>
                <Button active={!button.isLunch} onClick={() => onButtonClick(false)}>Dinner</Button>
            </ButtonGroup>
        </Wrapper>
    );
}

export default ButtonLunchDinner;
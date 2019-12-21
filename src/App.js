import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ButtonLunchDinner from './components/ButtonLunchDinner';
import ListFoodCard from "./components/ListFoodCard";
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 70px;
`;

const WrapperHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 2;
`;

const WrapperContent = styled.div`
  padding-top: 200px;
`;

let prevScrollY;

function App() {
    // state
    const [app, setApp] = useState({showButton: true});

    useEffect(() => {
        prevScrollY = window.scrollY;
        window.addEventListener('scroll', e => handleNavigation(e));
    }, []);

    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (prevScrollY > window.scrollY) {
            setApp({showButton: true});
        } else if (prevScrollY < window.scrollY) {
            setApp({showButton: false});
        }
        prevScrollY = window.scrollY;
    };

    return (
        <Wrapper>
            <WrapperHeader>
                <Header/>
                {
                    app.showButton && (
                        <ButtonLunchDinner/>
                    )
                }
            </WrapperHeader>
            <WrapperContent>
                <ListFoodCard/>
            </WrapperContent>
        </Wrapper>
    );
}

export default App;

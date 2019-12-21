import React, {useState} from 'react';
import styled from "styled-components"
import { ArrowBack, KeyboardArrowDown } from '@material-ui/icons';
import Calendar from "./Calendar";
import ModalLocation from "./ModalLocation";

const HeaderWrapper = styled.div`
  padding: 16px 16px 4px 16px;
  background: white;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
`;

const HeaderLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 16px;
`;

const LocationWrapper = styled.div`
  margin-left: 16px;
  cursor: pointer;
`;

const LocationLabel = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  color: #6e7679;
`;

const Location = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

function Header() {
    // state
    const [modal, setModal] = useState(false);

    // onClose modal handler
    const onClose = () => {
        setModal(false);
    };

    // show modal handler
    const showModal = () => {
        setModal(true);
    };

    return (
        <div>
            <HeaderWrapper>
                <HeaderLocationWrapper>
                    <ArrowBack />
                    <LocationWrapper onClick={showModal}>
                        <LocationLabel>Alamat Pengantaran</LocationLabel>
                        <Location>
                            <span>Tokopedia Tower</span>
                            <KeyboardArrowDown style={{ color: '#f9334a' }}/>
                        </Location>
                    </LocationWrapper>
                </HeaderLocationWrapper>
                <Calendar/>
            </HeaderWrapper>
            {
                modal && (
                    <ModalLocation onClose={onClose}/>
                )
            }
        </div>
    );
}

export default Header;
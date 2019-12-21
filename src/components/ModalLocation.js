import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Close, Room } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ItemPlace from './ItemPlace';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: #e2e4e4ba;
  z-index: 3;
`;

const WrapperContent = styled.div`
  background: white;
  border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & span {
  padding: 16px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin: 24px;
  padding-bottom: 16px;
`;


function ModalLocation(props) {
    // state
    const [search, setSearch] = useState('');
    const handleChange = event => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    // onClose handler
    const onClose = () => {
        props.onClose();
    };

    return (
        <Wrapper>
            <WrapperContent>
                <HeaderWrapper>
                    <span onClick={onClose}><Close/></span>
                </HeaderWrapper>
                <Content>
                    <span>
                        <b>Cek makanan yang tersedia di lokasi kamu!</b>
                    </span>
                    <TextField value={search}
                               onChange={handleChange}
                               fullWidth size="small" variant="outlined" style={{margin: '16px 0'}}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <Room style={{ color: '#f9423a' }} />
                               </InputAdornment>
                           ),
                       }}
                    />
                    {
                        search.length > 3 && (
                            <div>
                                <div onClick={onClose}>
                                    <ItemPlace name={'Kulina'} address={'Jalan Tulodong Atas 28'}/>
                                </div>
                                <div onClick={onClose}>
                                    <ItemPlace name={'Pancoran Riverside Apartment'} address={'RT.6/RW.1, Pangadegan'}/>
                                </div>
                                <div onClick={onClose}>
                                    <ItemPlace name={'Jalan Tulodong Atas 28'} address={'Jalan Tulodong Atas 28, Senayan'}/>
                                </div>
                                <div onClick={onClose}>
                                    <ItemPlace name={'Block71 Jakarta'} address={'Ariobimo Sentral, South Jakarta'}/>
                                </div>
                            </div>
                        )
                    }
                </Content>
            </WrapperContent>
        </Wrapper>
    );
}

export default ModalLocation;
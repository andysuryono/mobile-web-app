import React from 'react';
import styled from "styled-components"
import { Room } from '@material-ui/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const IconPlace = styled.div`
  background: #e2e4e4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e7679;
`;

const PlaceName = styled.div`
  font-weight: bold;
`;

const PlaceAddress = styled.div`
  color: #6e7679;
  font-size: 12px;
`;

const PlaceDetail = styled.div`
  margin-left: 16px;
  flex-grow: 1;
`;

function ItemPlace(props) {
    const {name, address} = props;
    return (
        <div>
            <Wrapper>
                <IconPlace>
                    <Room/>
                </IconPlace>
                <PlaceDetail>
                    <PlaceName>{name}</PlaceName>
                    <PlaceAddress>{address}</PlaceAddress>
                    <hr/>
                </PlaceDetail>
            </Wrapper>
        </div>
    );
}

export default ItemPlace;
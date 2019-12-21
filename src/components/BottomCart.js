import React from 'react';
import styled from "styled-components"
import { ShoppingCartOutlined, KeyboardArrowRight } from '@material-ui/icons';
import { Currency } from '../utils/Currency';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  color: white;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;

const CartDetail = styled.div`
  margin: 8px 8px 16px 8px;
  padding: 16px;
  background: #a23530;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Detail = styled.div`
  font-weight: bold;
`;

const SubDetail = styled.div`
  font-size: 12px;
`;

function BottomCart(props) {
    let {data} = props;
    let totalPrice = 0;
    if (!Array.isArray(data)) {
        data = [];
    }
    data.forEach(i => {
        totalPrice += i.price;
    });

    return (
        <Wrapper>
            <CartDetail>
                <div>
                    <Detail>
                        {data.length} Items | {Currency(totalPrice)}
                    </Detail>
                    <SubDetail>Termasuk ongkos kirim</SubDetail>
                </div>
                <div>
                    <ShoppingCartOutlined/>
                    <KeyboardArrowRight/>
                </div>
            </CartDetail>
        </Wrapper>
    );
}

export default BottomCart;
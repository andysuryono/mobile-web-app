import React, { useState } from 'react';
import styled from "styled-components"
import FoodCard from "./FoodCard";
import BottomCart from "./BottomCart";

const Wrapper = styled.div`
margin-top: 1px;
  padding: 0 16px 16px 16px;
  background: white;
`;

const LabelDate = styled.div`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`;

const data = [
    {
        id: 1,
        title: 'Kamis, 13 Maret 2019',
        data: [
            {
                id: 1,
                image: 'https://kln.imgix.net/production/img/a6dc2e691d0f28752c1c9052de95e171_cover.jpg?w=360',
                rating: 3.5,
                title: 'Serba Salad',
                detail: 'by Kulina',
                price: 38500
            },
            {
                id: 2,
                image: 'https://kln.imgix.net/production/img/mini-basic-1.jpg?w=360',
                rating: 4.2,
                title: 'Mini Basic',
                detail: 'by Kulina',
                price: 20000
            },
            {
                id: 3,
                image: 'https://kln.imgix.net/production/img/onigiri-mixed-combo-2.jpg?w=360',
                rating: 4.0,
                title: 'Onigiri Mixed Combo',
                detail: 'by Kulina',
                price: 49000
            },
            {
                id: 4,
                image: 'https://kln.imgix.net/production/img/nakula.jpg?w=360',
                rating: 4.1,
                title: 'Nakula by Twinhouse',
                detail: 'by Twinhouse Nakula (Lunch)',
                price: 42500
            },
            {
                id: 5,
                image: 'https://kln.imgix.net/production/img/e33a506f0f314b3189196552f721c0bc_lunch.jpeg?w=360',
                rating: 4.1,
                title: 'Tastylicious',
                detail: 'by Tastylicious',
                price: 28000
            }
        ]
    },
    {
        id: 2,
        title: 'Jumat, 14 Maret 2019',
        data: [
            {
                id: 6,
                image: 'https://kln.imgix.net/production/img/szechuan-lunch-9.jpg?w=360',
                rating: 4.1,
                title: 'Szechuan Lunch',
                detail: 'by Kulina',
                price: 35000
            },
            {
                id: 7,
                image: 'https://kln.imgix.net/production/img/salad-kulina-x-sayurbox--2.jpg?w=360',
                rating: 4.2,
                title: 'Salad [Kulina x Sayurbox]',
                detail: 'by Kulina',
                price: 37500
            },
            {
                id: 8,
                image: 'https://kln.imgix.net/production/img/deluxepc.jpg-0e6805dc9ecfbfe6aa13b8c09c6c6451?w=360',
                rating: 4.0,
                title: 'Deluxe Lunch',
                detail: 'by Kulina',
                price: 35000
            },
            {
                id: 9,
                image: 'https://kln.imgix.net/production/img/twenty-eight.jpg?w=360',
                rating: 4.3,
                title: 'Twenty Eight',
                detail: 'by Twenty Eight',
                price: 60000
            },
            {
                id: 10,
                image: 'https://kln.imgix.net/production/img/fit-lo-kal-single-1.jpg?w=360',
                rating: 4.2,
                title: 'Fit Gourmet',
                detail: 'by Fit Gourmet (Sinabung)',
                price: 60000
            }
        ]
    }
];

function ListFoodCard() {
    // state
    const [cart, setCart] = useState([]);

    const handlerAddCart = (data) => {
        setCart([...cart, data])
    };

    return (
        <div>
            <Wrapper>
                {
                    data.map(dataList => {
                        const dataItem = dataList.data;
                        return (
                            <div key={dataList.id}>
                                <LabelDate>{dataList.title}</LabelDate>
                                {
                                    dataItem.map(dataCard => {
                                        return (
                                            <FoodCard data={dataCard} key={dataCard.id} onAdd={handlerAddCart}/>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Wrapper>
            {
                cart && cart.length > 0 && (
                    <BottomCart data={cart}/>
                )
            }
        </div>
    );
}

export default ListFoodCard;
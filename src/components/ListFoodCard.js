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
                image: 'image1.jpg',
                rating: 3.5,
                title: 'Serba Salad',
                detail: 'by Kulina',
                price: 38500
            },
            {
                id: 2,
                image: 'image2.jpg',
                rating: 4.1,
                title: 'Aneka Kecombrang',
                detail: 'by Pasar Minggu Catering',
                price: 18500
            },
            {
                id: 3,
                image: 'image3.jpg',
                rating: 4.4,
                title: 'Nasi Kucing',
                detail: 'by Kulina',
                price: 21000
            },
            {
                id: 4,
                image: 'image4.jpg',
                rating: 4.0,
                title: 'Healthy Lunch',
                detail: 'by Kulina',
                price: 50000
            },
            {
                id: 5,
                image: 'image5.jpg',
                rating: 4.2,
                title: 'Java Lunch',
                detail: 'by Kulina',
                price: 25000
            }
        ]
    },
    {
        id: 2,
        title: 'Jumat, 14 Maret 2019',
        data: [
            {
                id: 6,
                image: 'image6.jpg',
                rating: 4.1,
                title: 'Szechuan Lunch',
                detail: 'by Kulina',
                price: 35000
            },
            {
                id: 7,
                image: 'image7.jpg',
                rating: 4.2,
                title: 'Salad [Kulina x Sayurbox]',
                detail: 'by Kulina',
                price: 37500
            },
            {
                id: 8,
                image: 'image8.jpg',
                rating: 4.0,
                title: 'Deluxe Lunch',
                detail: 'by Kulina',
                price: 35000
            },
            {
                id: 9,
                image: 'image9.jpg',
                rating: 4.3,
                title: 'Twenty Eight',
                detail: 'by Twenty Eight',
                price: 60000
            },
            {
                id: 10,
                image: 'image10.jpg',
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
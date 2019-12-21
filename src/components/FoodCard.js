import React from 'react';
import styled from "styled-components"
import { Add } from '@material-ui/icons';
import StarRatings from 'react-star-ratings';
import { Currency } from '../utils/Currency';

const Card = styled.div`
  margin-bottom: 16px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  border-radius: 8px;
  background: white;
`;

const CardImage = styled.img`
  background-image: url("${props => props.src || ''}");
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  color: #424749;
  font-weight: bold;
`;

const Detail = styled.div`
  color: #6e7679;
  font-size: 12px;
`;

const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-weight: bold;
`;

const ButtonAdd = styled.button`
    font-size: 14px;
    background-color: #f9423a;
    border-radius: 4px;
    color: white;
    border: 0;
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const RatingBar = styled.div`
  font-weight: bold;
  color: #6e7679;
  display: flex;
  & span {
    margin-right: 8px;
  }
`;

function FoodCard(props) {
    const {data} = props;

    const onAddCartClick = () => {
        props.onAdd(data);
    };

    return (
        <Card>
            <CardImage src={`${window.location.origin}/assets/images/${data.image}`}/>
            <CardContent>
                <RatingBar>
                    <span>{data.rating}</span>
                    <StarRatings
                        rating={data.rating}
                        starDimension="16px"
                        starSpacing="1px"
                        starRatedColor="#f9423a"
                    />
                </RatingBar>
                <Title>{data.title}</Title>
                <Detail>{data.detail}</Detail>
                <CardAction>
                    <Price>{Currency(data.price)}</Price>
                    <ButtonAdd onClick={onAddCartClick}>ADD <Add/></ButtonAdd>
                </CardAction>
            </CardContent>
        </Card>
    );
}

export default FoodCard;
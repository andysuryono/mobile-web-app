import React, { useState } from 'react';
import styled from "styled-components"
import moment from "moment"
import localization from 'moment/locale/id';
moment.updateLocale('id', localization);

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CalendarWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Item = styled.div`
  margin: 4px;
  width: 48px;
  height: 48px;
  justify-content: center;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.active ? '#424749' : ''};
  color: ${props => props.active ? '#f1f1f2' : '#424749'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? '' : 'pointer'};
  & label {
    font-size: 8px;
    text-transform: uppercase;
  }
  & span {
    font-weight: bold;
  }
`;

function Calendar() {
    // state
    const [calendar, setCalender] = useState({activeDate: moment()});

    // init calender
    const twoWeeks = [];
    for (let i = 0 ; i < 14 ; i++) {
        twoWeeks.push(moment().add(i, 'days'));
    }

    // onclick handler
    const onDateClick = (date, isDisabled) => {
        if (!isDisabled) {
            setCalender({activeDate: date});
        }
    };

    return (
        <Wrapper>
            <CalendarWrapper>
                {
                    twoWeeks.map((date) => {
                        const disabled = date.format('d') === '0' || date.format('d') === '6';
                        const active = calendar.activeDate.isSame(date, 'day') && !disabled;
                        return (
                            <Item key={date.format()} disabled={disabled} active={active} onClick={() => {
                                onDateClick(date, disabled);
                            }}>
                                <label>{date.format('ddd')}</label>
                                <span>{date.format('D')}</span>
                            </Item>
                        )
                    })
                }
            </CalendarWrapper>
        </Wrapper>
    );
}

export default Calendar;
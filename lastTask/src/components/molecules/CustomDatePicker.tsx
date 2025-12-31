import { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { IoCalendarNumberOutline } from "react-icons/io5";

const DatePickerWrapper = styled.div`
    width: 90%;
    height: 70%;
    max-width: 400px;
    max-height: 400px;
    position: relative;
    background-color: #fff;

    .react-datepicker {
        all: unset;

        background-color: #fff;
        width: 90%;
        height: 70%;
        max-width: 400px;
        max-height: 400px;
        overflow: hidden;
    }
    .react-datepicker__header {
        background-color: #fff;
        border-bottom: none;
    }
    .react-datepicker__input-container {
        width: 100%;
    }
`;
export const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return(
        <DatePickerWrapper>
            <DatePicker
                selected = {startDate}
                onChange= {(data) => setStartDate(data)}
                dateFormat = "yyyy년 MM월 dd일"
                customInput={
                    <Input 
                        icon={<IoCalendarNumberOutline />}
                        style={{cursor : "pointer"}}
                    />
                }
            />
        </DatePickerWrapper>
    )
};

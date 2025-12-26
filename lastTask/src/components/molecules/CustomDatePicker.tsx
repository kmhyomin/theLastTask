import { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { IoCalendarNumberOutline } from "react-icons/io5";

const DatePickerWrapper = styled.div`
    width: 100%;
    position: relative;

    .react-datepicker {
        border: none;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
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

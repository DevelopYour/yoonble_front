import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { MonthButton } from "./styled-components/ButtonStyle";
import {
  CalendarContainer,
  CalendarHeader,
  Day,
  DaysGrid,
  Weekdays,
} from "./styled-components/CalendarStyle";

const CALENDAR_LENGTH = 35; // 7일 * 5주
const BLANK_DATE = 0;
const DAY_LIST = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const useCalendar = () => {
  const [currentMonth, setCurrentDate] = useState(dayjs());

  const minDate = dayjs();
  const maxDate = dayjs().add(2, "month");

  const previousMonth = () => {
    setCurrentDate(currentMonth.add(-1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentMonth.add(1, "month"));
  };

  const totalMonthDays = currentMonth.daysInMonth(); // 현재 월의 총 일수

  const prevDayList = Array.from({
    length: currentMonth.startOf("month").day(),
  }).map(() => BLANK_DATE); // 월의 첫 번째 날짜 요일 수

  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );

  const nextDayList = Array.from({
    length: CALENDAR_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => BLANK_DATE);

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  const weekCalendarList = useMemo(() => {
    return Array.from(
      { length: Math.ceil(currentCalendarList.length / 7) },
      (_, i) => currentCalendarList.slice(i * 7, i * 7 + 7)
    );
  }, [currentMonth]);

  return {
    weekCalendarList,
    currentMonth,
    previousMonth,
    nextMonth,
  };
};

export const Calendar = () => {
  const calendar = useCalendar();

  const showTimes = (month: number, day: number) => {
    alert(`${month}월 ${day}일`);
  };

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <MonthButton
            onClick={() => calendar.previousMonth()}
            disabled={calendar.currentMonth.isSame(dayjs(), "month")}
          >
            이전달
          </MonthButton>
          <h2>{calendar.currentMonth.format("YYYY년 MM월")}</h2>
          <MonthButton
            onClick={() => calendar.nextMonth()}
            disabled={calendar.currentMonth.isSame(
              dayjs().add(2, "month"),
              "month"
            )}
          >
            다음달
          </MonthButton>
        </CalendarHeader>

        <Weekdays>
          {DAY_LIST.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </Weekdays>

        <DaysGrid>
          {calendar.weekCalendarList.flat().map((day, index) => {
            const isAbled =
              day > 0 &&
              dayjs(calendar.currentMonth).date(day).isAfter(dayjs(), "day");
            return (
              <Day
                onClick={() => showTimes(calendar.currentMonth.month(), day)}
                key={index}
                isAbled={isAbled}
                isBlank={day === BLANK_DATE}
              >
                {day > 0 ? day : ""}
              </Day>
            );
          })}
        </DaysGrid>
      </CalendarContainer>
    </>
  );
};

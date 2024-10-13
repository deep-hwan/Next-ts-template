/** @jsxImportSource @emotion/react */
import { TxtSpan, V } from '@/_ui';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CalenderTitle from './CalenderTitle';
import { CalenderGrid, dd_theme, mm_theme, year_theme } from './theme';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  minDate?: Date | number | unknown;
  maxDate?: Date | number | unknown;
  date: Date | null;
  onClick?: (date: Date) => void;
  format?: 'yyyy-mm-dd' | 'yyyy-mm' | 'yyyy';
}

const CalenderComponent = ({ minDate, maxDate, date, onClick, format = 'yyyy-mm-dd' }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(() => date || new Date());

  useEffect(() => {
    if (date instanceof Date || date === null) setSelectedDate(date || new Date());
  }, [date]);

  const [currentMonth, setCurrentMonth] = useState(selectedDate?.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate?.getFullYear());
  const [isFormat, setIsFormat] = useState(format);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];
  for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
    calendarDays.push(i > firstDayOfMonth ? i - firstDayOfMonth : null);
  }

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear(prev => prev - 1);
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear(prev => prev + 1);
  };

  const prevYear = () => setCurrentYear(currentYear - 1);

  const nextYear = () => setCurrentYear(currentYear + 1);

  const isSelectedDate = (day: number | null) => {
    return (
      selectedDate &&
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    );
  };

  const [yearRange, setYearRange] = useState({
    startYear: currentYear - (currentYear % 10),
    endYear: currentYear - (currentYear % 10) + 9,
  });

  const nextDecade = () => setYearRange(prev => ({ startYear: prev.startYear + 10, endYear: prev.endYear + 10 }));

  const prevDecade = () => setYearRange(prev => ({ startYear: prev.startYear - 10, endYear: prev.endYear - 10 }));

  //
  // yyyy-mm-dd > 클릭핸들러
  const selectDay = (day: any) => {
    const newDate = new Date(currentYear, currentMonth, day);
    if ((minDate && newDate < minDate) || (maxDate && newDate > maxDate)) return;
    onClick && onClick(newDate);
  };

  //
  // yyyy > 클릭 핸들러
  const selectYear = (year: number) => {
    const newDate = new Date(year, 0, 1);
    if ((minDate && newDate < minDate) || (maxDate && newDate > maxDate)) return;
    setCurrentYear(year);

    format !== 'yyyy' && setIsFormat('yyyy-mm');
    format === 'yyyy' && onClick && onClick(newDate);
  };

  return (
    <V.Column align='center' gap={26}>
      {isFormat === 'yyyy' && (
        <>
          <CalenderTitle
            prev={prevDecade}
            next={nextDecade}
            title={`${yearRange.startYear}년 ~ ${yearRange.endYear}년`}
          />

          <CalenderGrid ea={3}>
            {Array.from({ length: 9 }, (_, i) => yearRange.startYear + i).map(year => {
              const date = new Date(year, 0, 1);
              const selectable = (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
              const isToday = todayYear === year;
              const isSelected = selectedDate.getFullYear() === year;

              return (
                <V.Column align='center' crossAlign='center' onClick={() => selectYear(year)}>
                  <div
                    key={year}
                    css={year_theme({
                      isToday,
                      selectable,
                      isSelected,
                    })}
                  >
                    {year}년
                  </div>
                </V.Column>
              );
            })}
          </CalenderGrid>
        </>
      )}

      {isFormat === 'yyyy-mm' && (
        <>
          <CalenderTitle
            prev={prevYear}
            next={nextYear}
            onClickTitle={() => setIsFormat('yyyy')}
            title={currentYear + '년'}
          />

          <CalenderGrid ea={4}>
            {Array.from({ length: 12 }, (_, i) => i).map(month => {
              const date = new Date(currentYear, month, 1);
              const selectable = (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
              const isToday = todayYear === currentYear && todayMonth === month;
              const isSelectedMonth = selectedDate.getMonth() === month && selectedDate.getFullYear() === currentYear;

              return (
                <V.Column
                  align='center'
                  crossAlign='center'
                  onClick={() => {
                    if (!selectable) return;

                    const newDate = new Date(currentYear, month, 1);
                    setCurrentMonth(month);
                    setCurrentYear(currentYear);
                    format === 'yyyy-mm-dd' && setIsFormat('yyyy-mm-dd');
                    format === 'yyyy-mm' && onClick && onClick(newDate);
                  }}
                >
                  <div key={month} css={mm_theme({ isToday, selectable, isSelectedMonth })}>
                    {month + 1}월
                  </div>
                </V.Column>
              );
            })}
          </CalenderGrid>
        </>
      )}

      {isFormat === 'yyyy-mm-dd' && (
        <>
          <CalenderTitle
            prev={prevMonth}
            next={nextMonth}
            onClickTitle={() => setIsFormat('yyyy-mm')}
            title={currentYear + '년' + ' ' + (currentMonth + 1) + '월'}
          />

          <CalenderGrid ea={7}>
            {daysOfWeek.map(day => (
              <TxtSpan
                color='#999'
                txtAlign='center'
                className='week'
                key={day}
                align='center'
                crossAlign='center'
                size={14}
              >
                {day}
              </TxtSpan>
            ))}

            {calendarDays.map((day: number | null, index) => {
              const date = new Date(currentYear, currentMonth, day ?? 0);
              const dayOfWeek = date.getDay();
              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              const selectable = day && (!minDate || date >= minDate) && (!maxDate || date <= maxDate);
              const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;

              return (
                <V.Column align='center' crossAlign='center' onClick={() => selectable && day && selectDay(day)}>
                  <div
                    key={index}
                    css={dd_theme({
                      isToday,
                      isWeekend,
                      selectable,
                      selectWrap: isSelectedDate(day) && selectable,
                    })}
                  >
                    {day}
                  </div>
                </V.Column>
              );
            })}
          </CalenderGrid>
        </>
      )}
    </V.Column>
  );
};

const Calender = dynamic(() => Promise.resolve(CalenderComponent), { ssr: false, loading: () => <p>...loading</p> });

export default Calender;

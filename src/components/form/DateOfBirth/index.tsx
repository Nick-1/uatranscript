import React, { useState, useEffect, ChangeEvent } from 'react';
import { MONTHS } from '../../../data/months.ts';

interface DateOfBirthPickerProps {
    onDateChange: (date: string) => void;
}

const DateOfBirthPicker: React.FC<DateOfBirthPickerProps> = ({ onDateChange }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [daysInMonth, setDaysInMonth] = useState(31);

    const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setDay(e.target.value);
    };

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value);
    };

    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    };

    useEffect(() => {
        if (month && year) {
            const newDaysInMonth = new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
            setDaysInMonth(newDaysInMonth);

            if (parseInt(day, 10) > newDaysInMonth) {
                setDay('');
            }
        }
    }, [month, year]);

    useEffect(() => {
        const validDay = parseInt(month, 10) <= 10 ? 0 + day : day;

        if (day && month && year) {
            onDateChange(`${validDay}.${month}.${year}`);
        }
    }, [day, month, year]);

    const generateOptions = (from: number, to: number): JSX.Element[] => {
        const options = [];
        for (let i = from; i <= to; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="date-of-birth-container">
            <select name="dayOfBirth" value={day} onChange={handleDayChange} required>
                <option value="" disabled>День</option>
                {generateOptions(1, daysInMonth)}
            </select>
            <select name="monthOfBirth" value={month} onChange={handleMonthChange} required>
                <option value="" disabled>Місяць</option>
                {MONTHS.map((month) => (
                    <option key={month.value} value={month.value}>
                        {month.label}
                    </option>
                ))}
            </select>
            <select name="yearOfBirth" value={year} onChange={handleYearChange} required>
                <option value="" disabled>Рік народження</option>
                {generateOptions(1900, currentYear)}
            </select>
        </div>
    );
};

export default DateOfBirthPicker;

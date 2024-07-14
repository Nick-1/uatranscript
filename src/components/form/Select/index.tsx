import React, { useState, ChangeEvent } from 'react';

interface SelectProps {
    name: string;
    optionList: { key: string | number, value: string, label?: string }[],
    onChange: (city: string) => void,
    placeholder: string,
    required: boolean,
}

const Select: React.FC<SelectProps> = (props) => {
    const { name, optionList, onChange, required, placeholder } = props;
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <select
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
        >
            <option value="" disabled>{placeholder}</option>
            {
                optionList.map((city) => (
                    <option key={city.key} value={city.value}>
                        {city.value}
                    </option>
                ))
            }
        </select>
    );
};

export default Select;

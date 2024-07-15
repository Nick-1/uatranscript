import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DateOfBirthPicker from '../form/DateOfBirth';
import Select from '../form/Select';
import {CITIES} from '../../data/cities.ts';
import {HOSPITALS} from '../../data/hospitals.ts';
import {DOCTORS} from '../../data/doctors.ts';
import '../form/index.css';

export interface FormReport {
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    city: string;
    hospital: string;
    doctor: string;
    photo: File | null;
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<FormReport>({
        firstName: '',
        lastName: '',
        middleName: '',
        dateOfBirth: '',
        city: '',
        hospital: '',
        doctor: '',
        photo: null,
    });
    const [fileName, setFileName] = useState('Файлів нема');
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, photo: e.target.files[0] });
            setFileName(e.target.files[0].name);
        }
    };

    const handleDateChange = (date: string) => {
        setFormData({ ...formData, dateOfBirth: date });
    };

    const handleCityChange = (city: string) => {
        setFormData({ ...formData, city });
    };

    const handleHospitalChange = (hospital: string) => {
        setFormData({ ...formData, hospital });
    };

    const handleDoctorChange = (doctor: string) => {
        setFormData({ ...formData, doctor });
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const type = location.pathname.slice(1);

        e.preventDefault();

        navigate('/print', { state: { formData, type } });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h3>Пацієнт</h3>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Ім'я"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Прізвище"
                        required
                    />
                    <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        placeholder="По батькові"
                        required
                    />
                    <DateOfBirthPicker onDateChange={handleDateChange}/>
                </div>

                <div className="form-group">
                    <h3>Місце обстеження</h3>
                    <Select
                        name="city"
                        placeholder="Місто"
                        optionList={CITIES}
                        onChange={handleCityChange}
                        required={true}
                    />

                    <Select
                        name="hospital"
                        placeholder="Лікарня"
                        optionList={HOSPITALS}
                        onChange={handleHospitalChange}
                        required={true}
                    />

                    <Select
                        name="doctor"
                        placeholder="Лікар"
                        optionList={DOCTORS}
                        onChange={handleDoctorChange}
                        required={true}
                    />
                </div>


                <div className="file-input-container">
                    <input
                        type="file"
                        name="photo"
                        className="file-input"
                        onChange={handleFileChange}
                        required
                    />
                    <label htmlFor="photo" className="file-input-label">Завантажити файл</label>
                    <span className="file-name">{fileName}</span>
                </div>

                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default UserForm;

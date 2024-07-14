import React from 'react';
import { useLocation } from 'react-router-dom';
import Report from '../components/Report';

interface LocationState {
    number: number;
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    city: string;
    hospital: string;
    doctor: string;
    photo: File;
}

const PrintPage: React.FC = () => {
    const location = useLocation();
    const state = location.state as LocationState;


    return (
        // @ts-ignore
        <Report state={state} />
    )
};

export default PrintPage;

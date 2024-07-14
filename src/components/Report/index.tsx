import './Report.css';
import {FormReport} from '../UserForm';
import UzdReport from './UzdReport.tsx';
import RentgenReport from './RentgenReport.tsx';
import KtReport from './KtReport.tsx';
import MrtReport from './MrtReport.tsx';

interface ReportProps {
    state: {
        formData: FormReport,
        type: string,
    }
}

const Report = (props: ReportProps) => {
    const { state } = props;
    const { formData, type, } = state;

    const manageReportByType = (type: string) => {
        switch (type) {
            case 'rentgen':
                return <RentgenReport />
            case 'kt':
                return <KtReport />
            case 'mrt':
                return <MrtReport />
            case 'uzd':
                return <UzdReport />
        }
    }

    const manageReportTitleByType = (type: string) => {
        switch (type) {
            case 'rentgen':
                return 'Результат рентгену'
            case 'kt':
                return 'Результат КТ'
            case 'mrt':
                return 'Результат МРТ'
            case 'uzd':
                return 'УЗД НИРОК'
        }
    }

    return (
        <div className="report-container">
            <div className="report-header">
                <h1>{ manageReportTitleByType(type) }</h1>

                <p><strong>Пацієнт:</strong> {formData.lastName} {formData.firstName} {formData.middleName}</p>
                <p><strong>Дата народження:</strong> {formData.dateOfBirth}</p>
                <p><strong>Місто:</strong> {formData.city}</p>
                <p><strong>Лікарня:</strong> {formData.hospital}</p>
                <p><strong>Лікар:</strong> {formData.doctor}</p>

                <p><strong>Дата:</strong> 26.01.2024 р.</p>
            </div>

            { manageReportByType(type) }

            <button className="no-print" onClick={() => window.print()}>Друк</button>
        </div>
    );
};

export default Report;

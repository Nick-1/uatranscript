import { FC } from 'react';
import UserForm from '../components/UserForm';

const XrayPage: FC = () => {
    return (
        <>
            <h2>Рентген</h2>
            <p>Для отримання результату обробки знімку, будь ласка, заповніть форму.</p>
            <p>
                Сайт працює в демонстраційному режимі та роспізнає тільки визначений знімок.
                Вам буде потрібно його зберігти та скористатися їм при заповненні форми нижче.
            </p>
            <p><a href="/images/report/rentgen.png" download="rentgen">Зберігти знімок</a></p>
            <UserForm />
        </>
    )
}

export default XrayPage;

import { FC } from 'react';
import UserForm from '../components/UserForm';

const UzdPage: FC = () => {
    return (
        <>
            <h2>УЗД</h2>
            <p>Для отримання результату обробки знімку, будь ласка, заповніть форму.</p>
            <p>Сайт працює в демонстраційному режимі та роспізнає тільки визначений знімок. Вам буде потрібно його
                зберігти та скористатися їм при заповненні форми нижче.</p>
            <p><a href="/images/report/uzd.png" download="uzd">Зберігти знімок</a></p>
            <UserForm/>
        </>
    )
}

export default UzdPage;

import { FC } from 'react';
import UserForm from '../components/UserForm';

const KtPage: FC = () => {
    return (
        <>

            <section className="form-info">
                <h2>КТ</h2>
                <p>Для отримання результату обробки знімку, будь ласка, заповніть форму.</p>
                <p>Сайт працює в демонстраційному режимі та роспізнає тільки визначений знімок. Вам буде потрібно його
                    зберігти та скористатися їм при заповненні форми нижче.</p>
                <p><a href="/images/report/kt.jpg" download="kt">Зберігти знімок</a></p>
            </section>
            <UserForm/>
        </>
    )
}

export default KtPage;

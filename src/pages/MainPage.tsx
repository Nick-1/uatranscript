import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const MainPage: React.FC = () => {
    return (
        <div className='main-page'>
            <VideoPlayer src="info/main-video.mp4" />
            <p>
                У зв'язку з тим, що в Україні все частіше зʼявляється потреба в пришвидшеному розшифруванні Комп'ютерної
                томографії, Магнітно-резонансної томографії, ультразвукової діагностики та рентгенівських знімків, для
                встановлення діагнозу, даний проєкт буде надавати можливість створення продукту, заснованого на штучному
                інтелекті.
            </p>
            <p>
               Штучний інтелект буде навчений нашою командою програмістів на основі висновків українських лікарів,
               отриманих з попередньо перерахованих обстежень.
            </p>
            <p>
                Штучний інтелект буде навчений нашою командою програмістів на основі висновків українських лікарів,
                отриманих з попередньо перерахованих обстежень.
            </p>
            <p>
                Попередньо цей результат буде на 99% точним, що дозволить визначити пріоритетність прийому пацієнтів за
                важкістю їх діагнозу та стану. Це особливо важливо в умовах нестачі часу та достатньої кількості лікарів,
                коли кожна хвилина може бути вирішальною.
            </p>
            <p>Особливо, в сьогодення, коли військові потребують термінових обстежень і висновків.</p>
            <p>Даний проект має змогу врятувати тисячі життів!</p>
        </div>
    );
};

export default MainPage;

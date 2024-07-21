const KtReport = () => {
    return (
        <>
            <div className="section">
                <p>
                    На серії виконаних томограм легкі поля без інфільтративних тінеутворень. В обох легень відмічаються
                    смуги грубого фіброзу.
                </p>
                <p><strong>Корені легень</strong> малоструктурні.</p>
                <p><strong>Судинний малюнок</strong> посилений з обох сторін.</p>
                <p><strong>У правій</strong> плевральній порожнині визначається близько 600 мл вільної рідини.</p>
                <p><strong>У лівій</strong> плевральній порожнині рідини немає.</p>
                <p><strong>Внутрішньогрудні та підпахвинні лімфовузли</strong> не збільшені.</p>
                <p><strong>Трахея, головні, часткові та сегментарні бронхи</strong> вільно прохідні.</p>
                <p><strong>У лівій молочній залозі</strong>, субареолярно, визначається додаткове гіперденсне утворення
                    неправильної
                    форми, з нечіткими контурами, розмірами 55 x 22 x 33 мм.</p>
                <p><strong>Деструкції кісткової тканини та порушення цілісності кісток на рівні огляду</strong> не
                    відмічаються.</p>
            </div>

            <div className="section">
                <p>
                    <strong>ВИСНОВОК</strong>: КТ ознаки tr в лівій молочній залозі. Правосторонній гідроторакс.
                </p>
            </div>


            <img src="/images/report/kt-1.png" className="report-image" alt="Фото"/>
            <img src="/images/report/kt-2.png" className="report-image" alt="Фото"/>
            <img src="/images/report/kt-3.png" className="report-image" alt="Фото"/>
            <img src="/images/report/kt-4.png" className="report-image" alt="Фото"/>
            {/*{formData.photo && <img src={URL.createObjectURL(formData.photo)}  className="report-image" alt="Фото"/>}*/}
        </>
    );
};

export default KtReport;

const UzdReport = () => {
    return (
        <>
            <div className="section">
                <h2>ПРАВА НИРКА</h2>
                <p><strong>Розташування:</strong> типове <strong>дихальні рухи:</strong> збережені</p>
                <p><strong>Розміри:</strong> 11,6 х 5,6 см</p>
                <p><strong>Контури:</strong> чіткі, нерівні</p>
                <p><strong>Паренхима:</strong> 1,7-1,8 см</p>
                <p><strong>Ехогенність:</strong> середня</p>
                <p><strong>Нирковий синус:</strong> не поширений, однорідний</p>
                <p><strong>Лоханка:</strong> не розширена</p>
                <p><strong>Вогнищеві утворення:</strong> не локуються</p>
            </div>

            <div className="section">
                <h2>Наднирник</h2>
                <p>справа - 3,0 х 2,7 см, збільшений, контури нерівні, ехогенність знижена</p>
            </div>

            <div className="section">
                <h2>ЛІВА НИРКА</h2>
                <p><strong>Розташування:</strong> типове <strong>дихальні рухи:</strong> збережені</p>
                <p><strong>Розміри:</strong> 11,4 х 5,4 см</p>
                <p><strong>Контури:</strong> чіткі, нерівні</p>
                <p><strong>Паренхима:</strong> 1,7-1,6 см</p>
                <p><strong>Ехогенність:</strong> середня</p>
                <p><strong>Нирковий синус:</strong> не поширений, однорідний</p>
                <p><strong>Лоханка:</strong> не розширена</p>
                <p><strong>Вогнищеві утворення:</strong> не локуються</p>
            </div>

            <div className="section">
                <p>
                    <strong>ПРОСТАТА:</strong> 4,0 х 3,0 х 3,3 см, об’єм 20,9 см. куб., неоднорідна за рахунок
                    гіпоехогенного вогнища 2,1х2,2 см та гіперехогенного включення в лівій долі (кальцинат)
                </p>
            </div>

            <div className="section">
                <p>
                    <strong>Сечовий міхур</strong> об'єм 370 мл, залишкова сеча 141 мл
                    <br/> Стінка 0,3 см.
                    <br/>Контури чіткий, рівний.
                    <br/>Вміст анехогенний
                </p>
            </div>

            <div className="section">
                <p>
                    <strong>ВИСНОВОК</strong>: Дифузні зміни нирок, збільшення правого наднирника (аденома?)
                    Невелике збільшення простати з вогнищевим зміненням – ДГПЗ (susp.
                    аденоматозний вузол). Залишкова сеча 141 мл.
                </p>
            </div>


            <img src="/images/report/uzd.png"  className="report-image" alt="Фото"/>
            {/*{formData.photo && <img src={URL.createObjectURL(formData.photo)}  className="report-image" alt="Фото"/>}*/}
        </>
    );
};

export default UzdReport;

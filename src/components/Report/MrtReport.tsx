const MrtReport = () => {
    return (
        <>
            <div className="section">
                <p>
                    На серії МР-томограм, виконаних у сагітальній, аксіальній площинах у режимах <strong>Т1, Т2 </strong>
                    зважених зображень поперековий лордоз збережений. Вісь хребта у фронтальній площині дещо викривлена
                    вправо.
                </p>
                <p>
                    Міжхребцеві диски нерівномірно знижені, сигнал від дисків <strong>L2-L3, L5-S1</strong> на Т2-зважених зображеннях
                    знижений.
                    Замикальні пластинки тіл хребців збережені з наявністю задньобокових краєвих кісткових розростань і
                    хрящових
                    вузлів Шморля, в тому числі крупного хрящового вузла Шморля з набряком на краніальній замикальній
                    пластинці <strong>L3</strong>.
                </p>
                <p>
                    У міжхребцевих суглобах видно артрозні зміни зі звуженням суглобових щілин і крайовими кістковими
                    розростаннями.
                    Форма, розміри хребців не змінена. Співвідношення між хребцями не порушене. На рівні <strong>L2-S1</strong>
                    визначається локальне
                    звуження передньої поздовжньої зв'язки.
                </p>
            </div>

            <div className="section">
                <p>
                    <strong>L2-L3, L4-L5:</strong> Циркулярні протрузії міжхребцевих дисків назад до 2-2,5 мм, з невеликим здавленням
                    дурального мішка. Персдньозадній діаметр хребетного каналу не звужений, міжхребцеві отвори не
                    звужені.
                </p>
            </div>

            <div className="section">
                <p>
                    <strong>L5-S1:</strong> Грижа міжхребцевого диска назад і вліво до 5 мм, з частковим здавленням дурального мішка.
                    Передньозадній діаметр хребетного каналу не звужений, міжхребцеві отвори звужені до 4 мм.
                </p>
            </div>

            <div className="section">
                <p>
                    Протрузій, гриж інших міжхребцевих дисків на досліджуваному рівні не виявлено. Видимі відділи
                    спинного мозку, кінський хвіст без патологічних змін сигналу.
                </p>
            </div>

            <div className="section">
                <p>
                    <strong>ВИСНОВОК</strong>: МР-ознаки гриж міжхребцевого диска <strong>L5-S1</strong>, протрузій
                    міжхребцевих дисків <strong>L2-L3, L4-L5</strong>. Остеохондроз, спондилоартроз, спондильоз, сколіоз (1ст) поперекового відділу хребта.
                </p>
            </div>


            <img src="/images/report/mrt.png" className="report-image" alt="Фото"/>
            {/*{formData.photo && <img src={URL.createObjectURL(formData.photo)}  className="report-image" alt="Фото"/>}*/}
        </>
    );
};

export default MrtReport;

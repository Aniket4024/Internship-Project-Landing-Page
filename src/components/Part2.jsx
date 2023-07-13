import style from "../CSS/Part2.module.scss"

const Part2 = ()=>{
    return <div id={style.Part2}>
        <div>
            <h1>Lorem, ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </div>
        <div>
            <div className={style.card}>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittisnunc. In hac habitasse.                    
                </p>               
            </div>
            <div className={style.card}>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittisnunc. In hac habitasse.
                </p>
            </div>
            <div className={style.card}>
                <h4>Lorem ipsum dolor sit.</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittisnunc. In hac habitasse.
                </p>
            </div>
        </div>
    </div>
}

export  default Part2
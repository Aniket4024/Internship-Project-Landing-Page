import style from "../CSS/Part3.module.scss"
import Part3BG from "../Media/Part3.png"
import Card1 from "../Media/Part3-card1.png"
import Card2 from "../Media/Part3-card2.png"
import Card3 from "../Media/Part3-card3.png"

const Part3 = ()=>{
    return <div 
        id={style.Part3}
        style={{backgroundImage:`url(${Part3BG})`}}
    >
        <div>
            <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>   
        </div>
        <div>
            <div className={style.P3Card}>
                <img src={Card1} alt="Card1" />
                <h4>
                    Lorem ipsum dolor sit .
                </h4>            
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
                </p>
            </div>
            <div className={style.P3Card}>
                <img src={Card2} alt="Card2" />
                <h4>
                    Lorem ipsum dolor sit .
                </h4>                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
                </p>
            </div>
            <div className={style.P3Card}>
                <img src={Card3} alt="Card3" />
                <h4>
                    Lorem ipsum dolor sit .
                </h4>                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
                </p>
            </div>
        </div>
    </div>
}

export default Part3
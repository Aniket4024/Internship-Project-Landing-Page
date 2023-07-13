import style from "../CSS/Card.module.scss"
import star from "../Media/rating.png"

const Card = ({name,position,photo})=>{ 

    return <div id={style.Card}>
        <div>
            <img src={photo} alt={name} />
            <div>
                <div>
                    <h5>{name}</h5>
                    <div id={style.rating}>
                        {[1,2,3,4,5].map((e,i)=>
                            <img src={star} alt="ratings"/>
                        )}
                    </div>
                </div>
                <p>{position}</p>
            </div>
        </div>
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo est. Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
            </p>
        </div>
    </div>

}
export default Card;
import style from "../CSS/Part4.module.scss"
import Card1 from "../Media/Part4-Card1.png"
import Card2 from "../Media/Part4-Card2.png"
import Card3 from "../Media/Part4-Card3.png"
import Card4 from "../Media/Part4-Card4.png"

const Part4 = ()=>{
    return <div id={style.Part4}>
        <div>
            <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
        <div>
            <div className={style.P4Card}>
                <div>
                    <div>
                        <img src={Card1} alt="Card1" />
                        <h4>
                            Lorem ipsum dolor sit.
                        </h4>
                    </div>
                    <p>
                        adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
                    </p>
                    <button>
                        Check Pricing
                    </button>
                </div>
            </div>
            <div className={style.P4Card}>
                <div>
                    <div>
                        <img src={Card2} alt="Card2" />
                        <h4>
                            Lorem ipsum dolor sit.
                        </h4>
                    </div>
                    <p>
                        adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
                    </p>
                    <button>
                        Check Pricing
                    </button>
                </div>
            </div>
            <div className={style.P4Card}>
                <div>
                    <div>
                        <img src={Card3} alt="Card3" />
                        <h4>
                            Lorem ipsum dolor sit.
                        </h4>
                    </div>
                    <p>
                        adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
                    </p>
                    <button>
                        Check Pricing
                    </button>
                </div>
            </div>
            <div className={style.P4Card}>
                <div>
                    <div>
                        <img src={Card4} alt="Card4" />
                        <h4>
                            Lorem ipsum dolor sit.
                        </h4>
                    </div>
                    <p>
                        adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
                    </p>
                    <button>
                        Check Pricing
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Part4
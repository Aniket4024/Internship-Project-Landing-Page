import style from "../CSS/Part5.module.scss"
import Star from "../Media/Star.png"
import Carousel from "./Carousel"
import Jhon from "../Media/Jhon.png"
import Amanda from "../Media/Amanda.png"
import Sam from "../Media/Sam.png"




const Part5 = ()=>{

    const array = [
        {
            name:"Jhon Doe",
            position:"CEO",
            photo:Jhon
        },
        {
            name:"Amanda Green",
            position:"Operations Manager",
            photo:Amanda
        },
        {
            name:"Sam Cooper",
            position:"Customer Service Manager",
            photo:Sam
        },
        {
            name:"Jhon Doe",
            position:"CEO",
            photo:Jhon
        },
        {
            name:"Amanda Green",
            position:"Operations Manager",
            photo:Amanda
        },
        {
            name:"Sam Cooper",
            position:"Customer Service Manager",
            photo:Sam
        }
    ]


    return <div id={style.Part5}>
        <div>
            <h1>Lorem ipsum dolor sit.</h1>
        </div>
        <div>
            <div>
                <div id={style.header}>
                    <img src={Star} alt="" />
                    <h3>
                        Lorem ipsum dolor sit.
                    </h3>
                </div>
                <div id={style.Carousel}>
                    <Carousel array={array}/>
                </div>
            </div>
        </div>
    </div>
}

export default Part5


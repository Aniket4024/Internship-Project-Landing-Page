import style from "../CSS/Part6.module.scss"
import logo1 from "../Media/P6Cart1.png"
import logo2 from "../Media/P6Cart2.png"
import logo3 from "../Media/P6Cart3.png"

const Part6 = ()=>{
    return <div id={style.Part6}>
        <div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </div>
        <div>
            <div>
                <img src={logo1} alt="" />
                <h3>Forms On Fire</h3>
            </div>
            <div>
                <img src={logo2} alt="" />
                <h3>ElectroNeek Studio IDE</h3>
            </div>
            <div>
                <img src={logo3} alt="" style={{width:"60px"}}/>
                <h3>Jot form</h3>
            </div>
        </div>
    </div>
}

export default Part6
import style from "../CSS/Navbar.module.scss"
import logo from "../Media/Logo.png"
import PopupButton from "./Popup";

const Navbar = ()=>{
    return <div id={style.Navbar}>
        <div id={style.Logo}>
            <img src={logo} alt="Logo" />
        </div>
        <div id={style.Menu}>
            <h4>Nav1</h4>
            <h4>Nav2</h4>
            <select name="" id="">
                <option value="">Nav3</option>
                <option value="">Nav3</option>
                <option value="">Nav3</option>
            </select>
            <select name="" id="">
                <option value="">Nav4</option>
                <option value="">Nav4</option>
                <option value="">Nav4</option>
            </select>
            <h4>Nav5</h4>
            <h4>Nav6</h4>
            <h4>Nav7</h4>
            <h4>Nav8</h4>
        </div>
        <div id={style.popupMenu}>
            <PopupButton/>
        </div>
    </div>
}

export default Navbar;
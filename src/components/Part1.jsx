import style from "../CSS/Part1.module.scss"
import Banner from "../Media/Banner.png"

const Part1 = ()=>{
    return <div id={style.Part1}
        style={{backgroundImage:`url(${Banner})`}}
    >
        <div id={style.left}>
            <div>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque distinctio corrupti et obcaecati, nostrum atque adipisci facilis neque iure culpa repellat, hic sapiente minus minima porro, debitis autem qui omnis.
                </p>
                <button>
                    Check Pricing
                </button>
            </div>
        </div>
    </div>
}

export default Part1
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import style1 from "../CSS/Carousel.module.scss"
// import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Card from './Card';



export default function Carousel({array}) {

  // document.getElementById("splide__arrow").style.margin = "50px 10px 20px 30px";

  const [ok,setOk] = useState(3)

 useEffect(()=>{
    if(window.innerWidth<=1140){
      setOk(2)
    }
    if(window.innerWidth<=700){
      setOk(1)
    }
 },[window.innerWidth])

  return <div>
    <Splide 
      aria-label="My Favorite Images" 
      options={ {
        rewind: true,
        gap   : '40px',
        type   : 'loop',
        perPage: ok,
        perMove: ok,
        pagination:false ,
        autoplay:true,
        speed:500,
        arrows:false
        // height:name==="UpcomingCategory" ? "300px" : "auto",
      } }
    >
      {array.map((e,i)=>{return <SplideSlide id={style1.SplideSlide} key={i+1} style={{cursor:"pointer",height:"270px",width:"30%",borderRadius:"25px"}}>
            <Card key={i+1} {...e}/>
      </SplideSlide>}
      )}
      <section class="splide" aria-label="Custom Arrows Example">
  <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">
			Prev
		</button>
		<button class="splide__arrow splide__arrow--next">
			Next
		</button>
  </div>

  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">Slide 01</li>
			<li class="splide__slide">Slide 02</li>
			<li class="splide__slide">Slide 03</li>
		</ul>
  </div>
</section>
    </Splide>
  </div>
}
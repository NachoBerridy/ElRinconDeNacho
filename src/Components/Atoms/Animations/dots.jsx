import React, { useEffect, useRef } from "react";
import { useState } from "react";
import $ from 'jquery';


const Dots = () => {



  function getWindowsDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
  }

  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions());

  const amount = Math.floor((windowDimensions.width / 27) * (windowDimensions.height / 27));
  console.log(amount)

    var $mouseX;
    var $mouseY;
    var $scrolled;
    
    useEffect(() => {

      $('.boxes').on(' mousemove mouseenter',function(e){
          "use strict";
          e= e||window.event;
          $mouseX = e.pageX||e.clientX+document.body.scrollLeft;
          console.log($mouseX)
          $mouseY = e.pageY||e.clientY+document.body.scrollTop;
          $scrolled = $(window).scrollTop();
          
          var $elemLeft = $mouseX - $(this).offset().left;
          var $elemTop = ($mouseY - $scrolled) - ( $(this).offset().top - $scrolled);
        $(this).children('.circle').css({'transition':'all 0.0s ease-in-out','opacity':1,'width':'10%','height':'10%','left':$elemLeft , 'top':$elemTop})
        
      });
      $('.boxes').on('mouseout mouseleave',function(){
        $(this).children('.circle').css({'transition':'all 0.5s ease-in-out','left':'43%', 'top':'43%','width':'8%','height':'8%','opacity':0.8})
      });
    }, [])

    
    return (
        <div className="absolute top-0 left-0 flex flex-wrap w-screen h-screen mt-3 ml-2 ">
            {[...Array(amount)].map((e, i) => (
                <div key={i} className={`boxes w-dotsBox h-dotsBox relative float-left`}>
                    <div className={`circle absolute w-dots h-dots bg-sky-500 rounded-full `} >
                    </div>
                </div>
            ))}
        </div>
    );


}

export default Dots;
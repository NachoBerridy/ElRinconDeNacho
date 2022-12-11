import React, { useEffect, useRef } from "react";
import $ from 'jquery';


const Dots = () => {


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
            <div className="boxes w-dotsBox h-dotsBox relative float-left">
                <div className="circle absolute w-dots h-dots top-1/2 left-1/2 bg-sky-500 rounded-full" >
                </div>
            </div>
    );

}

export default Dots;
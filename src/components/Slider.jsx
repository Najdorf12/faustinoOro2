import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import img1 from "../assets/fausti2.jpg";
import img2 from "../assets/fausti3.jpg";
import img3 from "../assets/fausti4.jpg";
import img4 from "../assets/fausti5.jpg";
import img5 from "../assets/img6.jpg";
import img6 from "../assets/img17.jpg";
import img7 from "../assets/img18.jpg";
import img8 from "../assets/img3.jpg";

const Slider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-160vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 3,
          pin: true,
        },
      }
    )
    
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden bg-zinc-900 -mt-36">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[150vw] relative flex"
        >
          <div className="scroll-section  h-screen w-[300vw] flex gap-14 justify-end items-center lg:pl-32 text-xl">
            <h3 className="w-[500px] "> <img src={img5} className=" rounded-md" alt="" /> </h3>
            <h3 className="w-[500px]"> <img src={img6}  className=" rounded-md"alt="" /> </h3>
            <h3 className="w-[500px]"> <img src={img7}  className=" rounded-md"alt="" /> </h3>
            <h3 className="w-[500px] "><img src={img8}  className=" rounded-md"alt="" /> </h3>
            <h3 className="w-[500px]"> <img src={img1}  className=" rounded-md"alt="" /></h3>
            <h3 className="w-[500px]"> <img src={img3}  className=" rounded-md"alt="" /> </h3>
          </div>
          {/* <div className="scroll-section bg-amber-700 h-screen w-full flex gap-5 justify-center items-center">
            <h3 className ="w-60 h-80 bg-violet-900" >Section 2</h3>
            <h3 className ="w-60 h-80 bg-violet-900">Section 1</h3>
            <h3 className ="w-60 h-80 bg-violet-900">Section 1</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Slider;
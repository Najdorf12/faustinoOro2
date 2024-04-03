 import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/fausti2.jpg";
import img2 from "../assets/fausti3.jpg";
import img3 from "../assets/fausti4.jpg";


gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const images = [img1, img2, img3];
  const container = useRef(null);
  const lettersRef = useRef([]);
  const imagesRef = useRef([]);
  const title1 = useRef(null);
  const word = "with gsap";
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(title1.current, { y: -50 }, 0)
        .to(imagesRef.current[1], { y: -150 }, 0)
        .to(imagesRef.current[2], { y: -255 }, 0);
      lettersRef.current.forEach((letter, i) => {
        tl.to(
          letter,
          {
            top: Math.floor(Math.random() * -75) - 25,
          },
          0
        );
      });
    });
    return () => context.revert();
  }, []);

  return (
    <div ref={container} className="container bg-zinc-800 w-full">
      <div className="wrapper w-full">
        <h1 ref={title1}>Parallax</h1>
        <h1>Scroll</h1>
        <div className="words">
          <p>
            {word.split("").map((letter, i) => {
              return (
                <span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
                  {letter}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className="images w-full">
        {images.map((image, i) => {
          return (
            <div
              key={`i_${i}`}
              ref={(el) => (imagesRef.current[i] = el)}
              className="imageContainer"
            >
              <img src={image} placeholder="blur" alt="image" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Parallax;
 
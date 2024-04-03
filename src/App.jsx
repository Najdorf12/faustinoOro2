import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import imgChess from "/ajedrez.png";
/* import Parallax from "./components/Parallax"; */
import Slider from "./components/Slider";
import Experience from "./components/Experience";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <AnimatePresence>
        <main className="overflow-x-hidden w-full relative flex flex-col bg-slate-200">
          <img
            className="absolute top-0 left-0 m-8 max-w-16"
            src={imgChess}
            alt=""
          />
          <div className="h-screen overflow-x-hidden w-screen fixed top-0 right-0 left-0 z-10 lg:block">
            <Canvas>
              <Experience />
            </Canvas>
          </div>

          <section className="w-full h-screen bg-zinc-900 flex justify-start items-center">
            <article className="flex flex-col gap-1 justify-center items-center z-10 ml-28 mt-24">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                }}
                className="text-7xl font-bold  font-title bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-slate-800 "
              >
                FAUSTINO ORO
              </motion.h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                  },
                }}
                className="text-3xl mt-3 font-semibold  font-title bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-amber-600 "
              >
                FIDE MASTER
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
                  },
                }}
                className="text-base font-medium text-gray-500 font-title max-w-lg mt-4 text-center"
              >
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                aut aperiam dolores hic, eius nam ex blanditiis quaerat <br />{" "}
                quis molestiae iusto{" "}
              </motion.p>
              <button className="mt-8 bg-gradient-to-tl from-amber-600 text-gray-300 px-2 py-1 flex justify-center items-center w-44 font-semibold text-lg rounded-md hover:scale-105 duration-200">
                Contact
              </button>
            </article>
          </section>
          <section className="second-section w-1/2 gap-6 h-screen bg-zinc-900 flex flex-col justify-center items-center  text-center self-end ">
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }}
              className="z-10 text-5xl font-title font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-amber-600"
            >
              LOREM IMPSUM
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }}
              className="z-10 text-base font-medium text-gray-500 font-raleway text-center px-20"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              aut aperiam dolores hic, eius nam ex blanditiis quaerat quis
              molestiae iusto suscipit incidunt qui doloremque facilis illum
              earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Saepe, aut aperiam dolores hic, eius nam ex blanditiis quaerat
              quis molestiae iusto suscipit incidunt qui doloremque facilis
              illum earum.
            </motion.p>
          </section>
          <section className="third-section  w-1/2 h-screen bg-zinc-900 flex flex-col gap-6 justify-center items-center">
            <motion.h2
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }}
              className="text-5xl font-title font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-amber-600"
            >
              LOREM IMPSUM
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }}
              className="text-base font-medium text-gray-500 font-raleway text-center mt-4 px-20"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              aut aperiam dolores hic, eius nam ex blanditiis quaerat quis
              molestiae iusto suscipit incidunt qui doloremque facilis illum
              earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Saepe, aut aperiam dolores hic, eius nam ex blanditiis quaerat
              quis molestiae iusto suscipit incidunt qui doloremque facilis
              illum earum.
            </motion.p>
          </section>

          <section className="four-section py-8 w-full h-screen bg-zinc-900 flex flex-col justify-start items-center">
            <motion.h3 
            initial={{
              opacity: 0,
              x:-20
            }}
            whileInView={{
              x:0,
              opacity: 1,
              transition: {
                duration: 1.1,
                delay: 1,
              },
            }}
            className="font-cursive text-gray-300 text-5xl font-normal mt-44 max-w-4xl text-center">
              {" "}
              “El Ajedrez es algo más que un juego, es una diversión
              intelectual, que tiene algo de arte y mucho de ciencia, es además
              un medio de acercamiento social e intelectual.”
            </motion.h3>
            <motion.p  initial={{
              opacity: 0,
              x:20
            }}
            whileInView={{
              opacity: 1,
              x:0,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            className="font-cursive text-gray-400 text-3xl font-normal mt-8 text-center">
              José Raúl Capablanca
            </motion.p>
          </section>

          <Slider></Slider>
          <section className="contact-section w-full h-screen bg-zinc-900 flex justify-center items-start">
            <article className="w-1/2 flex flex-col gap-5 justify-center items-center text-center">
              <motion.h5
               initial={{
                opacity: 0,
                x:20
              }}
              whileInView={{
                opacity: 1,
                x:0,
                transition: {
                  duration: 1,
                  delay: .7,
                },
              }}
              className="font-title font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-amber-600">
                Lorem Impsum
              </motion.h5>
              <motion.p 
               initial={{
                opacity: 0,
                x:-20
              }}
              whileInView={{
                opacity: 1,
                x:0,
                transition: {
                  duration: 1,
                  delay: .7,
                },
              }}
              className="font-raleway font-base text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo accusamus veritatis blanditiis hic excepturi saepe
                dolor quis sed odio? Autem corrupti repellendus iure quo aliquid
                incidunt facere <br /> molestiae esse blanditiis.Hic excepturi
                saepe dolor quis sed <br /> odio? Autem corrupti repellendus
                iure.
              </motion.p>
            </article>
          </section>
        </main>
      </AnimatePresence>
    </ReactLenis>
  );
};

export default App;

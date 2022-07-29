import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef, useLayoutEffect } from "react";

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,

          markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[100vh] h-[auto] w-[100vw] mx-auto overflow-hidden flex justify-start items-start relative"
    >
      <h1
        data-scroll
        data-scroll-speed="-1"
        className="font-5xl font-[100] text-white absolute top-[1rem] left-[5%] z-[10]"
      >
        New Arrivals
      </h1>
      <div className="w-[35%] bg-black text-white min-h-[100vh] z-[5] fixed left-0 flex justify-center items-center">
        <p className="text-lg font-[300] w-[80%] mx-auto">
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </div>
      <div
        ref={horizontalRef}
        className="absolute left-[35%] pl-[30%] min-h-[100vh] bg-slate-500 flex justify-start items-center"
      >
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
        <h1 className="w-[30rem] mx-[2rem] text-6xl">img</h1>
      </div>
    </section>
  );
};

export default Shop;

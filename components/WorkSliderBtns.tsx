import React from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type Props = { containerStyles: string; btnStyles: string; iconStyles: string };

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }: Props) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeft className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRight className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;

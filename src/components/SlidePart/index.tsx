import React, { useRef } from 'react';
import styles from "./SlidePart.module.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from "../../../public/mock/data";
import SubLine from "@/components/SubLine";
import classNames from "classnames";
import { Typography } from "@/components/UI/Typography";
import { LeftButton, RightButton } from "@/components/SlidePart/ArrowButtons";

const SlidePart = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
    };

    return (
        <div className={styles.SlidePart}>
            <Slider {...settings} ref={sliderRef}>
                {data.map((item: any) => (
                    <div key={item.id} className={styles.slider}>
                        <img
                            src={item.image}
                            className={styles.image}
                            alt="not found"
                        />
                        <div className={classNames("container", styles.sliderContainer)}>
                            <SubLine
                                colorLine={"white"}
                                colorTitle={"secondary"}
                                title={"PORTFOLIOS BUILT WITH PRIDE"}
                            />
                            <div className={styles.slide}>
                                <Typography
                                    className={styles.title}
                                    element={"h2"}
                                    size={83}
                                    weight={"normal"}
                                    color={"secondary"}
                                    letterSpacing={2}
                                    lineHeight={90}
                                >
                                    {item.title}
                                </Typography>

                                <div className={styles.control}>
                                    <div className={styles.info}>
                                        <Typography
                                            element={"sub"}
                                            size={44}
                                            weight={"normal"}
                                            color={"secondary"}
                                        >
                                            {item.subtitle}
                                        </Typography>
                                        <Typography
                                            element={"p"}
                                            size={83}
                                            weight={"normal"}
                                            color={"secondary"}
                                        >
                                            {item.description}
                                        </Typography>
                                    </div>

                                    <div className={styles.arrows}>
                                        <LeftButton onClick={() => sliderRef.current?.slickPrev()} />
                                        <RightButton onClick={() => sliderRef.current?.slickNext()} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlidePart;

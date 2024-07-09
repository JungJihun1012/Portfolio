import 'swiper/swiper.min.css';
import { ReactElement, useEffect, useRef, useState } from "react";
import SwiperCore, { Navigation, Scrollbar, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

interface MainSliderProps {
    cardList: ReactElement[];
    slidesPerView: 3 | 4;
}

export const Drag = (props: MainSliderProps) => {
    const { slidesPerView, cardList } = props;

    SwiperCore.use([Navigation, Scrollbar]);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperSetting, setSwiperSetting] = useState<SwiperOptions | null>(null);

    useEffect(() => {
        if (!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 24,
                navigation: {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                },
                scrollbar: { draggable: true, el: null },
                slidesPerView,
                on: {
                    init: (swiper: SwiperCore) => {
                        if (typeof swiper.params.navigation !== 'boolean') {
                            if (swiper.params.navigation) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }
                        swiper.navigation.update();
                    }
                },
            });
        }
    }, [swiperSetting, slidesPerView]);

    return (
        <StyledRoot>
            <div className="navigation-buttons">
                <button ref={prevRef}>Prev</button>
                <button ref={nextRef}>Next</button>
            </div>
            {swiperSetting && (
                <Swiper {...swiperSetting}>
                    {cardList.map((card, index) => (
                        <SwiperSlide key={index}>
                            {card}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </StyledRoot>
    );
}

export const StyledRoot = styled.div`
    .navigation-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
`;

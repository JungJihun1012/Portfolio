import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { ReactElement, useEffect, useRef, useState } from "react";
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

interface MainSliderProps {
    cardList: ReactElement[];
    slidesPerView: 3 | 4;
}

export const Drag = (props: MainSliderProps) => {
    const { slidesPerView, cardList } = props;

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperSetting, setSwiperSetting] = useState<any | null>(null);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            const settings: any = {
                modules: [Navigation, Scrollbar],
                spaceBetween: 24,
                navigation: {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                },
                scrollbar: { draggable: true, el: '.swiper-scrollbar' },
                slidesPerView,
                on: {
                    init: (swiper: any) => {
                        if (typeof swiper.params.navigation !== 'boolean') {
                            if (swiper.params.navigation) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }
                        swiper.navigation.update();
                    }
                },
            };
            setSwiperSetting(settings);
        }
    }, [slidesPerView]);

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
                    <div className="swiper-scrollbar"></div>
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
    .swiper-scrollbar {
        height: 5px;
        background: #000;
    }
`;

import 'swiper/swiper.min.css';

import { ReactElement, useEffect, useRef, useState } from "react"
import SwiperCore, {Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';

interface MainSliderProps {
    cardList: ReactElement[];
    slidesPerView: 3 | 4;
}

export const Drag = (props: MainSliderProps) => {
    const { slidesPerView } = props;

    SwiperCore.use([Navigation, Scrollbar]);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperSetting, setSwiperSetting] = useState<InstanceType<typeof Swiper> | null>(null);

    useEffect(() => {
        if(!swiperSetting) {
            setSwiperSetting({
                spaceBetween: 24,
                navigation: {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                },
                scrollbar: {draggable: true, el: null},
                slidesPerView,
                onBeforeInit: (swiper: SwiperCore) => {
                    if(typeof swiper.params.navigation !== 'boolean') {
                        if(swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }
                    swiper.navigation.update();
                },
            });
        }
    }, [swiperSetting, slidesPerView]);
    return(
        <StyledRoot>
        </StyledRoot>
    )
}

export const StyledRoot = styled.div``;

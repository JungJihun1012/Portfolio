import 'swiper/swiper-bundle.css';

import { ReactElement, useEffect, useRef, useState } from "react"
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

interface MainSliderProps {
    cardList: ReactElement[];
    slidesPerView: 3 | 4;
}

export const Drag = (props: MainSliderProps) => {
    const {cardList, slidesPerView } = props;

    SwiperCore.use([Navigation, Scrollbar]);

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);    

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
    }, [swiperSetting, setSwiperSetting]);
    return(
        <>

        </>
    )
}
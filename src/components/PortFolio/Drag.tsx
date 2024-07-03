import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";

export const Drag = () => {
    return(
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                scrollbar={{draggable: true}}
                navigation
                pagination={{clickable: true}}
                breakpoints={{
                    768: {
                        slidesPerView: 7,
                    },
                }}
            >
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 2</SwiperSlide>
                <SwiperSlide>slide 3</SwiperSlide>
                <SwiperSlide>slide 4</SwiperSlide>
            </Swiper>
    )
}

export const Container = styled.div``;
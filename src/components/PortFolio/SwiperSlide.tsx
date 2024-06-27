import styled from "styled-components"
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperSlie = () => {
    const items = [
        { src: "Images/PortFolio.png" },
        { src: "Images/Skill.png" },
        { src: "Images/Archiving.png" },
    ];
    return (
        <>
            <Swiper
            effect={"fade"}
            pagination = {{
                clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            loop={true}
            >
                {items.map((item, idx) => {
                    return(
                        <SwiperSlide key={idx}>
                            <img src={item.src}/>
                        </SwiperSlide>
                    );
                })};
            </Swiper>
        </>
    )
}

export const Container = styled.div``;
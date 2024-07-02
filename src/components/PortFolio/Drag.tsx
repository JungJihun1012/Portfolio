import React, { useCallback, useState } from "react";
import styled from "styled-components"

export const Drag = () => {

    const [dragging, setDragging] = useState(false);


    const handleBeforChange = useCallback(() => {
        setDragging(true);
    }, [setDragging]);

    const handleAfterChange = useCallback(() => {
        setDragging(false);
    }, [setDragging]);

    const onClickCard = useCallback((path) => (e: React.SyntheticEvent) => {
        if(dragging) {
            e.stopPropagation();
            return;
        }
        if(path.includes('https')) {
            window.open(path, "_blank");
        } else {
            router.push(path);
        }
    }, [dragging]);

    const setting = {
        draggable: true,
        beforeChange: handleBeforChange,
        afterChange: handleAfterChange,
    };

    return(
        <Container>
            <CustomCarousel {...setting}>

            </CustomCarousel>
        </Container>
    )
}

export const Container = styled.div``;
export const CustomCarousel = styled.div``;
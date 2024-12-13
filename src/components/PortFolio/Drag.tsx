import React, { useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import styled from "styled-components"
import DragImage from "./DragImage";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : - 1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Drag: React.FC = () => {

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, DragImage.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <Container
                    key={page}
                    src={DragImage[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opcaity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={({ offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < - swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <Next onClick={() => paginate(1)}>
                {"."}
            </Next>
            <Prev onClick={() => paginate(-1)}>
                {"."}
            </Prev>
        </>
    )
}

const Container = styled(motion.img)`
    position: absolute;
    max-width: 100vw;
    width: 800px;
`;
const Next = styled.div`
    top: calc(50% -20px);
    position: absolute;
    background: #333;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 30px;
    z-index: 2;
    right: 10px;
`;
const Prev = styled.div`
    top: calc(50% -20px);
    position: absolute;
    background: #333;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    z-index: 2;
    left: 10px;
    transform: scale(-1);
`;
export default Drag;

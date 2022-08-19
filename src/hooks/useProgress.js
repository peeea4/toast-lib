import { useEffect, useState } from "react";

export const useProgress = ({ duration, handleRemove, id }) => {
    const [isStart, setIsStart] = useState(true);
    const [xTouch, setXTouch] = useState(0);

    const handleTouchStart = (e) => {
        setXTouch(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const xMove = e.touches[0].clientX;
        const diffX = xTouch - xMove;
        if (diffX < 0) {
            setIsStart(false);
            setTimeout(() => {
                handleRemove(id);
            }, 150);
        }
    };

    useEffect(() => {
        if (!duration) return;
        const timerId = setTimeout(() => {
            setIsStart(false);
            setTimeout(() => {
                handleRemove(id);
            }, 150);
        }, duration);
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return { isStart, handleTouchMove, handleTouchStart };
};

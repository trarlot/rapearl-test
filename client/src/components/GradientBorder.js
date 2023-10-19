import { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/Nav.css';

export const findDegree = (element, event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + (rect.right - rect.left) / 2); //x position within the element
    const y = event.clientY - (rect.top + (rect.bottom - rect.top) / 2); //y position within the element

    const degreeRadian = Math.atan2(y, x);
    const degree = (degreeRadian * 180) / Math.PI + 180;
    return degree;
};

const useGradient = () => {
    const ref = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (window.innerWidth >= 1024 && ref.current) {
                const degree = findDegree(ref.current, event);

                ref.current.style.setProperty(
                    '--gradient-rotation',
                    `${degree + 82}deg`,
                );
            }
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });
    return ref;
};

export const GradientBorder = ({ children }) => {
    const ref = useGradient();

    return (
        <div ref={ref} className="gradient">
            {children}
        </div>
    );
};

import { useState, useEffect } from "react";

export default function useResponsive3D() {
    const [is3DContentReady, setIs3DContentReady] = useState(false);
    const [show3DModel, setShow3DModel] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShow3DModel(window.innerWidth > 1024);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { show3DModel, is3DContentReady, setIs3DContentReady };
}
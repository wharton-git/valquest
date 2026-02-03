import { useState, useEffect } from "react"
import AskingCat from "./../assets/catAsking.png";

type DeviceType = 'OnMobile' | 'OnPC';

interface QuestionProps {
    setShow: (value: String) => void;
}

const Question = ({ setShow }: QuestionProps) => {

    const [limiteMinX, setLimitMinX] = useState<number>(-500);
    const [limiteMaxX, setLimitMaxX] = useState<number>(100);
    const [limiteMinY, setLimitMinY] = useState<number>(-300);
    const [limiteMaxY, setLimitMaxY] = useState<number>(100);
    const [scaleVal, setScaleVal] = useState<number>(1);
    const [deviceType, setDeviceType] = useState<DeviceType>('OnPC');

    useEffect(() => {
        setDeviceType(checkDeviceSimple());
    }, []);

    function randCoo(arr: number[]): number {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const checkDeviceSimple = (): DeviceType => {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

        const isMobile = window.innerWidth <= 768 && mobileRegex.test(userAgent);

        return isMobile ? 'OnMobile' : 'OnPC';
    };

    const event = (): void => {
        const run = document.getElementById("runningNo");
        const yesBtn = document.getElementById("yesBtn");

        if (run && yesBtn) {
            const randValue: number[] = [-50, 50, -100, 100, -200, 200];

            console.log("X :" + randCoo(randValue));
            console.log("Y :" + randCoo(randValue));

            const prevX = Number(run.getAttribute("data-x") || 0);
            const prevY = Number(run.getAttribute("data-y") || 0);
            let nextX = prevX + randCoo(randValue);
            let nextY = prevY + randCoo(randValue);

            if (deviceType == "OnMobile") {
                setLimitMinX(-200);
                setLimitMaxX(100);
                setLimitMinY(-300);
                setLimitMaxY(200);
            }

            function gererDepassement(valeur: number, min: number, max: number): number {
                if (valeur > max || valeur < min) {
                    return Math.random() < 0.5 ? 100 : -100;
                }
                return valeur;
            }

            nextX = gererDepassement(nextX, limiteMinX, limiteMaxX);
            nextY = gererDepassement(nextY, limiteMinY, limiteMaxY);

            nextX = Math.max(limiteMinX, Math.min(limiteMaxX, nextX));
            nextY = Math.max(limiteMinY, Math.min(limiteMaxY, nextY));

            run.setAttribute("data-x", String(nextX));
            run.setAttribute("data-y", String(nextY));
            run.style.transform = `translate(${nextX}px, ${nextY}px)`;
            run.style.transition = "transform 150ms ease";

            const scaleValue = scaleVal + 0.5;
            setScaleVal(scaleValue);

            if (scaleVal >= 4) {
                setScaleVal(4);
            }

            yesBtn.style.scale = `${scaleValue}`;

            console.log("Next Coo : " + "X: " + nextX + " | " + "Y: " + nextY);
        }
    };

    return (
        <>
            <div>
                <img src={AskingCat} alt="Asking Cat" className="w-1/3 mx-auto" />
            </div>
            <div className="flex flex-col items-center gap-5">
                <div>
                    Will you be my valentine ?
                </div>
                <div className="flex justify-evenly w-full">
                    <div className="p-3">
                        <button className="btn" id="yesBtn" onClick={() => setShow("result")}>Yes</button>
                    </div>
                    <div onMouseEnter={event} onClick={event} className="p-3" id="runningNo">
                        <button className="btn" onClick={event}>No</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question

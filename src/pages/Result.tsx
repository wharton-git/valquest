// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RotateCcw } from "lucide-react";
import cp1 from "./../img/cp1.jpeg";

interface ResultProps {
    setShow: (value: String) => void;
}

const Result = ({ setShow }: ResultProps) => {
    return (
        <div className="relative">
            {/* <DotLottieReact src="/catFeeling.lottie" autoplay loop /> */}
            <img src={cp1} alt="cp1" className="w-1/2 mx-auto rounded-2xl"/>
            <div className="w-full flex justify-center absolute top-3/4">
                <p>Youuupiiii</p>
            </div>
            <div className="absolute -bottom-5 right-5 cursor-pointer" onClick={() => setShow("question")}>
                <RotateCcw size={20}/>
            </div>
        </div>
    )
}

export default Result
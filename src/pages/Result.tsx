// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { RotateCcw } from "lucide-react";
import cp1 from "./../img/cp1.jpeg";

interface ResultProps {
    setShow: (value: String) => void;
}

const Result = ({ setShow }: ResultProps) => {
    return (
        <div className="relative">
            <div className="pb-5">
                <h1 className="text-xl font-bold text-center">Eternally yours… these images still whisper it ❤️</h1>
            </div>
            {/* <DotLottieReact src="/catFeeling.lottie" autoplay loop /> */}
            <img src={cp1} alt="cp1" className="md:w-1/2 w-9/10 mx-auto rounded-2xl border-base-300 border-4"/>
            <div className="absolute -bottom-7 right-5 cursor-pointer" onClick={() => setShow("question")}>
                <RotateCcw size={20}/>
            </div>
        </div>
    )
}

export default Result

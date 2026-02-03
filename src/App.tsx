import { useEffect, useState } from "react";
import Question from "./pages/Question";
import Result from "./pages/Result";
import CanvasSignature from "./components/CanvasSignature";


const App = () => {

  const [show, setShow] = useState<String>("question")

  useEffect(() => {
    const sign = document.getElementById("sign");
    if (sign) {
      sign.style.fontFamily = "Skyline";
      sign.innerHTML = "Made with ❤️ by Xeon"
    }
  })

  return (
    <div className='w-screen h-screen overflow-hidden bg-base-300 flex items-center justify-center'>
      <div className='bg-base-100 w-3/4 md:w-3/4 mx-auto rounded-xl shadow-md py-10 space-y-10'>
        {/* Images */}
        
        {/* Request */}
        {(show === "question") && <Question setShow={setShow} />}

        {(show === "result") && <Result setShow={setShow} />}

      </div>
      <CanvasSignature/>
    </div>
  )
}

export default App

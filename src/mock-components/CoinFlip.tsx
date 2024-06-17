import { useState } from "react";
import flipGif from "../assets/flip.gif";
import headImg from "../assets/head.jpeg";
import tailImg from "../assets/tail.jpg";

function CoinFlip() {
  const [flip, setFlip] = useState<boolean>(false);
  const [ans, setAns] = useState<string>("");
  const [play,setPlay]=useState<boolean>(false);

  const probability=["head","tail"];

  function showAns():void{
    const coinFace = probability[(Math.floor(Math.random() * probability.length))]
    setAns(coinFace);
    setTimeout(()=>{
        setAns("");
        setPlay(false);
    },4000)
  }
  function flipCoin():void
  {
    setPlay(true);
    setFlip(true);
    setTimeout(()=>{
        setFlip(false);
        showAns();
    },7000)
  }
  return (
    <>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {
            !play && (<div>
                    <button onClick={flipCoin}>Toss the coin</button>
            </div> )
        }
        {flip && (
          <div>
            <h4>Flipping the coin</h4>
            <img src={flipGif} alt="fliping coin" height={100} />
          </div>
        )}

        {ans.length > 0 && (
          <div>
            {ans === "head" ? (
              <div>
                <img src={headImg} alt="" height={100} />
              </div>
            ) : (
              <div>
                <img src={tailImg} alt="" height={100} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default CoinFlip;

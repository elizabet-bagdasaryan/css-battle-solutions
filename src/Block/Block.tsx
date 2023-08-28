import Corona from "../assets/corona.png"
import WashHands from "../assets/wash-hands.png"
import StayHome from "../assets/stay-home.png"
import Sanitizer from "../assets/hand-sanitizer.png"
import WearMask from "../assets/wear-mask.png"
import BreakChain from "../assets/break-chain.png"

function Block() {

  return (
    <>
    <p>Battle #1 - Pilot Battle</p>
    <img src={Corona}/>
    <img src={WashHands}/>
    <img src={StayHome}/>
    <img src={Sanitizer}/>
    <img src={WearMask}/>
    <img src={BreakChain}/>
    </>
  )
}

export default Block

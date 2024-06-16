import { useState } from "react";
import Modal from "./Modal"


function ModalPage() {
    const[visible,setVisible] = useState(false);
    function fun(){
        setVisible(!visible);
    }
  return (
    <>
    {
        visible && <Modal setVisible={setVisible}/>
    }
    
    {
        !visible && <button onClick={fun} disabled={visible}>Show/Hide modal</button>
    }
    </>
  )
}

export default ModalPage
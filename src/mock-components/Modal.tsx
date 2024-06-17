interface ModalProps {
    setVisible: (value: boolean) => void;
}

function Modal({setVisible}: ModalProps){
    function fun(){
        setVisible(false);
    }
    return (
        <>
        <div style={{ position:"absolute", top:"0", left:"0" ,backgroundColor:"rgba(255,0,0,0.2)", height:"100vh", width:"100vw", display:"flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{backgroundColor:"yellow", padding:"10px", margin:"5px", opacity:"100%", position:"relative" , left:"20" ,height:"500px", width:"500px"}}>
                Modal Is Open!!
             <button onClick={fun}>Close Modal</button>
            </div>
        </div>
        
        </>
    )
}
export default Modal;
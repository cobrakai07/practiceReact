function Modal({setVisible}: {setVisible: (value: boolean) => void}){
    function fun(){
        setVisible(false);
    }
    return (
        <>
        <div style={{backgroundColor:"yellow", padding:"10px", margin:"5px"}}>
            Modal Is Open!!
            <button onClick={fun}>Close Modal</button>
        </div>
        </>
    )
}
export default Modal;
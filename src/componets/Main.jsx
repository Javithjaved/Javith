import { useState } from "react";
import Dashboard from "./DashBorad"
import Model from "./Model";

const Main = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(false);
    }
    return (
        <>
            <Dashboard show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
            <Model show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        </>
    )
}
export default Main
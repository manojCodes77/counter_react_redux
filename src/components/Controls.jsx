import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Controls = () => {
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const inputElement=useRef();
    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })
    }
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }
    const handlePrivacyToggle=()=>{
        dispatch({ type: "PRIVACY_TOGGLE" })
    }
    const handleAdd = () => {
        const value = inputElement.current.value;
        if (isNaN(value) || value.trim() === '') {
            inputElement.current.value="";
            setError('Please enter a valid number.');
        } else {
            setError('');
            dispatch({ type: "ADD", payload: { num: Number(value) } });
            inputElement.current.value = "";
        }
    };

    const handleSubtract = () => {
        const value = inputElement.current.value;
        if (isNaN(value) || value.trim() === '') {
            inputElement.current.value="";
            setError('Please enter a valid number.');
        } else {
            setError('');
            dispatch({ type: "SUBTRACT", payload: { num: Number(value) } });
            inputElement.current.value = "";
        }
    };
    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary" onClick={handleIncrement} >+1</button>
            <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-1</button>
            <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
            <input type="text" name="" id="" ref={inputElement} placeholder="enter value ..." className="px-2 bg-zinc-900 max-w-28 border-spacing-1 border-gray-200 rounded-lg" />
            <button type="button" className="btn btn-info" onClick={handleAdd} >Add</button>
            <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
        </div>
        {error && <p className="text-center mt-2 text-red-700 text-xl font-bold">{error}</p>}
        </>
    )
}
export default Controls;
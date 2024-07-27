import { useSelector } from "react-redux";

const DisplayCounter = () => {
    let counter = useSelector(store => store.counter);
    return <p className="lead mb-4 text-white">Counter current value: {counter} </p>;
}
export default DisplayCounter;
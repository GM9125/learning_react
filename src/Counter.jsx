import React,{ useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="text-center font-sans">
            <p className="text-[10em] mt-0 mb-[50px]">{count}</p>
            <button className="w-[150px] h-[50px] text-[1.5em] font-bold m-[0px_5px] bg-[hsl(197,100%,58%)] text-white border-none rounded-md cursor-pointer hover:bg-[hsl(197,100%,48%)]" onClick={increment}>
                Increment
            </button>
            <button className="w-[150px] h-[50px] text-[1.5em] font-bold m-[0px_5px] bg-[hsl(197,100%,58%)] text-white border-none rounded-md cursor-pointer hover:bg-[hsl(197,100%,48%)]" onClick={decrement}>
                Decrement
            </button>
            <button className="w-[150px] h-[50px] text-[1.5em] font-bold m-[0px_5px] bg-[hsl(197,100%,58%)] text-white border-none rounded-md cursor-pointer hover:bg-[hsl(197,100%,48%)]" onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default Counter;

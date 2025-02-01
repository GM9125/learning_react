import ComponentC from "./ComponentC";
function ComponentB() {
    return (
            <div className="border-2 border-black p-4 m-4">
            <h1  className="p-4 text-2xl">Component B</h1>
             <ComponentC/>
            </div>
    );
}

export default ComponentB;
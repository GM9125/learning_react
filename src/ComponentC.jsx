import ComponentD from "./ComponentD";
function    ComponentC() {
    return (
            <div className="border-2 border-black p-4 m-4">
            <h1  className="p-4 text-2xl">Component C</h1>
            <ComponentD/>
            </div>
    );
}

export default ComponentC;
import ComponentB from "./ComponentB";
function ComponentA() {
    return (
            <div className="border-2 border-black p-4 m-4">
            <h1  className="p-4 text-2xl">Component A</h1>
            <ComponentB/>
            </div>
    );
}

export default ComponentA;
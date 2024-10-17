const hello = () => { // declare a function to handle the event
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">
                Hello World!</button> {/* configure the function call */}
            <button onClick={() => lifeIs("Good!")}
                id="wd-life-is-good-click"> {/* wrap in function if you need to pass parameters */}
                Life is Good!</button>
            <button onClick={() => {
                {/* wrap in {} if you need more than one line of code */ }
                hello(); {/* calling hello() */ }
                lifeIs("Great!"); {/* calling lifeIs() */ }
            }} id="wd-life-is-great-click">
                Life is Great!
            </button>
            <hr />
        </div>
    );
}
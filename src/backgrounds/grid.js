import "../styles/grid.css";

let objects = 0;

function calculate() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = 50;
    const columns = Math.floor(width / size);
    const rows = Math.floor(height / size);
    objects = columns * rows;

    document.documentElement.style.setProperty("--columns", columns);
    document.documentElement.style.setProperty("--rows", rows);
}

calculate();

function grid() {
    return (
        <div className="background">
            <div className="grid">
                {[...Array(objects).keys()].map((object, index) => {
                    return <div className="grid-item" key={index}></div>;
                })}
            </div>
        </div>
    );
}

export default grid;

import "../styles/lines.css";

let URLobjects = parseInt(
    new URLSearchParams(window.location.search).get("objects")
);

new URLSearchParams(window.location.search).get("objects") === null
    ? (URLobjects = 10)
    : (URLobjects = URLobjects > 10 ? 10 : URLobjects);

let objects = [...Array(URLobjects).keys()];

const min = {
    height: 10, // percentage
    alpha: 1,
    opacity: 0.5,
    speed: 7, // seconds
    color: `hsl(0, 100%, 50%)`,
};

const max = {
    height: 40,
    alpha: 1,
    opacity: 0.5,
    speed: 20,
    color: `hsl(0, 100%, 50%)`,
};

const randomize = () => {
    const random = {
        height: (
            Math.random() * (max.height - min.height) +
            min.height
        ).toFixed(1),
        alpha: (Math.random() * (max.alpha - min.alpha) + min.alpha).toFixed(1),
        opacity: (
            Math.random() * (max.opacity - min.opacity) +
            min.opacity
        ).toFixed(1),
        speed: (Math.random() * (max.speed - min.speed) + min.speed).toFixed(1),
    };
    return random;
};

function background() {
    return (
        <div className="background lines">
            {objects.map((object, index) => {
                const random = randomize();
                const style = {
                    backgroundColor: `${max.color}`,
                    borderColor: `${max.color}`,
                    opacity: random.opacity,
                    height: `${random.height}%`,
                };
                return (
                    <div className="wrapper" style={{height: `${random.height}%`}}>
                        <div className={`line`} style={style} key={index}></div>
                    </div>
                );
            })}
        </div>
    );
}

export default background;

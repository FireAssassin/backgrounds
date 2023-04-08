import "../styles/fireblocks.css";

let URLobjects = parseInt(new URLSearchParams(window.location.search).get("objects"));

new URLSearchParams(window.location.search).get("objects") === null ? 
    URLobjects = 30 :
    URLobjects = URLobjects;

let objects = [...Array(URLobjects).keys()];

const min = {
    width: 0, // percentage
    alpha: 1,
    opacity: 0.1,
    speed: 7, // seconds
    size: 1, // percentage
    red: 255,
    green: 0,
    blue: 0,
};
const max = {
    width: 100,
    alpha: 1,
    opacity: 0.1,
    speed: 20,
    size: 10,
    red: 255,
    green: 100,
    blue: 0,
};

const randomize = () => {
    const random = {
        width: (Math.random() * (max.width - min.width) + min.width).toFixed(1),
        alpha: (Math.random() * (max.alpha - min.alpha) + min.alpha).toFixed(1),
        opacity: (
            Math.random() * (max.opacity - min.opacity) +
            min.opacity
        ).toFixed(1),
        speed: (Math.random() * (max.speed - min.speed) + min.speed).toFixed(1),
        size: (Math.random() * (max.size - min.size) + min.size).toFixed(0),
        red: (Math.random() * (max.red - min.red) + min.red).toFixed(0),
        green: (Math.random() * (max.green - min.green) + min.green).toFixed(0),
        blue: (Math.random() * (max.blue - min.blue) + min.blue).toFixed(0),
        animation: (Math.random() * (8 - 1) + 1).toFixed(0),
    };
    return random;
};

function background() {
    return (
        <div className="background">
            {objects.map((object, index) => {
                const random = randomize();
                const style = {
                    backgroundColor: `rgba(${random.red}, ${random.green}, ${random.blue}, ${random.alpha})`,
                    borderColor: `rgb(${random.red}, ${random.green}, ${random.blue})`,
                    opacity: random.opacity,
                };
                return (
                    <div
                        className="fireblocks"
                        style={{
                            width: `${random.size}%`,
                            animation: `fireblocks${random.animation} ${random.speed}s linear infinite`,
                            left: `${random.width}%`,
                        }}
                        key={index}
                    >
                        <div className="top" style={style}></div>
                        <div className="bottom" style={style}></div>
                        <div className="right" style={style}></div>
                        <div className="left" style={style}></div>
                        <div className="front" style={style}></div>
                        <div className="back" style={style}></div>
                    </div>
                );
            })}
        </div>
    );
}

export default background;

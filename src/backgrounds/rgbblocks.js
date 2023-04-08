import "../styles/rgbblocks.css";

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
};
const max = {
    width: 100,
    alpha: 1,
    opacity: 0.1,
    speed: 20,
    size: 10,
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
                    backgroundColor: `hsl(0, 100%, 50%)`,
                    borderColor: `hsl(0, 100%, 50%)`,
                    opacity: random.opacity,
                };
                return (
                    <div
                        className="rgbblocks"
                        style={{
                            width: `${random.size}%`,
                            animation: `rgbblocks${random.animation} ${random.speed}s linear infinite`,
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

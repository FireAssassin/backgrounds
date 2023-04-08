import "../styles/tree.css";

const Height = 100;
let maxHeight = 0;
const LogColors = [
    `rgb(63, 25, 22)`,
    `rgb(46, 16, 14)`,
    `rgb(51, 15, 12)`,
    `rgb(48, 24, 13)`,
    `rgb(56, 26, 12)`,
    `rgb(61, 30, 16)`,
    `rgb(43, 23, 13)`,
    `rgb(32, 17, 9)`,
    `rgb(66, 42, 22)`,
];
const LeavesColors = [
    `rgb(0, 255, 0)`,
    `rgb(120, 160, 12)`,
    `rgb(12, 160, 12)`,
    `rgb(218, 221, 8)`,
    `rgb(175, 221, 8)`,
    `rgb(48, 124, 17)`,
    `rgb(226, 136, 18)`,
]

const Random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const CreateLog = () => {
    const logObjects = [...Array(Height).keys()].map((i) => {
        const style = {
            height: `${Random(2, 5)}%`,
            backgroundColor: `${
                LogColors[Random(0, LogColors.length - 1)]
            }`,
            left: `${Random(-3, 3) + 50}%`,
            bottom: `${Random(-3, 3) + i * 0.3}%`,
        };
        if (Random(-5, -2) + i * 0.7 > maxHeight) maxHeight = Random(-5, -2) + i * 0.7;
        return <div className="logObject" key={i} style={style}></div>;
    });

    return logObjects;
};

const CreateLeaves = () => {
    const leavesObjects = [...Array(Height*3).keys()].map((i) => {
        const style = {
            height: `${Random(3, 7)}%`,
            backgroundColor: `${
                LeavesColors[Random(0, LeavesColors.length - 1)]
            }`,
            left: `${Random(-((0.1*i)^2), (0.1*i)^2)+50}%`,
            top: `${Math.floor(Math.random() * maxHeight)}%`,
        };
        return <div className="leavesObject" key={i} style={style}></div>;
    });

    return leavesObjects;
};

function Tree() {
    return (
        <div className="background Tree">
            <CreateLog />
            <CreateLeaves />
        </div>
    );
}

export default Tree;

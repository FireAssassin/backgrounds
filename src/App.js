import "./styles/app.css";

function App() {
    return (
        <div className="Backgrounds">
            <div onClick={() => {window.location = `./fireblocks?objects=20`}}>Fire blocks</div>
            <div onClick={() => {window.location = `./rgbblocks?objects=20`}}>RGB blocks</div>
            <div onClick={() => {window.location = `./lines?objects=10`}}>Lines</div>
            <div onClick={() => {window.location = `./grid`}}>Grid</div>
            <div onClick={() => {window.location = `./tree`}}>Tree</div>
        </div>
    );
}

export default App;



let CurrentTime = () => {

    let time = new Date();
    return (
        <div>
            <div className="text-center"><h4>Time:</h4>{time.toDateString()}--{time.toTimeString()}</div>

        </div >
    )
};

export default CurrentTime

import React from 'react'

function Test() {

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/data")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);


    return (
        <div className="App">
            <header className="App-header">
                <p>{!data ? "Loading..." : data.user}</p>
            </header>
        </div>
    )
}

export default Test
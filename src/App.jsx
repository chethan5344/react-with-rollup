import React, { useState } from "react"

function App() {

    const [facts, setFacts] = useState([])
    const [inc, setInc] = useState(1)

    function getCatFacts() {
        fetch("https://meowfacts.herokuapp.com/")
            .then(res => res.json())
            .then(res => {
                const { data } = res
                setFacts(prev => [...prev, data[0]])
            })
    }

    return <div>
        <button onClick={getCatFacts}>Fetch facts</button>
        <button onClick={() => { setInc(prev => prev + 1) }}>click {inc}</button>
        <DisplayFacts facts={facts} />
    </div>
}

export default App

function DisplayFacts({ facts = ["FuckYou"] }) {
    console.log(facts)
    return <ol>
        {facts.map((f, i) => <li key={i}>{f}</li>)}
    </ol>
} 
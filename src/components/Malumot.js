import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Github = () => {
    const [input, setInput] = useState('')
    const [massiv, setMassiv] = useState([])
    const sendFun = () => {
        // console.log(massiv);
        axios.get(`https://api.github.com/users/${input}`)
            .then((res) => {
                // console.log(res.data);
                setMassiv([...massiv, res.data])
            })
    }
    useEffect(() => {
        axios.get(`https://api.github.com/users/${input}`)
            .then((res) => {
                // console.log(res.data);
                setMassiv([...massiv, res.data])
            })
    }, []);
    const searchFun = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }
    const reset = () => {
        setMassiv([])
        setInput('')
    }
    return (
        <>
            <div className="github">
                <input type="text" className='inputSearch' value={input} onChange={searchFun} />
                <button onClick={sendFun}>Send</button>
                <button className='resetBtn' onClick={reset}>{input === "" ? null : "X"}</button>
                <div className="cards">
                    {
                        massiv.map((val) => (
                            <div className="card">
                                <img src={val.avatar_url} alt="" />
                                <h2>Name : {val.name}</h2>
                                <h2>Username : {val.login}</h2>
                                <h2>Bio : {val.bio}</h2>
                                <h2>Company : {val.company}</h2>
                                <h2>Repositories : {val.public_repos}</h2>
                                <h2>Followers : {val.followers}</h2>
                                <h2>Following : {val.following}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

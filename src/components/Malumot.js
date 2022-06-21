import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Github = () => {
    const [input, setInput] = useState('')
    const [massiv, setMassiv] = useState([])
    const sendFun = () => {
        console.log(massiv);
        axios.get(`https://api.github.com/user/${input}`)
        .then((res) => {
            console.log(res.data);
            setMassiv([...massiv, res.data])
        })
    }
    useEffect(() => {
        axios.get(`https://api.github.com/user/${input}`)
        .then((res) => {
            console.log(res.data);
            setMassiv([...massiv, res.data])
        })
    }, []);
    const searchFun = (e) => {
        console.log(e.target.value);
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
                            <h2>username : {val.username}</h2>
                            <h2>Id : {val.id}</h2>
                            <h2>country : {val.city === "" ? "topilmadi" : val.city}</h2>
                            <h2>email : {val.email}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

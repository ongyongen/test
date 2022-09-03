import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])

  const fetchData = async () => {
    await axios.get("https://quiet-temple-11296.herokuapp.com/image")

        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
      };

  const test = async () => {
    try {
      await axios.post('https://quiet-temple-11296.herokuapp.com/new', 
      {
        "project_name": "12w",
        "scanning_mode": "string",
        "scan_dimensions_x": 5,
        "scan_dimensions_y": 7,
        "scanner_frequency": 2
      })
    .then(res => {
      if (res.status == 200) {
        navigate('/photo')
      } 
    })
    } catch (err) {
        navigate('/Error',{ state: err.response.data.error })

    }
  }
    return (
        <div>
            <h1>This is the about page</h1>
            <div>ff</div>
            <button onClick={test}>hello world</button>
            </div>
    )
}

export default Home
import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const log = console.log

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')

    axios
      // needs authorization header
      .get('http://localhost:5000/api/colors', {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        log({ err })
      })
  }, [])


  return (
    <>
      <h1>Bubbles!!</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting. ✅

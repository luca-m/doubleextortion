/*
 * Data.js
 * Copyright (C) 2020 stk <stk@1337-TP>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';    

import axios from "axios";
import queryString from 'query-string'


var dataurl = "https://drive.google.com/uc?export=download&id=1tvBoIFGeqOEMMFSvgVyNO0UEi1zlEpcR"
var dataurl2= "https://www.googleapis.com/drive/v2/files/1tvBoIFGeqOEMMFSvgVyNO0UEi1zlEpcR?alt=media&source=downloadUrl"
module.exports.retrieveRansomwareEvents = function () {
  axios.get(dataurl,{mode: 'no-cors', method: 'HEAD'})
  .then(response=>{
    try{
      console.info("retrieved data:",response.data)
      window.sessionStorage.setItem('events',JSON.stringify(response.data))
    } catch (e) { 
      console.error(e)
    }
    
  })
  .catch((err)=>{
    console.error("cannot retrieve ransomware events: ",err)
  })
}


module.exports.retrieveRansomwareEventsLocal = function () {
  try{
    var jsn = require('./events.json');
    window.sessionStorage.setItem('events',JSON.stringify(jsn))
    return jsn;
  } catch (err){
    console.log("cannot load local events: ",err)
  }
}

/*
 * Data.js
 * Copyright (C) 2020 stk <stk@1337-TP>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';    
import React, { Component } from 'react';

import axios from "axios";
import queryString from 'query-string'


var dataurl = "https://drive.google.com/uc?export=download&id=1tvBoIFGeqOEMMFSvgVyNO0UEi1zlEpcR"
var dataurl2= "https://www.googleapis.com/drive/v2/files/1tvBoIFGeqOEMMFSvgVyNO0UEi1zlEpcR?alt=media&source=downloadUrl"

var dataurl3="https://script.google.com/macros/s/AKfycbzaanEd0xYDgdnBwgRAOcyzByWXI-mhzC0EUln7r_Qg5-XR9-E/exec"


module.exports.retrieveRansomwareEvents = function () {
  axios.get(dataurl3,{mode: 'no-cors', method: 'HEAD'})
  .then(response=>{
    try{
      //console.info("retrieved data:",response.data)
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
    window.sessionStorage.setItem('events',jsn)
    return jsn;
  } catch (err){
    console.log("cannot load local events: ",err)
  }
}

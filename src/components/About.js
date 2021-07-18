import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';


import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


class About extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  compoentDidMount(){

  }

      /*<div class="card">
        <a href="http://agam-mi.it/event/gdpr-e-studi-legali-nuovi-strumenti-e-consigli-pratici-per-avvocati/" target="_blank">
        <img class="card-img-top" src="http://agam-mi.it/wp-content/uploads/2019/10/Convegno-13.11.2019-locandina-new-768x1086.png" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Awareness & Training</h5>
          <p class="card-text">Speaker</p>
          <p class="card-text"></p>
        </div>
        </a>
      </div>
      */  
  render() {

    return (
      <div className="content">      
      <div className="container-fluid" >

         
        <div className="row">
          <div className="card w-100"> 
            <div className="card-header">
              
            </div>
            <div className="card-body">
            <img className="float-left rounded-circle" style={ {  width: "240px", height:"240px", borderRadius:"90%",  marginRight:"15px"}} src="me.jpeg" alt="Luca Mella Profile Pic" />
              
              <div className="message ">
                <h4 className="card-title">About the Author</h4><br/>
                <h5 className="card-subtitle">Luca Mella, M.Eng. </h5>
                <br/>
                <p className="card-text">Luca is a Cyber Security professional with deep passion for hacking and intimate curiosity for the digital world. 
                <br/>
                Currently, Luca is manager at <a href="https://yoroi.company/">Yoroi</a>, heading the CERT unit and overseeing the <a href="https://yoroi.company/category/research/">malware research</a> program. He teach how to analyze modern malware at <a href="https://master.unibo.it/cybersecurity/en/programme">University of Bologna</a>.  
                <br/><br/>
                He is a former member of the <a href="https://ctftime.org/team/520">ANeSeC</a> CTF team, one of the firsts Italian war-game teams born back in 2011.  
                <br/><br/>
                In 2019, Luca was mentioned as one of the "32 Influential Malware Research Professionals".

                </p>
              </div>
              
            </div>
          </div>
        </div>
            
      <div className="row">

  <div class="content">
  <div class="text-left">
    <h4>Other things Luca is passionate about</h4>
  </div>
  <div class="container">
    <div class="card-columns">
      <div class="card">
        <a href="https://www.privacy-network.it/" target="_blank">
        <img class="card-img-top" src="https://764000.smushcdn.com/2258058/wp-content/uploads/2020/06/HeroHomeImage.png?lossy=0&strip=1&webp=1" alt="Privacy Network"/>
        <div class="card-body">
          <h5 class="card-title">Privacy & Digital Ethics</h5>
          <p class="card-text">
            
          </p>
          <p class="card-text">Privacy-Network Member</p>
      </div>
        </a>
      </div>
      <div class="card">
        <a href="https://www.cybersecurity360.it/giornalista/luca-mella/" target="_blank">
        <img class="card-img-top" src="https://pbs.twimg.com/profile_images/983704933940809728/nwnY2tSq.jpg" alt="CyberSecurity360"/>
        <div class="card-body">
          <h5 class="card-title">CyberSecurity Divulgation</h5>
          <p class="card-text">CyberSecurity360 Writer</p>
          <p class="card-text"></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="https://cybersecurityprofiles.review/" target="_blank">
        <img class="card-img-top" src="https://cybersecurityprofiles.review/screen.png" alt="NICE Workforce mapper"/>
        <div class="card-body">
          <h5 class="card-title">Cyber Security Workforce</h5>
          <p class="card-text">Author of "I'm i NICE", a NICE framework Skill/Knowledge mapper </p>
          <p class="card-text"></p>
        </div>
        </a>
      </div>
      <div class="card">
        <a href="https://www.esa.int/Education/BEXUS_18_19_balloon_launch_campaign_about_to_start" target="_blank">
        <img class="card-img-top" src="http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/12/rexus_bexus_logo/10290930-5-eng-GB/REXUS_BEXUS_Logo_pillars.jpg" alt="BEXUS 18 ESA"/>
        <div class="card-body">
          <h5 class="card-title">Space & Software Engineering</h5>
          <p class="card-text">Former OBDH engineer for ESAs Bexus 18 launch (A5 Unibo team)</p>
          <p class="card-text"></p>
        </div>
        </a>
      </div>
            <div class="card">
        <a href="https://github.com/luca-m/emotime" target="_blank">
        <img class="card-img-top" src="https://github.com/luca-m/emotime/blob/master/report/images/exampl_happy2.png?raw=true" alt="Emotime"/>
        <div class="card-body">
          <h5 class="card-title">Artificial Intelligence and Machine Learning</h5>
          <p class="card-text">Co-Author of the Emotime project</p>
          <p class="card-text"></p>
        </div>
        </a>
      </div>

    </div>
  </div>
</div>
      
      </div>
      </div>
      </div>
    )
  }
}

export default About

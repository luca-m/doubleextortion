import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { CSVLink, CSVDownload } from "react-csv";


const columns=[{
            dataField: 'date',
            text: 'Date'
          }, {
            dataField: 'victim',
            text: 'Victim'
          }, {
            dataField: 'sector',
            text: 'Sector'
          }, {
            dataField: 'actor',
            text: 'Actor'
          }
];

class DataTable extends Component {

  constructor(props){
    super(props)
    this.state={}
    this.loadRansomwareEvents()
  }

  compoentDidMount(){

  }
  
  loadRansomwareEvents = () =>{
    console.info('loading events in datatable')
    var events=JSON.parse(window.sessionStorage.getItem('events')||"[]")
    console.info("retrieved "+events.length+" events ")
    this.state.revents=events
  }

  render() {
    var data= this.state.revents
    data.forEach((d,i)=>{
      d.idx=i
      d.date = d.date.split('T')[0] 
      
    });
    return (
      <div className="content">
        <div className="container-fluid">

            <div className="row">
              <div className="card w-100"> 
                <div className="card-header "><h4>Introduction</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  Cyber crime has evolved fast in recent years. Covid19 pandemics strongly  accelerated an infamous cyber-criminal trend, the <b>Double Extortion</b> practice: extort money for ransomware attack and steal data from the company to extort money again and add pressure on the victim. 
                  An increasing number of criminal groups joined this practice and now conduct targeted ransomware  operations and double extortion practice against private and public organizations, to profit on business interruption and confidential information. 
                  Affiliate programs, the constitution of an ecosystem of malicious offensive units and the leverage of crimeware infrastructures such as botnets and dark markets are leading to a very dangerous digital environment that needs to be understood.
                  <hr />
                  The “DoubleExtortion.com” tool is a tracking application aimed to monitor the scope of this alarming cyber criminal phenomenon, aiming to raise the awareness of organizations, the security community, and the industries, because the impact of this kind of attacks involves all of us, both enterprises, private citizens and also governments.

                </div>
              </div>
            
            </div>

            <div className="row">
              <div className="card  w-100"> 
                <div className="card-header "><h4>Data Table</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  The DoubleExtortion data table reports the extortion events tracked by the tool to help to raise the awareness of organizations, especially regarding the supply chain risks, that may quickly escalate in case of double extortion attacks. 
                  The data table includes the organization names <b>claimed</b> by threat actors or news media as potential victims of cyber extortions, but I <b>strongly</b> advise to <b>verify</b> the claims before taking any kind of decision based on the events tracked by the tool.
                </div>
              </div>
            
            </div>

            <div className="row">
              <div className="card w-100">
              <div className="card-header">
              <h5>Export CSV data <CSVLink className="link-dark" filename={`doubleextortion_export_${new Date().toISOString()}.csv`} data={data.map(e=>{delete e.breached; delete e.disclosed; delete e.encrypted; delete e.idx;return e;})}><i className="nc-icon nc-cloud-download-93"></i></CSVLink>
              </h5>
              </div>
              <div className="card-body justify-content-center">
                <BootstrapTable keyField='idx' data={ data.sort((a,b)=> (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0)     ) } columns={ columns }
                pagination={ paginationFactory() }
                />
              </div>
              </div>
          </div>

          <div className="row">
              <div className="card  w-100"> 
                <div className="card-header "><h4>I need to use these data on my research project, how should I do?</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  If you are a researcher and you want to use the DoubleExtortion.com data for your research or publication, feel free to use it: the data is available under the <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> license, so just cite me.
                  <br/>
                  For instance you could use a bibtex reference like that:
                  <br/><br/>
                  <code>{`
@misc{ LM,
       author = "Luca Mella, M.Eng.",
       title = "Double Extortion Ransomware Tracker",
       year = "${new Date().getFullYear()}",
       url = "https://doubleextortion.com/",
   note = "[Online; ${new Date().toDateString()}]"
     }
`}
                  </code>

                </div>
              </div>
            
            </div>

        </div>
      </div>
    )
  }
}

export default DataTable

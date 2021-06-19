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
                  Cyber crime evolved fast in 2020. Covid19 pandemics accellerated an infamous cyber-criminal trend: the <b>Double Extortion</b> practice, extort money for ransomware keys and extort money to avoid the disclosure of stolen data. 
                  An increasing number of criminal groups started to conduct targeted ransomware operations against private and public organizations, to profit on business interruption and confidential information. 
                  Affilliation programs, constitution of malicious red team units - the so called “Dark Teams” - and the leverage of crimeware infrastructures such as botnets and dark markets are leading to a very dangerous digital environment that need to be understood.
                  <hr />
                  This tool is a tracking application aimed to monitor the publicly effects of the alarming double extortion phenomenon, aiming to raise the security awereness of organizations and security community. 

                </div>
              </div>
            
            </div>

            <div className="row">
              <div className="card  w-100"> 
                <div className="card-header "><h4>Data Table</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  The DoubleExtortion data table reports the double extortion events tracked by the tool to help to raise the security awareness of organizations and security community, especially related to the associated risks such as the supply chain risk. 
                  The table includes the organization names <b>claimed</b> by threat actor or news media as potential victim of cyber extortions, but I <b>strongly</b> advise to double check the claims before taking any kind of decision based on the events tracked by the tool.
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

        </div>
      </div>
    )
  }
}

export default DataTable

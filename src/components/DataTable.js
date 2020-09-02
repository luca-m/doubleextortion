import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
          }, {
            dataField: 'disclosed',
            text: 'Data Leak'
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
              <div className="card"> 
                <div className="card-header "><h4>Introduction</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  Cyber crime evolved fast in 2020. Coronavirus pandemics accellerate many infamous trend in the cyber-criminal operations: the <b>Double Extortion</b> practice, extort money for ransomware keys and extort money to avoid the disclosure of stolen data. 
                  More and more criminal groups started to conduct targeted ransomware operations against private and public companies to profit on business interruption caused by their intrusions. 
                  Affilliation programs, constitution of malicious “RedTeam” units (“DarkTeams”) and the leverage of crimeware infrastructures such as botnets and dark markets lead to a very dangerous environment for companies and their reputation.
                  <hr />
                  This tool is a tracking application aimed to monitor the publicly effects of this alarming phenomenon, aiming to raise the awereness of the business and security community. 

                </div>
              </div>
            
            </div>

            <div className="row">
              <div className="card"> 
                <div className="card-header "><h4>Data Table</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  The DoubleExtortion data table reports the double-extortion events tracked by the tool to enable companies and security community to raise the awareness about the problem and associated risks (e.g. supply chain risk). 
                  The table includes the company names <b>claimed</b> by threat actor or news, but we <b>strongly</b> advice to double check the claims before taking any kind of decision based on the tracked events.
                </div>
              </div>
            
            </div>

        <BootstrapTable keyField='idx' data={ data.sort((x,y)=>x.date<y.date) } columns={ columns }
        pagination={ paginationFactory() }
        />

        </div>
      </div>
    )
  }
}

export default DataTable

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


class DataTable extends Component {
  

  constructor(props){
    super(props)
    this.state={}
    this.loadRansomwareEvents()
  }

  compoentDidMount(){

  }
  
  loadRansomwareEvents = () =>{
    var events=JSON.parse(window.sessionStorage.getItem('events'))
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

        <BootstrapTable keyField='idx' data={ data } columns={ [
          {
            dataField: 'date',
            text: 'Date'
          }, {
            dataField: 'victim',
            text: 'Victim'
          }, {
            dataField: 'sector',
            text: 'Sector'
          }, {
          }, {
            dataField: 'site',
            text: 'company site'
          }, {
            dataField: 'actor',
            text: 'Actor'
          }, {
            dataField: 'disclosed',
            text: 'Data Leak'
          }, {
          }
        ] }
        pagination={ paginationFactory() }
        />

        </div>
      </div>
    )
  }
}

export default DataTable

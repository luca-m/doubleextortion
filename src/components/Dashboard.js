import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
import Plot from 'react-plotly.js';


class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={}
    this.loadRansomwareEvents()
  }

  compoentDidMount(){
  }

  loadRansomwareEvents = () =>{
    console.info('loading events in dashboard')
    var events=JSON.parse(window.sessionStorage.getItem('events'))
    var sectors = events.map(e=>e.sector);
    var sectorsCount={}
    sectors.forEach(s=>{ 
      if(sectorsCount[s]){sectorsCount[s]+=1}else{sectorsCount[s]=1} 
    })
    this.state.revents=events
    this.state.sectorPie={ 
        labels:Object.keys(sectorsCount),
        series:Object.values(sectorsCount)
      }
    let pie2=[]
    for (let k in sectorsCount){
      pie2.push({ id:k, value:sectorsCount[k], label:k, color: "hsl(167, 70%, 50%)"})
    }
    let tl = events.map(e=>{ 
      return {date:e.date.split('T')[0], sector:e.sector}
    })
    var timelineCount={};
    var timelineSectorCount={};
    tl.sort((x,y)=>{x.date<y.date})
      .forEach(t=>{ 
      if (timelineCount[t.date]){ timelineCount[t.date]+=1 } else { timelineCount[t.date]=1 }
      if (timelineSectorCount[`${t.date}_${t.sector}`]){ timelineSectorCount[`${t.date}_${t.sector}`]+=1 } else { timelineSectorCount[`${t.date}_${t.sector}`]=1 }
    })
    this.state.timeline=timelineCount;
    this.state.timelineSector=timelineSectorCount;
    this.state.sectorPie2=pie2
  }

  render() {
    let dataPie = this.state['sectorPie']
    let dataTimeline = {
      labels: [],
      series: []
    }
    let dataSector = {
      date: [],
      sector: [],
      size:[]
    }
    Object.keys(this.state['timeline'])
      .sort()
      .forEach(d=>{ 
        dataTimeline.labels.push(d);
        dataTimeline.series.push(this.state['timeline'][d])
      })
    Object.keys(this.state['timelineSector'])
      .sort()
      .map(x=>{
        return { date:x.split('_')[0], sector:x.split('_')[1], key:x }
      })
      .forEach(d=>{ 
        dataSector.date.push(d.date)
        dataSector.sector.push(d.sector)
        dataSector.size.push(this.state['timelineSector'][d.key])
      })
    console.info(dataSector)

    return (
      <div className="content">
        <div className="container-fluid">
              
            <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-8">
            </div>
            </div>
              
            <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Industry Sector Statistics</h4>
                  <p className="card-category">Victims</p>
                </div>
                <div className="card-body">

                  <Plot
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}
                     data={[
                       {
                         name:'sectors',
                         values: dataPie.series,
                         labels: dataPie.labels,
                         type: 'pie',
                         colorscale:'D3',
                         pull:0.05,
                         automargin:true,
                         marker:{line:{width:0.5}}
                       }
                     ]}
                     layout={{ autosize:true, font:{size:10} }}
                     config={{ displayModeBar:false,modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />
                  

                  <hr />
                </div>
              </div>
              
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Extortion and Breaches Events</h4>
                  <p className="card-category">Attacks</p>
                </div>
                <div className="card-body ">

                  <Plot
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}
                     data={[
                       {
                         name:'events',
                         x: dataTimeline.labels.map(t=> new Date(t)),
                         y: dataTimeline.series,
                         type: 'scatter',
                         colorscale:'D3',
                         automargin:true,
                         fill:'tozeroy',
                         marker:{line:{width:0.5}}
                       }
                     ]}
                     layout={{ autosize:true, font:{size:10} }}
                     config={{ displayModeBar:false,modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />

                </div>
                <div className="card-footer ">
                  <hr />
                </div>
              </div>
              
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Extortions per Industry over Time</h4>
                  <p className="card-category">Attacks</p>
                </div>
                <div className="card-body " >

                  <Plot
                  style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                   }}
                     data={[
                       {
                        x: dataSector.date,
                        y: dataSector.sector,
                        mode: 'markers+text',
                        type:'scatter',
                        marker: {
                          size: dataSector.size.map(x=>x*10)
                        },
                        text: dataSector.size,
                        color: dataSector.sector
                       }
                     ]}
                     layout={{ autosize:true, font:{size:10},   hovermode:false}}
                     config={{ displayModeBar:false, modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />

                </div>
                <div className="card-footer ">
                  <hr />
                </div>
              </div>
        
        </div>
      </div>
    )
  }
}

export default Dashboard

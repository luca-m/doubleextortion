import React, { Component } from 'react'
import Plot from 'react-plotly.js';


class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={}
    this.loadRansomwareEvents()
    this.state.loaddata=false;
  }

  componentDidMount=()=>{
    this.loadRansomwareEvents()
  }
  compoentDidUnMount=()=>{
  }

  loadRansomwareEvents = () =>{
    console.info('loading events in dashboard')
    var events=JSON.parse(window.sessionStorage.getItem('events')||"[]")
    console.info("retrieved "+events.length+" events ")
    var sectors = events.map(e=>e.sector||'Unspecified');
    var actors  = events.map(e=>e.actor);
    var sectorsCount={}
    var actorsCount={}
    sectors.forEach(s=>{ 
      if(sectorsCount[s]){sectorsCount[s]+=1}else{sectorsCount[s]=1} 
    })
    actors.forEach(s=>{ 
      if(actorsCount[s]){actorsCount[s]+=1}else{actorsCount[s]=1} 
    })
    let sectorPie={ 
        labels:Object.keys(sectorsCount),
        series:[]//Object.values(sectorsCount)
    }
    let actorPie={ 
        labels:Object.keys(actorsCount),
        series:[]//Object.values(actorsCount)
    }
    sectorPie.labels.forEach(k=>{ sectorPie.series.push(sectorsCount[k]) })
    actorPie.labels.forEach(k=>{ actorPie.series.push(actorsCount[k]) })

    let tl = events.map(e=>{ 
      return {date:e.date.split('T')[0], sector:e.sector, actor:e.actor}
    })
    var timelineCount={};
    var timelineSectorCount={};
    var timelineActorCount={};
    tl.sort((x,y)=>{x.date<y.date})
      .forEach(t=>{ 
        if (timelineCount[t.date]){ timelineCount[t.date]+=1 } else { timelineCount[t.date]=1 }
      
        if (timelineSectorCount[`${t.date}_${t.sector||'Unspecified'}`]){ timelineSectorCount[`${t.date}_${t.sector||'Unspecified'}`]+=1 } else { timelineSectorCount[`${t.date}_${t.sector||'Unspecified'}`]=1 }
        
        if (timelineActorCount[`${t.date}_${t.actor||'Unspecified'}`]){ timelineActorCount[`${t.date}_${t.actor||'Unspecified'}`]+=1 } else { timelineActorCount[`${t.date}_${t.actor||'Unspecified'}`]=1 }
    })
    
    this.state.sectorPie=sectorPie
    this.state.actorPie=actorPie
    this.state.revents=events
    this.state.timeline=timelineCount;
    this.state.timelineSector=timelineSectorCount;
    this.state.timelineActor=timelineActorCount;
  }

  render() {

    if (this.props.loading){ return <div></div> }
    else { this.loadRansomwareEvents() }

    let dataPie = this.state['sectorPie']
    let dataPie2 = this.state['actorPie']
    let dataTimeline = {
      labels: [],
      series: []
    }
    let dataSector = {
      date: [],
      sector: [],
      size:[]
    }
    let dataActor= {
      date: [],
      actor: [],
      size:[]
    }
    let actorTraces={}
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
    Object.keys(this.state['timelineActor'])
      .sort()
      .map(x=>{
        return { date:x.split('_')[0], actor:x.split('_')[1], key:x }
      })
      .forEach(d=>{ 
        dataActor.date.push(d.date)
        dataActor.actor.push(d.actor)
        dataActor.size.push(this.state['timelineActor'][d.key])
        if (!actorTraces[d.actor]){actorTraces[d.actor]=[]}
        actorTraces[d.actor].push(d.date)
      })
    return (
      <div className="content">
        <div className="container-fluid">
              
            <div className="row">
            <div className="col-md-6">

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
                         colorscale:'Prism',
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


            </div>
            <div className="col-md-6">

            <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Ransomware Actors Statistics</h4>
                  <p className="card-category">Attacks</p>
                </div>
                <div className="card-body">

                  <Plot
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                     }}
                     data={
                       [
                       {
                         name:'actors',
                         values: dataPie2.series,
                         labels: dataPie2.labels,
                         type: 'pie',
                         colorscale:'Prism',
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
                  <p className="card-category">Victims</p>
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
                        mode: 'markers',
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
              
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Actor Activities over Time</h4>
                  <p className="card-category">Attack</p>
                </div>
                <div className="card-body " >

                  <Plot
                  style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                   }}
                     data={
                       Object.keys(actorTraces)
                       .map(a=>{
                         return { type:'scatter',           
                           scalemode: "count",
                           points: "all",
                           pointpos: 0.45 ,
                           box: {  visible: true  },
                           marker: {
                               line: {
                                   width: 1.3,
                                   color: "black"
                               },
                               symbol: "line-ns"
                           },
                           name:a , x:actorTraces[a] }
                       })
                     }
                     layout={{ autosize:true, font:{size:10},   hovermode:false}}
                     config={{ displayModeBar:false, modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />

                </div>
                
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

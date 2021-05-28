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
        labels:[], //Object.keys(sectorsCount),
        series:[]  //Object.values(sectorsCount)
    }
    let actorPie={ 
        labels:[], //Object.keys(actorsCount),
        series:[]  //Object.values(actorsCount)
    }
    // sorted sector
    var tmp_sector=[]
    for (let k in sectorsCount){ tmp_sector.push({s:k,c:sectorsCount[k]}) }
    tmp_sector=tmp_sector.sort((a,b)=> (a.c < b.c) ? 1 : ((b.c < a.c) ? -1 : 0) )
    tmp_sector.forEach(e=>{ sectorPie.labels.push(e.s); sectorPie.series.push(e.c) })    

    //sectorPie.labels.forEach(k=>{ sectorPie.series.push(sectorsCount[k]) })
    var tmp_actor=[]
    for (let k in actorsCount){ tmp_actor.push({s:k,c:actorsCount[k]}) }
    tmp_actor=tmp_actor.sort((a,b)=> (a.c < b.c) ? 1 : ((b.c < a.c) ? -1 : 0) )
    tmp_actor.forEach(e=>{  actorPie.labels.push(e.s); actorPie.series.push(e.c) })    
    //actorPie.labels.forEach(k=>{ actorPie.series.push(actorsCount[k]) })

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
        dataSector.size.push(this.state['timelineSector'][ d.key ] )
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
    console.log(dataPie)
    return (
      <div className="content">
        <div className="container-fluid">

            <div className="row">
              <div className="card"> 
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
              <div className="card"> 
                <div className="card-header "><h4>Dashboard</h4>
                  <p className="card-category"></p>
                </div>
                <div className="card-body">
                  The DoubleExtortion dashboard summarize the double-extortion events tracked by the tool. 
                  The following interactive plots helps the understanding of the pheonmenon by aggregating events by industry verticals, threat actor (or affiliation) and also the time evolution of the discovered events.   
                </div>
              </div>
            
            </div>
              
            <div className="row">

            <div className="col-md-6">
            <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Top 10 Threatened Industries</h4>
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
                         values: dataPie.series.slice(0,10),
                         labels: dataPie.labels.slice(0,10),
                         type: 'pie',
                         colorscale:'Prism',
                         color:'Prism',
                         pull:0.05,
                         automargin:true,
                         marker:{ line:{width:0.5}, 
                                  colors: 
                                  ["#fff7ec","#fff7ec","#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"].reverse()
                                  .map(hex=>{
                                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                                      return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : '#000';
                                  })
                                }
                       },
                     ]}
                     layout={{ autosize:true, font:{size:10} }}
                     config={{ displayModeBar:false,modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />
                  

                  <hr />
                  <small className="text-center">The Industry Vertical plot shows the distribution of events among the top 10 impacted business sectors.<br/>
                  Currently we observed <b>{this.state.revents.length}</b> events across <b>{dataPie.labels.length}</b> industries. </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Top 10 Threat Groups</h4>
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
                         values: dataPie2.series.slice(0,10),
                         labels: dataPie2.labels.slice(0,10),
                         type: 'pie',
                         mode:'markers',
                         marker:{ line:{width:0.5}, 
                                  colors: 
                                  ["#fff7ec","#fff7ec","#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"].reverse()
                                  .map(hex=>{
                                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                                      return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : '#000';
                                  })
                         },
                         pull:0.05,
                         automargin:true
                       }
                     ]}
                     layout={{ autosize:true, font:{size:10},
                      }}
                     config={{ displayModeBar:false,modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />
                  <hr />
                  <small className="text-center">The Actor Statistics plot shows the distribution of the top 10 threat actor or affiliaiton program causing most of the observed attacks.<br/>
                  Currently we observed <b>{dataPie2.labels.length}</b> actors attacking <b>{dataPie.labels.length}</b> industries. </small>
                </div>
              </div>
            </div>
            </div>
              
            <div className="row">
            <div className="col-md-12">
              
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
                       },
                       /*{
                         name:'comul',
                         x: dataTimeline.labels.map(t=> new Date(t)),
                         y: dataTimeline.labels.map((t,i) => dataTimeline.series.slice(0,i+1).reduce((x,y)=>x+y) / dataTimeline.series.reduce((x,y)=>x+y) ),
                         type: 'scatter',
                         colorscale:'D3',
                         automargin:true,
                         fill:'tozeroy',
                         marker:{line:{width:0.5}}
                       }*/
                     ]}
                     layout={{ autosize:true, font:{size:10} }}
                     config={{ displayModeBar:false,modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />

                </div>
                <div className="card-footer ">
                  <hr />
                  <small className="text-center">The Extortion and Breach events plot shows the evolution of double extortion ransomware events operated by threat actors during the time. 
                  Currently we observed <b>{this.state.revents.length}</b> events distributed among <b>{dataTimeline.series.length}</b> days. </small>

                </div>
              </div>
            
            </div>
            </div>

            
            <div className="row">
            <div className="col-md-12">

              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Extortions per Industry over Time</h4>
                  <p className="card-category">Victims</p>
                </div>
                <div className="card-body" >

                  <Plot
                  style={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       height:`${27*new Set(dataSector.sector).size}px`,
                   }}
                     data={[
                       {
                        x: dataSector.date,
                        y: dataSector.sector,
                        mode: 'markers',
                        type:'scatter',
                        marker: {
                          size: dataSector.size.map(x=>x*7)
                        },
                        //text: dataSector.size,
                        color: dataSector.sector
                       }
                     ]}
                     layout={{ autosize:true, font:{size:12 }, hovermode:true, yaxis:{autorange:'reversed', gridcolor:'darkGrey',tickangle:-45,range:new Set(dataSector.sector).size-1  } }}
                     config={{ displayModeBar:false, modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']  }}
                   />

                </div>
                <div className="card-footer ">
                  <hr />
                  <small className="text-center">The Extortion per Industry over time plot shows the evolution of double extortion attacks grouped by affected industry sector. </small>
                </div>
                </div>

            </div>
            </div>
            
            <div className="row">
            <div className="col-md-12">
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
                
                <div className="card-footer ">
                <hr />
                <small className="text-center">The Actor Activities over time plot reports the observed double extortion attempts grouped by threat actor or affiliation program. </small>

                </div>
              </div>
              
              
            </div>
            </div>

        </div>
      </div>
    )
  }
}

export default Dashboard

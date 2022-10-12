import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() label: string="";
@Input() total: string="";
@Input() percentage: string="";
  chartOptions={}
  Highcharts=Highcharts
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth:0
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      xAxis:{
        labels:{
          enabled:false
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      yAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      tooltip: {
          shared: true,
          outside:true
      },
      legend:{
        enabled:false
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:false
      },
      series: [{
        data:[70,72,76,78]
      }
      ]
  }
  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    )
  },300)

  }

}

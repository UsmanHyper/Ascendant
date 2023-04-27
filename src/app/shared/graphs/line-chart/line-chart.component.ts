import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() graphData: any[];

  @Output() signal: EventEmitter<any>;

  filterSelect: FormControl;
  filterOption: any[];
  category: string;

  constructor() {
    this.signal = new EventEmitter();
    this.filterSelect = new FormControl('Today');
    this.category = 'time';
    this.filterOption = [
      { id: '1', name: 'Today' },
      { id: '2', name: 'Yesterday' },
      { id: '3', name: 'Last Week' },
      { id: '4', name: 'Last Month' },
      { id: '7', name: 'Last 6 Months' },
    ]

    this.graphData = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['graphData']) {
      this.graphData = changes['graphData'].currentValue;
      if (!!this.graphData) {
        this.showGraph();
      }
    }
  }

  ngOnInit(): void {
    // this.getData()
    // this.showGraph()
  }

  showGraph() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = this.graphData;

    // Create category axis
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = this.category;
    categoryAxis.renderer.opposite = true;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = false;
    valueAxis.title.text = "Temperature (°C) & Humidity (%)";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    function createSeries(field: any, name: any, category: any){
      var series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = field;
      series1.dataFields.categoryX = category;
      series1.name = "Temperature";
      series1.bullets.push(new am4charts.CircleBullet());
      // series1.stroke = am4core.color("#FF0000");
      series1.tooltipText = " {name} is {"+field+"} °C at {categoryX}  ";
      series1.legendSettings.valueText = "{"+field+"}";
      series1.visible = false;
  
 
      chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    let hs1 = series1.segments.template.states.create("hover")
    hs1.properties.strokeWidth = 5;
    series1.segments.template.strokeWidth = 1;

      return series1;
    }
    function createSeries2(field: any, name: any, category: any){
    
  
      var series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = field;
      series2.dataFields.categoryX = category;
      series2.name = 'Humidity';
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = " {name} is " + "{"+field+"}" + " % at {categoryX}   ";
      series2.legendSettings.valueText = "{"+field+"}";

      
      chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    let hs2 = series2.segments.template.states.create("hover")
    hs2.properties.strokeWidth = 5;
    series2.segments.template.strokeWidth = 1;

      return  series2;
    }
    createSeries("temperature", "temperature", this.category);
    createSeries2("humidity", "humidity", this.category);
    // Add chart cursor
    
    

    // Add legend
    chart.legend = new am4charts.Legend();
  

    return chart;
  }

  onSelectFilter(event: any) {
    this.signal.emit({ type: 'onTempGraph', data: event });
  }
}
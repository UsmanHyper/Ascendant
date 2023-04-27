import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-stream-chart',
  templateUrl: './stream-chart.component.html',
  styleUrls: ['./stream-chart.component.scss']
})
export class StreamChartComponent implements OnInit {
  @Input() graphData: any;
  @Output() signal: EventEmitter<any>;

  filterSelect: FormControl;
  filterOption: any[];
  category: string;
  constructor() {
    this.category = 'time';
    this.signal = new EventEmitter();
    this.filterSelect = new FormControl('Today');

    this.filterOption = [
      { id: '1', name: 'Today' },
      { id: '2', name: 'Yesterday' },
      { id: '3', name: 'Last Week' },
      { id: '4', name: 'Last Month' },
      { id: '7', name: 'Last 6 Months' },
    ]
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
    let chart = am4core.create("gases-graph", am4charts.XYChart);
    chart.data = this.graphData;

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    // let marker = chart.legend.markers.template.children.getIndex(0);
    const marker: any = chart.legend.markers.template.children.getIndex(0);

    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    chart.legend.position = "right"
    chart.legend.reverseOrder = true;

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = this.category;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = false;
    valueAxis.title.text = "ppm";

    // Create series
    function createSeries(field: any, name: any, category: any) {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      // series.dataFields.openValueY = field + "_low";
      series.dataFields.categoryX = category;
      series.name = name;
      series.tooltipText = "[font-size: 18]{name}[/]\n{name} is  [bold]{" + field + "}[/] at  {categoryX}";
      series.strokeWidth = 1;
      series.fillOpacity = 1;
      series.tensionX = 0.8;

      return series;
    }

    createSeries("CO", "CO", this.category);
    createSeries("NO2", "NO2", this.category);
    createSeries("SO2", "SO2", this.category);
    createSeries("O3", "O3", this.category);

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.maxTooltipDistance = 0;

    // Responsive
    chart.responsive.enabled = true;
    chart.responsive.useDefault = false;
    // chart.responsive.rules.push({
    //   relevant: am4core.ResponsiveBreakpoints.widthL,
    //   state: function (target, stateId) {
    //     if (target instanceof am4charts.Legend) {
    //       let state = target.states.create(stateId);
    //       state.properties.position = "bottom";
    //       return state;
    //     }
    //     return null;
    //   }
    // });


    // Prepare data for the river-stacked series
    // chart.events.on("beforedatavalidated", updateData);
    // function updateData() {

    //   var data = chart.data;
    //   if (data.length == 0) {
    //     return;
    //   }

    //   for (var i = 0; i < data.length; i++) {
    //     var row = data[i];
    //     var sum = 0;

    //     // Calculate open and close values
    //     chart.series.each(function (series) {
    //       var field = series.dummyData.field;
    //       var val = Number(row[field]);
    //       row[field + "_low"] = sum;
    //       row[field + "_hi"] = sum + val;
    //       sum += val;
    //     });

    //     // Adjust values so they are centered
    //     var offset = sum / 2;
    //     chart.series.each(function (series) {
    //       var field = series.dummyData.field;
    //       row[field + "_low"] -= offset;
    //       row[field + "_hi"] -= offset;
    //     });

    //   }

    // }
  }

  onSelectFilter(event: any) {
    this.signal.emit({ type: 'onGasesGraphSignal', data: event });
  }
}

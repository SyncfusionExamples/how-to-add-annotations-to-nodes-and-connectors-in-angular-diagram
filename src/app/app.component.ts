import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
  ShapeStyleModel, FlowShapeModel, DiagramComponent, ShapeAnnotationModel, TextStyleModel
} from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild("diagram") diagramObj!: DiagramComponent;
  public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
  public data: FlowShapeModel = { type: 'Flow', shape: 'Data' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };
  public basicStyle: ShapeStyleModel = {
    fill: '#37909A',
    strokeColor: '#37909A',
    strokeWidth: 3,
  };

  public displacement: object = { x:10, y: 10}
  
  public segments: object = [
    { direction: 'Bottom', length: 200 },
  ];

  //Assing this variable to any node annotations using hyperlink property, to link the page to it.
  public hyperlink = {content: 'Syncfusion Angular Diagram', link: 'https://www.syncfusion.com/angular-components/angular-diagram',}

  //Assing this variable to any node annotations using style property, to wrap the annotation.
  public wrapStyle: TextStyleModel = {
    color: 'Orange', bold: true,
    textWrapping: 'WrapWithOverflow' 
  }; 

  public addAntns(){
    this.diagramObj.addLabels(this.diagramObj.nodes[4], [{ content: 'Odd Number'}]);
    this.diagramObj.dataBind();
  }

  public updateAntns(){
    (this.diagramObj.nodes[1].annotations as ShapeAnnotationModel[])[0].offset = { x:0, y: 0};
    (this.diagramObj.nodes[1].annotations as ShapeAnnotationModel[])[0].horizontalAlignment = 'Left';
    (this.diagramObj.nodes[1].annotations as ShapeAnnotationModel[])[0].verticalAlignment = 'Top';
    this.diagramObj.dataBind();
  }
}

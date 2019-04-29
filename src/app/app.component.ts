import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Point, Path, Project, Raster, view} from 'paper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('canva') canva: ElementRef;

  private project: Project;
  private canvasContext: CanvasRenderingContext2D;

  private isPenActivated = false;

  private path: Path;

  ngOnInit(): void {
    this.canva.nativeElement.width = 800;
    this.canva.nativeElement.height = 600;
    this.canvasContext = this.canva.nativeElement.getContext('2d');

    this.project = new Project(this.canva.nativeElement);

    const img = new Raster('/assets/img.png');
    img.position = view.center;

    this.path = new Path();
    this.path.strokeColor = 'black';
  }

  //#region Mouse position

  @HostListener('document:keypress', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.path.closePath();
    }

    if (event.key === 'c') {
      console.log(this.path.getItems());
    }

    if (event.key === 'd') {
      this.path.remove();
      this.path = new Path();
      this.path.strokeColor = 'black';
    }
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent) {
    this.path.add([event.offsetX, event.offsetY]);
  }

  @HostListener('mouseup', ['$event'])
  public onMouseUp(event: MouseEvent) {
    this.isPenActivated = false;
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    if (false && this.isPenActivated) {


    }
  }

  //#endregion
}

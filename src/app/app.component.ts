import { Component, HostListener } from '@angular/core';
import { CursorService } from './cursor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private ballService: CursorService) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.ballService.updateBallPosition(event.clientY, event.clientX);
  }
}

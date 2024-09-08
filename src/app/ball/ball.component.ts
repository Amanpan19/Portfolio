// ball.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CursorService } from '../cursor.service';

@Component({
  selector: 'app-ball',
  template: `<div class="ball" [ngStyle]="{ top: position.top + 'px', left: position.left + 'px' }">
                 <div class="small_ball"></div>
            </div>`,
  styles: [`
.ball {
  position: fixed;
  width: 36px;
  height: 36px;
  border: 1px solid white; /* White border */
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.2s ease, top 0.1s ease, left 0.1s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ball:hover {
  transform: scale(1.2); /* Scale up the ball on hover */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5); /* Increase shadow on hover */
}

.small_ball {
  width: 8px;
  height: 8px;
  border-radius:50%;
  background-color:white;
}


  `]
})
export class BallComponent implements OnInit, OnDestroy {
  position = { top: 0, left: 0 };
  private subscription: Subscription | undefined;

  constructor(private ballService: CursorService) {}

  ngOnInit() {
    this.subscription = this.ballService.ballPosition$.subscribe(pos => {
      // Adjust position to center the ball on the cursor
      this.position = {
        top: pos.top - 18,  // Half of the ball's height (50px / 2)
        left: pos.left - 18 // Half of the ball's width (50px / 2)
      };
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

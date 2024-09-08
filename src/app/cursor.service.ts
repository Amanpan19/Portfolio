import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  private ballPosition = new BehaviorSubject<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  ballPosition$ = this.ballPosition.asObservable();

  updateBallPosition(top: number, left: number) {
    this.ballPosition.next({ top, left });
  }
}

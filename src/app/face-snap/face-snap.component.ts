import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.facesnap.snaps++;
      this.buttonText = 'oups,unSnap!';
    } else {
      this.facesnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}

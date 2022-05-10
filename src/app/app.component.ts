import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
        location: 'paris',
      },

      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
        location: 'Italie',
      },

      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
      },

      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
        location: 'paris',
      },

      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
        location: 'Italie',
      },

      {
        title: 'WHO ARE WE 1',
        description: 'WHO ARE WE 2',
        cards:
          'https://images.pexels.com/photos/163351/girl-boxer-ring-boxing-pear-163351.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        createDate: new Date(),

        snaps: 0,
      },
    ];
  }
}

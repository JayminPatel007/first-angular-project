import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedFeature = 'recipe';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBE7acBtzI_9oTAymzKCEnQc_v9AEAHFn0',
      authDomain: 'ng-recipe-book-3c75c.firebaseapp.com',
    });
  }

  featureEventHandler(feature: string) {
    this.selectedFeature = feature;
  }
}

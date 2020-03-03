import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.configureSlider();
  }

  public configureSlider(): void {
    const slider = document.getElementById('mainSlider');
    slider.style.height = window.innerHeight + 'px';
  }

}

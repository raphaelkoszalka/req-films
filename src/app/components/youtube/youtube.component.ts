import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component..css']
})

export class YoutubeComponent implements OnInit {

  @Input()
  public video: string;
  public ready: boolean;
  public url: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.ready = true;
    this.url = 'https://www.youtube.com/embed/3TW-Ls6SrXo';
  }

  public youtubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustHtml(this.url);
  }

}

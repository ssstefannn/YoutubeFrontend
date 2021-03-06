import { Component, OnInit } from '@angular/core';
import { Video, VideosJson } from 'src/DataJson';
//import data.json from src folder
import videos from '../../data.json';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit { 
  videos: VideosJson = videos;
  videoRows: Video[][] = [];
  ngAfterContentInit() {
    this.videoRows = this.videos.videos.reduce<Video[][]>((result, video, index) => {
      if (index % 4 === 0) {
        result.push([video]);
      } else {
        result[result.length - 1].push(video);
      }
      return result;
    }, []);}

  constructor() { }

  ngOnInit(): void {
  }

}

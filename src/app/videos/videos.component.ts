import { Component, OnInit } from "@angular/core";
import { Video } from "../video";
import { YoutubeService } from "../youtube.service";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.getVideos();
  }
  getVideos() {
    this.youtubeService.getVideos().subscribe(videos => (this.videos = videos));
  }
  onSelect(video: Video): void {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }
}

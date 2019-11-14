import { Injectable } from "@angular/core";
import { Video } from "./video";
import { VIDEOS } from "./mock-videos";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  constructor(private messageService: MessageService) {}

  getVideos(): Observable<Video[]> {
    //this.messageService.add("YoutubeService: fetched videos");
    return of(VIDEOS);
  }
}

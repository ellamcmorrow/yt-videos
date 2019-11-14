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
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(VIDEOS);
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { VideosComponent } from "./videos/videos.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { MessageService } from "./message.service";
import { YoutubeService } from "./youtube.service";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, VideosComponent, VideoDetailComponent, MessagesComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [MessageService, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideosComponent } from "./videos/videos.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "videos", component: VideosComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: VideoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { BallComponent } from './ball/ball.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FooterComponent,
    ProjectsComponent,
    BallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeferLoadDirective } from './defer-load.directive';
import { ProjectsComponent } from './projects/projects.component';
import { DividerComponent } from './divider/divider.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    TimelineComponent,
    DeferLoadDirective,
    ProjectsComponent,
    DividerComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

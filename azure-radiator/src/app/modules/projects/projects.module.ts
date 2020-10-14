import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';

const components =[
  ProjectComponent,
  ProjectsComponent
]

@NgModule({
  declarations: [
    ...components,
    CardComponent
  ],
  exports:[
    ...components
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProjectsModule { }

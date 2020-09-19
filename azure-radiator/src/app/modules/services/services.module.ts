import { ProjectModel } from './shared/models/project.model';
import { AzureService } from './shared/azure-service/azure.service';
import { AzureProjectService } from './shared/azure-project-service/azure-project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './shared/http-service.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

const exportServices = [AzureProjectService];

@NgModule({
  declarations: [
    AzureProjectService,
    AzureService
  ],
  exports: [
    ...exportServices
  ],
  providers: [
    HttpService,
    ...exportServices,
  ],
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    HttpClientModule
  ]
})
export class ServicesModule { }


import { ProjectModel } from './../models/project.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-service.service';


@Injectable({
  providedIn: 'root'
})
export class AzureProjectService {

  constructor(private client: HttpService) {

  }

  public fetchProjects(): Observable<ProjectModel[]> {
    return this.client.getMany<ProjectModel>('projects');
  }
}

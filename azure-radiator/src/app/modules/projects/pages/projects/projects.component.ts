import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { AzureProjectService } from "src/app/modules/services/shared/azure-project-service/azure-project.service";
import { ProjectModel } from "src/app/modules/services/shared/models/project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {3

  projects: ProjectModel[];

  constructor(private service: AzureProjectService) {}

  ngOnInit(): void {
    this.service.fetchProjects().subscribe((data: ProjectModel[]) => {
      this.projects = data;
    });
  }
}

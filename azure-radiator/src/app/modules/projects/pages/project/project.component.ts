import { Component, OnInit } from '@angular/core';
import { AzureProjectService } from 'src/app/modules/services/shared/azure-project-service/azure-project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private service: AzureProjectService) { }

  ngOnInit(): void {
    
  }

}

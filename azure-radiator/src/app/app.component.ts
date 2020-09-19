
import { Component } from '@angular/core';
import { AzureProjectService } from './modules/services/shared/azure-project-service/azure-project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure-radiator';

  constructor(private service: AzureProjectService) {
  }
}

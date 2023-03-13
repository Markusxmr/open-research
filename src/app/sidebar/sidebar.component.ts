import { Component } from '@angular/core';
import { DataService } from '../core/providers/http/data.service';

@Component({
  selector: 'open-research-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  companiesMap = new Map();
  companies: any[] = [];
  persons: any[] = [];
  mockServer: any;

  constructor(mockServer: DataService) {
    this.mockServer = mockServer;
    const output: any = {};
    mockServer.getCompanies().forEach((item) => {
      const [companyName, teamName, personName] = item.name.split(' / ');

      if (!output[companyName]) {
        output[companyName] = {
          companyName,
          team: [],
        };
      }

      output[companyName].team.push({
        companyName,
        teamName,
        personName: personName || null,
      });

      return output;
    });
    this.companies = Object.keys(output).map((key) => {
      return output[key];
    });
    this.persons = mockServer.getPersons();
  }
}

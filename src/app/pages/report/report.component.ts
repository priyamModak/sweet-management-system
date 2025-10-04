import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportType: string = 'weekly';
  startDate: string = '';
  endDate: string = '';
  reports: any[] = [
    { date: '2025-10-01', total: 100 },
    { date: '2025-10-02', total: 150 }
  ];

  get filteredReports() {
    // Placeholder for filtering logic
    return this.reports;
  }
}

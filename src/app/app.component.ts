import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gsheet } from './models/google-sheet.model';
import { GSheetTab } from './models/gsheet-tab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hospital Beds India (Covid 19)';
  gsheetId = '1V2Xkk1XhU2nP88ZxZdjex5Y_SjhJZSSh90KIiWAT_vM';
  gsheetTabId = 'omfdne';
  gsheetUrl = `https://spreadsheets.google.com/feeds/worksheets/${this.gsheetId}/public/full?alt=json`;

  gsheetData: Gsheet;
  gsheetTabData: GSheetTab;

  search =''
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get(this.gsheetUrl).subscribe((next: Gsheet) => {
      this.gsheetData = next;
      let gsheetTabUrl = `https://spreadsheets.google.com/feeds/list/${this.gsheetId}/${this.gsheetTabId}/public/full?alt=json`;
      this.httpClient.get(gsheetTabUrl).subscribe((next: GSheetTab) => {
        this.gsheetTabData = next;
        this.sortTabAsec();
      })
    });
  }

  toggleSate = false;

  sortTabAsec() {
    this.gsheetTabData.feed.entry.sort(function (a, b) {
      return parseInt(a.gsx$numpublicbedshmis.$t) - parseInt(b.gsx$numpublicbedshmis.$t);
    });
  }

  sortTabDesc() {
    this.gsheetTabData.feed.entry.sort(function (a, b) {
      return parseInt(b.gsx$numpublicbedshmis.$t) - parseInt(a.gsx$numpublicbedshmis.$t);
    });
  }

  toggleSort() {
    if (this.toggleSate) {
      this.sortTabAsec();
    } else {
      this.sortTabDesc();
    }
    this.toggleSate = !this.toggleSate;
  }

  get getTotalBeds(){
    let totalBeds =0;
     this.gsheetTabData.feed.entry.forEach(obj => {
       totalBeds = totalBeds + parseInt(obj.gsx$numpublicbedshmis.$t)
     });
     return totalBeds;
  }

}

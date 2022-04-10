import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/_services/download.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownLoadPageComponent implements OnInit {
  downloads = [];
  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
    this.loadAllDownloads();
  }

  private loadAllDownloads() {
    this.downloadService.getAllFile()
      .pipe(first())
      .subscribe(downloads => this.downloads = downloads);
  }
}

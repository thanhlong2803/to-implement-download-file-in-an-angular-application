import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'src/app/_services/download.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/_components/_comfirm/comfirm.component';
import { AlertService } from 'src/app/_services/alert.service';
import { DownLoad } from 'src/app/_models/download.model';

@Component({
  selector: 'download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownLoadPageComponent implements OnInit {
  downloads = Array<DownLoad>();
  loadingPopup: any;

  constructor(private downloadService: DownloadService, private dialog: MatDialog, private alertService: AlertService) { }

  ngOnInit() {
    this.loadAllDownloads();
  }

  private loadAllDownloads() {
    this.downloadService.getAllFile()
      .pipe(first())
      .subscribe(downloads => this.downloads = downloads);
  }

  onClickDownload(dataItem: DownLoad) {
    this.alertService.clear();
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: {
        Title: 'Comfirm',
        Message: `Are you make sure download file?`,
      },
    }).afterClosed().subscribe((result) => {
      /* result is a string:Yes,No,No answer*/
      if (result == "Yes") {
        this.downloadService.download(dataItem);
        this.alertService.success('Download file successful', true);
      }
    });
  }
}

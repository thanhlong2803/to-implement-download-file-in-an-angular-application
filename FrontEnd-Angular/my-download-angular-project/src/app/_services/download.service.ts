import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DownloadService {
    private apiUrl = "https://localhost:7049";

    constructor(private http: HttpClient) { }

    getAllFile() {
        return this.http.get<DownLoad[]>(`${this.apiUrl}/DownloadFile`);
    }

    downloadFile(id: number) {
        return this.http.delete(`${this.apiUrl}/downloads/${id}`);
    }
}   
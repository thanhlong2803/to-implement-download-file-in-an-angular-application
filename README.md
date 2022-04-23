

# Download files in angular
Angular 8 - Download files in angular Example.

 - **The project** and **structure** of the example mostly follows the best practice and improve codes.
 - **The project** structure has a folder per feature (Page Home within one button download file) while order share / common code (**services, models, content, components & helpers**) is placed in forder let easy build or hande **Design Pattern**. 
 - The path alias '@' has been configured in the **tsconfig.json and webpack.config.js** the maps to the '/src/app' directory. This allow import to be relative to the '/src/app' folder  by prefixing the import path with '@' removing the need to use long relative paths **like improt '.....'**
 - Now, We are build project structure:

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/1.png)


Below is all the tutorial project code along with brief descriptions of each file to explain how it all fits together.
## Alert Component Template and Alert Component ,  AlertService Service
***Path: /src/app/_components/alert.component.html***
The alert component template contains the HTML for displaying the alert message template designed.

     <div  *ngIf="message"  [ngClass]="message.cssClass">{{message.text}}</div>


***Path: /src/app/_components/alert.component.ts***
The alert component passes alert messages to the template whenever a message is received from the alert service. It does this by subscribing to the alert services getMessage()  method which return an observable.
  
  ![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/2.png)


***Path: /src/app/_service/alert.service.ts***
The alert service allows a show display results of success and  
waring. It can show allow designed page html (show on top and show on the bottom and left, right).
Function **getAlert()** method that return **Observable** should is used by the alert component to **Subscribe** pass notifications for whereever a message should be displaying.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/3.png)
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/4.png)

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/5.png)

Finally, We can put  `<alert></alert>`  for **app.component.html**. It will show displaying an alert message when changing data.

## Confirm component and loading component
_**Path: /src/app/_components/_confirm/confirm.component.ts**_
_**Path: /src/app/_components/_loading/loading.component.ts**_


What is the confirm component and why it use ?
The confirm component is show notification above have the message "Are you sure....?" and we always chocies 2 answers yes or no. Should use to help us confirm answers.
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/6.png)

What is the loading component and why it use ?
The loading component after submitting the handle event shows the loading. It not allow multiple clicks and can double data. 
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/7.png)

## Download Service

The download service contains  **Get all data file and Download file methods** for managing, It acts as the interface between the Angular application and the backend API.

 - **Backend API**

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/8.png)
We are create a sample project **ApiDownFile** . In controller we have two function **Get() method** and **DownloadFiles() method** 
We are creating a sample project ApiDownFile. In controller we have two function Get() method and DownloadFiles() method.

**Get() method** lets me get all data and it created a data dummy. Model DownloadFile contains many fields Id, Name, Extension, Type.

**DownloadFiles() method** handle download return byte.

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/9.png)

 - **FrontEnd API**
***Path: /src/app/_service/download.service.ts***
The user service contains a standard set of (**getAllFile() and download()**) methods for managing users, it acts as the interface between the Angular application and the backend api.
![enter image description here](![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/10.png))

**This.apiService.postFile() and CustomApiService.downLoadFile()** 
**This.apiService.postFile()** call api return byte.

![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/11.png)

**Blob** :
![enter image description here](https://github.com/thanhlong2803/update-image/blob/main/image1/12.png)
While  `ArrayBuffer`,  `Uint8Array`  and other  `BufferSource`  are “binary data”, a  Blob represents “binary data with type”.

That makes Blobs convenient for upload/download operations, that are so common in the browser,can work with  `Blob`  natively, as well as with other binary types.

We can easily convert between  `Blob`  and low-level binary data types:

-   We can make a  `Blob`  from a typed array using  `new Blob(...)`  constructor.
-   We can get back  `ArrayBuffer`  from a Blob using  `blob.arrayBuffer()`, and then create a view over it for low-level binary processing.

Conversion streams are very useful when we need to handle large blob. You can easily create a  `ReadableStream`  from a blob. The  `Blob`  interface’s  `stream()`  method returns a  `ReadableStream`  which upon reading returns the data contained within the blob.

**Finaly**,  
saveFile(blob, fileName) method : We are installing **npm i file-saver** for application angular. after install use  import { saveAs } from 'file-saver'.blobContent file content as a Blob and fileName name file should be saved as.



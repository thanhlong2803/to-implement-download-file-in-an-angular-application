

# Download many file in angular
Angular - Download many file in angular Example

 - **The project** and **structure** of the example mostly follows the best practice and improve codes.
 - **The project** structure has a folder per feature (Page Home within one button download file) while order share / common code (**services, models, content, components & helpers**) is placed in forder let easy build or hande **Design Pattern**. 
 - The path alias '@' has been configured in the **tsconfig.json and webpack.config.js** the maps to the '/src/app' directory. This allow import to be relative to the '/src/app' folder  by prefixing the import path with '@' removing the need to use long relative paths **like improt '.....'**
 - Now, We are build project structure:

![enter image description here](https://lh3.googleusercontent.com/iN0zqaDD4eKGC0VZjpfRvOidsNdVljuK_y7gB7UQZv_--81qiZ-3onzP7UAJMTSy5_1B3bqKQQ4Ozl_HGe_65z_ikgxnMoZ-2osIsbIE4l-ax3at6q3uARwyY2xbdhPmTOaI-29Ys4lIPhG2L9ER9YCEheP5zcl9eaAF-MZJ8YKNpqa4NpF_-0vspf1T5f87UB8P2ZtDbcVDLXmu-hvuzPe4QAbeB-_CvTEAZEteuVdIHuSQ6UjZfLJeETdYr8ViiuMIVuPCkJA2PDlZklZgVxt62XfXIakpCSbTbHGWm3Dle6RjV2voPRhnNPLENPl45ylkExq7TlbvFDglaaREffpOvJRxbadAwuirM-mVbfFH8Os5v5hFqkUOKaTQNaV066-OK8l__bgIt8QTmCLjRid3owz5bulB3098ww4yrJecwGzInwpEnnd_ir5_9kJslAhA0ZL1qtpl5C_EU2elu8EiM2SXMri5m5f9-S2aujO76jhs2CVc6bPpmari8yr7scFMYMESPlG-37-dlAEkmlzQaP14pgBKqjP5PQ7gLj8NeaFU40PCcfpr-CmgslIxyOwN-KdYCPlVY6UaP8A0c4E1zqHzMrPmLxoYG2LJE9Yin8CALppIFDt3M1gq9oMOnziAqNH7Z3_-Np_K94yTMbTsuvz8ZHBvMH2GHb3B48nhgicgcaaGxBumo5FjJjo_XcDvGWmO50mZmmv8Af36UTGS4U7O8U0f4Z1dxTS--Uh2BpltFpxZzj0NO4dgTg=w262-h384-no?authuser=0)
Below is all the tutorial project code along with brief descriptions of each file to explain how it all fits together.
## Alert Component Template and Alert Component ,  AlertService Service
***Path: /src/app/_components/alert.component.html***
The alert component template contains the HTML for displaying the alert message template designed.

![enter image description here](https://lh3.googleusercontent.com/j4NebTrs3aRc8a-jBxAReW8ieJ20A8qcnqkvrOr6C5BjduJCIA89p-WC5ZuBqTqCaBzAFLseAKBhXA3L4tKF0LCaGIf0y25EVrcdzGIuurqmiVqZ87fQSr5nuXiyXRfrYhr1tosN_DEktf0WH0WaN6dPeiXisqumLlGfOxvurlh_nKyMWz4EuJy77x2nbOcbykP_aahRZ-3CDuR14Icv5ahhVrhfapGLBKfDwsv12LDA9EPIulyI-Hz9GngBAMgVcl01zvUIxD7h3K8mG_dMey0Dbh-iQrGofXlSUrId8ETlFMSAXEP4HnRe8-xfJstQUub4syB9X6Ab5OlNa4RxlFLsQKXlafVrujA9PRLNx4wQghNwthSf8Qton2tOgQSdEd6pD60b6HuuklCUKH2WEyR7Qk-1-AcoVqHHbon3hkDw0LQkTzMAkJ5bV7C2ax3Dki6SumF6sf3SsNWcZaMMZuRw5LaRWopjmX3GzfiGg4W7tPa0Id8X5WHp3wxRRBwbjH0quuigljlSYTow8nARIVyj6QoBI_TTMP_OU1GdaGXYIjsOXo3zVsW3cM9jWqvqMZ3rXzUW3aHG3EzVplkf-jkGDoqPo1-VC79fbJX8k8Ha0THvLbKALnYHy8BGC1fvoqSW0lCh_Pt50AUlafDrXIZtMvnnc_PEHxMeb72hvEYhCycWhFNioi-kHZIXVMYOeRRf8QHyhxyIUzH7iCZuQz_eOloGKI2xRk3guUiCFhDodPI2CTns56xwX_4utQ=w2454-h218-no?authuser=0)


***Path: /src/app/_components/alert.component.ts***
The alert component passes alert messages to the template whenever a message is received from the alert service. It does this by subscribing to the alert services getMessage()  method which return an observable.
  ![enter image description here](https://lh3.googleusercontent.com/rrV52ZcSPMC1R0XkNwCiNCNERfzn40F6zuZjWwJyMKPh_Sjae_gQ7owa9LflIGWgChlHBOo-FubcSeA0lHYT1irVG5KXJyE86ZmHQD5M2CRuZPAGgcN4vP1pWKvwma1gI2fWvkNTh622d10KJKB98JlqC38U141Xy7xG0cNWvJ3IFZgE5R6Ahoq_VZDrpFQuo8kwZYm6zkC6tMfHgz5Uidqj6ZETYrPc6jXwnNwmTx_Xra-zg9r0i0WidxM0leBTrPjE0zTnTRXz6J11YeE2HFLaM0Mfji4VEjqg_IohK0-xrNnNc2MWD46wZKk86LM57fNwAhzJ_sNT_PEjCitfnHJFruA3OHgzydQdZM78B2K7XlNq_MLEVFMN5blzKIP90qWdnUlhwIIVAIS8HpiAN8Orpb6-w2pUgN7XF8K0qiih6YFiufeDNspupPZre854Ipv80_eDQo5AsXWTLLIq9ElqelX_AkKG41Mu7R24rosFYRWjSl9YUkHAoYqr0cRYDCpB0_5fipjo_6MJdRLJ2MIUKWrVk_Z75ovnMGGg9Tn94PnsckKSggWESoa5t4o-WOMFb32rmoXnRf0frcKDS_S_0T4-_FBe4eI-jEbSva3dfYLSllXUEJ9t8OGPvsgxb_HiKmhTIMeB6xBBhs5HYPV-wBPurxePyRnHs5pj4RrPCdw9XBE_6tmTv9C_6lHi24NOK1_Io_oHQsapDP211oMrIDgH3PsCISrWnJI56CMsdI3tzCcFlqE7cs3_Rw=w1214-h1142-no?authuser=0%22%29,%20url%28%22https://lh3.googleusercontent.com/rrV52ZcSPMC1R0XkNwCiNCNERfzn40F6zuZjWwJyMKPh_Sjae_gQ7owa9LflIGWgChlHBOo-FubcSeA0lHYT1irVG5KXJyE86ZmHQD5M2CRuZPAGgcN4vP1pWKvwma1gI2fWvkNTh622d10KJKB98JlqC38U141Xy7xG0cNWvJ3IFZgE5R6Ahoq_VZDrpFQuo8kwZYm6zkC6tMfHgz5Uidqj6ZETYrPc6jXwnNwmTx_Xra-zg9r0i0WidxM0leBTrPjE0zTnTRXz6J11YeE2HFLaM0Mfji4VEjqg_IohK0-xrNnNc2MWD46wZKk86LM57fNwAhzJ_sNT_PEjCitfnHJFruA3OHgzydQdZM78B2K7XlNq_MLEVFMN5blzKIP90qWdnUlhwIIVAIS8HpiAN8Orpb6-w2pUgN7XF8K0qiih6YFiufeDNspupPZre854Ipv80_eDQo5AsXWTLLIq9ElqelX_AkKG41Mu7R24rosFYRWjSl9YUkHAoYqr0cRYDCpB0_5fipjo_6MJdRLJ2MIUKWrVk_Z75ovnMGGg9Tn94PnsckKSggWESoa5t4o-WOMFb32rmoXnRf0frcKDS_S_0T4-_FBe4eI-jEbSva3dfYLSllXUEJ9t8OGPvsgxb_HiKmhTIMeB6xBBhs5HYPV-wBPurxePyRnHs5pj4RrPCdw9XBE_6tmTv9C_6lHi24NOK1_Io_oHQsapDP211oMrIDgH3PsCISrWnJI56CMsdI3tzCcFlqE7cs3_Rw=w327-h308-no?authuser=0)
    

***Path: /src/app/_service/alert.service.ts***
The alert service allows a show display results of success and  
waring. It can show allow designed page html (show on top and show on the bottom and left, right).
Function **getMessage()** method that return **Observable** should is used by the alert component to **Subscribe** pass notifications for whereever a message should be displaying.
![enter image description here](https://lh3.googleusercontent.com/UinvE71g4TOf2i0wLlvHTdfZ1H2c1EvHC-i3C3RLowvrp9fBjHtGnTUaEzuPmDCTcR_FBiNQ2rfSSCe6282hjx8F3f9HUnDuP1tIuEKnhCmY8a4rh32jofaICB8cEvtas3PgSJZQzJkYq26svRrdLToxeYjReegRgjwyhfKp3FX3a63eokIzTRFbac5GiIAlCN6x1XB2sM6NuUWkPW_UwnDxE2mFGF6CHtS7sgxta59Fyv-CK1ypjn1nji5NS4kEE9D8UAnEaLln7Dy2jjEGg03IuQSNYsrQOAbdsAgXU5T9vmsB4XLbeiLpelimZLTt092C3GbWUydWAnqCTT1yn4YPxyIDEn2U-qeP-OrhQkZS0Ksr3GJEC4VSmoxD39C_NPWslaByApbl6X7jqwFgt-TDE2xL3igGZ9gkVtxylEUvOcNFgUYYdZzC7-zfjm3ttx2LtLt6jkXKyDtLB6qsqstLlnIZCmzOmTFH9yZe3MDYNjWtwK2lqhWmk-zXiis9guea-EfP5QLru4SbtbiyqS9adP3kkSxuKwJ7rxCJQviIjaEdCY58UUMzJ2d3No_jcnG0exzjAqwlGb8pjCKCHVtcb8YrQ0WlQqzdkTzrUuuh7389_PWoOqlUoC6OgmtFt0me1dIQBlqsyPwjF-8jWIm9Ks5hQmLLBgitiTvCwDo1EhOxIIx2Ddw_0ZXF3vu9lVm8cD9VOXoS1Ovb8oLjp9t1V35g2nfqa8XRcpxPK33ojOWp5Hx0ZuzRjGzrdw=w538-h384-no?authuser=0)
![enter image description here](https://lh3.googleusercontent.com/MpZBu593h58lMJZKwqRCJ7rMkUIgG_D-AnrVV67ppGR2sRTQie5D6lCR2toHVAcK1KA8BxlFUZlWMiD1_obyrzdR0UUmiHvq5Y3vbSKtkGYtRd-piuJFPedAPlQd7lxpsKUTSsYyJN7W5v5-5bNs2TuTDnUX_o5nFQSSAUZeLoku1cLR1jqjhAlaLTo1CWFOyrAeawSnG678c2T-lBejgWzm718w5CXmvAXyZaPUeKhnb1GBrdfqHP6FxCztNrjU9d1cDuJ3DnTEg8aOQFvGK35hOUNs-zU-Dl853A7-fSugot9ldG9oJh7gqpI1n1-LotNI4vszkPX8sNpya7yYjd6iXrrRf88baou6B7nIS3w_RuzJBUw3TxVzzOreo61pLEyhLaGIWvca1J0-WP81cI7OlK5JID4sQvnddoSys1BfpsJJ-fc_K-3Tnhh7FY8l2GiYy_QVbZzeL2WiLRUUE6aqmojU_vpeid0D-48AQ-t3QrJAngsI5hFCleFwyljXvZRmt6PZm35CSqwk3l4vtcGf7bICZK6r-GjAzBOCyfqbGay55q6ToMdqB3ecLPhWch4AkrwZ3Y8XiruRg6mZP_cFLVggTGiPJ4W_LLvADhxNPiIka7Pu0oaT_A3ECRoFlCQ8r8W2o7JOPG9Ns7nZliGRctgNrES0tyTBhswwGxOTTYJzcTuNjw7_XIswLS7MEy_Dg-GmANTUlMq678dqXowuBPDmW_UC6eixeJXfjyvtvGh3SyELMTlCZhUZoQ=w576-h384-no?authuser=0)

![enter image description here](https://lh3.googleusercontent.com/Hka_vxySq7fnEbKAwxtKSfe8CoYCCnI1m6yU0XuXI5lUKd0Csr4P1h6xBoVtjy4PCt53B3GEIZSl85IoANfSiPWnWhAHomDiMD31GhPg6Gh2aIk_NSy1BtPEw6A4Ug8LAlp-psH3Z2l5nj0QLXSJO8WH0D7oGYE84oEkNoKlFAapYXvnMF1-W5Ym0JODkphywHpq2w4sCuMqYVUmrm246qKQ52jDzwDgbFUxw5tzMTFRW5Ospfd-LowE0wIJkNu8zDAlw5g7pE1K0aFYhdc2D-yEihmjel-ThMpJSfSKz93cjGyEPRcWLCemG8OyF1wI0FziS-xKYUT28bcqI7sY0sDigmIxvdgSJHbN8xA8pnxzERRRaMTfMLoHN_r-oorIjnil56e7XuCfN2RVAvwFLOel7kqLSUAjkmPe4Vq2BYet3jcdd4xrh1T1cJk9CH9bttNWYWVbEjtt9Ixv5ac8q_5hOCQC65nk8tmc8sNRwQoxZVy6Z7Gn0TZvo4d7ZxvM5SknpPtRpZ5vkp3IlkVC1qoAEvXpMs1Pzlniiu5jYKgHZQgjP8SlrRKKNM02MUZf6muB5hisoaYmQ5Zq75Ju0PFQUq80uHAjsJOrkyAeBBOeJoOBHt6VT9PArkUlaI26A9I7ZHwsgUe3EximxpFj1fDYBnMaXxX_4bMQ3SWF_7hlMlRYjnzXI5cME4KnUlj7QU7u1le382fqn2iM9XTR_6coFlyetzFSNwr4bacJ2vb7wz6T8FVuaVT7LM75Sw=w818-h300-no?authuser=0)

Finally, We can put  `<alert></alert>`  for **app.component.html**. It will show displaying an alert message when changing data.

## Confirm component and loading component
_**Path: /src/app/_components/_confirm/confirm.component.ts**_
_**Path: /src/app/_components/_loading/loading.component.ts**_


What is the confirm component and why it use ?
The confirm component is show notification above have the message "Are you sure....?" and we always chocies 2 answers yes or no. Should use to help us confirm answers.

What is the loading component and why it use ?
The loading component after submitting the handle event shows the loading. It not allow multiple clicks and can double data. 


## Download Service

The download service contains  **Get all data file and Download file methods** for managing, It acts as the interface between the Angular application and the backend API.

 - **Backend API**
We are create a sample project **ApiDownFile** . In controller we have two function **Get() method** and **DownloadFiles() method** 
We are creating a sample project ApiDownFile. In controller we have two function Get() method and DownloadFiles() method.

**Get() method** lets me get all data and it created a data dummy. Model DownloadFile contains many fields Id, Name, Extension, Type.

**DownloadFiles() method** handle download return byte.

![enter image description here](https://lh3.googleusercontent.com/T7S-SuGwg3B5NdZF2S3c8TPPyGUgEvkHb1y9D3kwga4M0X-5A-NG9XSRrjJYeYnlo-5yIwG2OGHZPdM3U4ShM4TYVzFX9ti0YUcZ1YlzD-zXcponltMh_lwc4uVB3jqDEW9L4JCKCZW7OiDp5k3kYZs7Sw48l1IzODWiG66UIUpxT1P07_XoKshMTmuhS6hCvMuTJh9Ycrqk2pk_qVH9HzUqdDVb_3iZt0uywYCNizZXDq5l6gwIeS49OQuPn9FKMe1mMnBoC9kEipfBT-aEt_tdH_bRPviWrYNZOnhj7H0EJJBvWZSYqrnaIKs3-LJrnti6dLsUEEpzBrcetXajk-LVmmQaofO7fvS7oMxHH_rcpH7gwWeDsa_BacUhfh4G_qPS0Op3raALZmkB-Pj5Ah6P8EVyp1S9lX82oez-OV3fCyKMl5uUluggoyARQzBNhT-fKGWO4ZUzWKjc4lR9G0A6d0D74S6jqCL2l4tze62v0a6gu6j5c0AyYz3kfhDH7pmAw0m3mSZRGIlENom-Luwqdkz5RZb7DIOMWWmju4kQR5kPI7-UqRsq1zfic10ZOj_sx6jYDvNMrt9go56aVxYwdTJHYfA-O9XgsRKC9W61yNX0SxRP_PgrBvKaqetCQzu21nGc5wcB8RTD4xFi0DwxGKfYf6sNNvsZR0aDXQghgz8FNtToX7OYWpoaLbxgt71TTMDX42mU3FQFP3owJXtrG9yJeKQBLYEkdKZ7c-TLNTcb5SRC1DGMsgrZuw=w836-h384-no?authuser=0)

 - **FrontEnd API**
***Path: /src/app/_service/download.service.ts***
The user service contains a standard set of (**getAllFile() and download()**) methods for managing users, it acts as the interface between the Angular application and the backend api.
![enter image description here](https://lh3.googleusercontent.com/yRiLw7pqEvLvC22r6Ou4IUmSs_BGYllmxajoiNHWJQ99Sb_iQ0qeKwesuMn_KhZVrBEahEfIdysoqpSfWYN8hQN2vkqiKHgxWRw70CcodKhp5FAAbCASY_1NdsED_ScC2U0YgOWVT9sE-OCVIabzCA5A9R4hi4OnEc9xtqHBVfmRo5l8tmSusmzbEM_CsSkxlAlQZmy6fyS-_PmpRVP0FYJsfkToy_aJrM8fwxCkGewyxaCoayYQT-DTpI0pZG36ZfNw-3M-2VB-pwRi2norjvIj1G0xH6uC3UnbWvD2fhaJXMKdJPnoNI6mmgLBpqnXwIiDIJjzrfH6Xx4eJP_QVG6HVfs7CQDScaBsgtB_X8Vl5phkrdKBo6-hL_SIg6O_r56RGw-hec7Dex4mWs9bUZqeOGsT3B0DEv0tdeuG7ms78qheEiYsRapMvbxhxz12gRDGNbcfkMYlC3k8eCcklmb0DG00jcVjeyjG2W-Zv_WCu2iEMogYaQMx7HvSSkwUVVB2IjalMLHpNdkSCrYsfmQFV4p4BkHRpKY2auERNw5dobAFGInM36lhesOq2xG5h7zSQyrqvKpN5EGQiJiJTwChYgK3CiZGhxXdi1pe1AOinS0I5flNtByIz_4uiA30KoH_M4MOwqaP8G-mPkWo7xHZsLOs8Kfga6lbi10esbsVOIYKf0sNJW55QIqRfV-_IVoY1tcbhVg5moHyxTeCttdog4ST5zwX2Q-QqGF9KwS8DZBnAGSG3pALsfGdxw=w582-h386-no?authuser=0)

**This.apiService.postFile() and CustomApiService.downLoadFile()** 
**This.apiService.postFile()** call api return byte.

![enter image description here](https://lh3.googleusercontent.com/Qq0fpYm2A_vK735RorY77kmtwHnABkgW6XuR6mYPQOGE_qC-de6KIK2lpr6r295tU7_Mz6O2YNGXpCrJQlUkte4k3Qs13pFALriEzJPozz6K0rUEoOlJ23gAkIHH2YjryDKr7-Y-vCMe1zzYytOjzEadSlXhkfez6Ka6lNH7iboOiG7WK7NxCLOs_KcNFZUO1eEw6JWPFC3-oC9V6jNqVx179x0CqvgwF3Bx1b39Yzpt-Mc83g7bguK2ZR0W7LNcJ1rz1b0h4ZEKh51LinVvPZWFKFBpV9oDUKoDjLY6b_7OI3CcVlZeMUX2XhfwvwgpDQa3WHgstPdwUpURGa0F3vtu5tIYMLu_kLtOqXdJwKaqR7FPqpO_Dk-1pdHD9zGygzIiAmr5DE5JvvjCWyWijCu2Z56H2CgiuKnjOs-5wJcpQ4HOSubzWQ4-UtFs5csuCEqHU6BWCsXKRDr-E-GFajEHU6pHPnSXJ3PjvtU30opQ5tLVHj0nCK-aPPswPL_PZsFgMgQfqj5w3Uz3zWE71iQ7sxINGc2JruWBBYZrWz_6clkbJRVbX7xkqz5gNtZZixPHoueotacXoy0zYezXVUwzwFw6t6BhIZW-qQTN6uJmPksNZbcv3xl1UIfU1TZTy5e_RlD98ongBO94k3I-WzLb89lmLx_GQMVDl8ApLHeDqNdrjYF2L8Jt-jLlptLJR7iysLTeg5ilJRurivf5IGq5jW75FfClIO-kfMk_KU1ulKNkUUeBawpyCpt0cg=w540-h384-no?authuser=0)

**Blob** :

While  `ArrayBuffer`,  `Uint8Array`  and other  `BufferSource`  are binary data, a  Blob represents binary data with type.

That makes Blobs convenient for upload/download operations, that are so common in the browser,can work with  `Blob`  natively, as well as with other binary types.

We can easily convert between  `Blob`  and low-level binary data types:

-   We can make a  `Blob`  from a typed array using  `new Blob(...)`  constructor.
-   We can get back  `ArrayBuffer`  from a Blob using  `blob.arrayBuffer()`, and then create a view over it for low-level binary processing.

Conversion streams are very useful when we need to handle large blob. You can easily create a  `ReadableStream`  from a blob. The  `Blob`  interfaces  `stream()`  method returns a  `ReadableStream`  which upon reading returns the data contained within the blob.

**Finaly**,  
saveFile(blob, fileName) method : We are installing **npm i file-saver** for application angular. after install use  import { saveAs } from 'file-saver'.blobContent file content as a Blob and fileName name file should be saved as.



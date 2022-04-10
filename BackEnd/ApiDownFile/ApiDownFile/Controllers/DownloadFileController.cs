using Microsoft.AspNetCore.Mvc;

namespace ApiDownFile.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DownloadFileController : ControllerBase
    {
        public DownloadFileController()
        {
        }

        private List<DownloadFile> DownloadFiles()
        {
            var downfiles = new List<DownloadFile>()
            {
                new DownloadFile() { Id = 1, Name = "PDFFile" , Extension = ".pdf" , Type ="application/pdf"},
                new DownloadFile() { Id = 2, Name = "ExcelFile" , Extension = ".xlsx" , Type="application/vnd.ms-excel"}
            };

            return downfiles;
        }

        [HttpGet(Name = "GetDownloadFile")]
        public ActionResult<IEnumerable<DownloadFile>> Get()
        {
            return Ok(DownloadFiles());
        }


        [HttpPost("DownloadFiles")]
        public ActionResult DownloadFiles(DownloadFile downloadFile)
        {
            var myfile = System.IO.File.ReadAllBytes("wwwroot/Files/" + downloadFile.Name + downloadFile.Extension);
            HttpContext.Response.Headers.Add("content-disposition", $"attachment; filename={downloadFile.Extension}" + DateTime.Now.Year + downloadFile.Extension);
            Response.ContentType = downloadFile.Type;

            return new FileContentResult(myfile, downloadFile.Type);
        }

    }
}
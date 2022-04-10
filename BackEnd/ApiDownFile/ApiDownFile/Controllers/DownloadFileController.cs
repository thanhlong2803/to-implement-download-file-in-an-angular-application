using Microsoft.AspNetCore.Mvc;

namespace ApiDownFile.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DownloadFileController : ControllerBase
    {
        private List<DownloadFile> DownloadFiles()
        {
            var downfiles = new List<DownloadFile>()
            {
                new DownloadFile() { Id = 1, Name = "filePDF" , Extension = "pdf"},
                new DownloadFile() { Id = 2, Name = "ExcelFile" , Extension = "xlsx"}
            };

            return downfiles;
        }

        private readonly ILogger<DownloadFileController> _logger;

        public DownloadFileController(ILogger<DownloadFileController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetDownloadFile")]
        public IEnumerable<DownloadFile> Get()
        {
            return DownloadFiles();
        }

    }
}
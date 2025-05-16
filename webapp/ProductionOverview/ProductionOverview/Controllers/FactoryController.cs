using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductionOverview.Models;

namespace ProductionOverview.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FactoryController : ControllerBase
    {

        private readonly ILogger<FactoryController> _logger;

        public FactoryController(ILogger<FactoryController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        public IActionResult Add([FromBody] FormInput data)
        {
            //TEMP
            Console.WriteLine($"Iron: {data.Iron_Production}, Copper: {data.Copper_Production}");
            _logger.LogInformation("Received data: {@data}", data);
            return Ok(new
            {
                message = "Received",
                payload = data
            });
        }


    }
}

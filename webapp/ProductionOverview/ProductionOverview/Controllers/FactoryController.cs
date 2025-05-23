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
            //logging is TEMP
            Console.WriteLine($"Iron: {data.Iron_Production}, Copper: {data.Copper_Production}");
            Recipe recipe = new Recipe();
            return Ok(new
            {
                message = "Received",
                payload = "Copper Wire: " + recipe.CopperWire(Convert.ToDouble(data.Copper_Production))
            });
        }
    }
}

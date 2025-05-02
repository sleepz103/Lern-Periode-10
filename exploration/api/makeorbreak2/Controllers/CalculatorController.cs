using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using makeorbreak2;
using makeorbreak2.Models;
namespace makeorbreak2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        [HttpPost]
        public IActionResult Add([FromBody] CalculatorInput data)
        {
            double result = data.Num1 + data.Num2;
            return Ok(result);
        }
    }
}

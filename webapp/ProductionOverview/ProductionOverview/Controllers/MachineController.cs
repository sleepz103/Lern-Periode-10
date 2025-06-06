using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductionOverview.Models;
using System.Threading.Tasks;

namespace ProductionOverview.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly ILogger<MachineController> _logger;
        private readonly InventoryContext _context;
        public MachineController(ILogger<MachineController> logger, InventoryContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMachines()
        {
            var machines = await _context.Machines.ToListAsync();
            return Ok(machines);
        }


        [HttpPost]
        public async Task<IActionResult> AddMachine([FromBody] Machine machine)
        {
            _context.Machines.Add(machine);
            await _context.SaveChangesAsync();
            if (machine == null)
            {
                return BadRequest("Machine cannot be null.");
            }

            return Ok($"Machine added successfully.");
        }
    }
}

using System.Reflection;

namespace ProductionOverview.Models
{
    public class Machine
    {
        public int MachineId { get; set; }
        public string MachineName { get; set; }
        public decimal EnergyUsage { get; set; }

        public ICollection<Module> Modules { get; set; }
    }
}

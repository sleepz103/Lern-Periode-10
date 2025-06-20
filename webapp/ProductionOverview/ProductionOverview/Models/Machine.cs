using System.Reflection;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProductionOverview.Models
{


    [Table("Machine")]
    public class Machine
    {
        public int MachineId { get; set; }
        public string MachineName { get; set; }
        public decimal EnergyUsage { get; set; }
        public decimal StressImpact { get; set; }
        public decimal Production { get; set; }

        [JsonIgnore]
        public ICollection<Module>? Modules { get; set; }
    }

}

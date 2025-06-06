using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace ProductionOverview.Models
{
    [Table("Module")]
    public class Module
    {
        public int ModuleId { get; set; }
        public int MachineId { get; set; }
        public int Amount { get; set; }

        public Machine Machine { get; set; }

        [JsonIgnore]
        public ICollection<Factory>? Factories { get; set; }
    }

}

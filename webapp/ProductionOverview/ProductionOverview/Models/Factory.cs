using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace ProductionOverview.Models
{
    [Table("Factory")]
    public class Factory
    {
        public int FactoryId { get; set; }
        public string FactoryName { get; set; }
        public string InputItem { get; set; }
        public string OutputItem { get; set; }

        [JsonIgnore]
        public ICollection<Module>? Modules { get; set; }
    }

}

namespace ProductionOverview.Models
{
    public class Module2Factory
    {
        public int Module2FactoryId { get; set; }
        public int ModuleId { get; set; }
        public int FactoryId { get; set; }

        public Module Module { get; set; }
        public Factory Factory { get; set; }
    }

}

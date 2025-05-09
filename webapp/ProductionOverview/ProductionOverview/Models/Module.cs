namespace ProductionOverview.Models
{
    public class Module
    {
        public int ModuleId { get; set; }
        public int MachineId { get; set; }
        public int Amount { get; set; }

        public Machine Machine { get; set; }
        public ICollection<Module2Factory> Module2Factories { get; set; }
    }

}

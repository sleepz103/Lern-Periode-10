namespace ProductionOverview.Models
{
    public class Factory
    {
        public int FactoryId { get; set; }
        public string FactoryName { get; set; }
        public string InputItem { get; set; }
        public string OutputItem { get; set; }

        public ICollection<Module2Factory> Module2Factories { get; set; }
    }

}

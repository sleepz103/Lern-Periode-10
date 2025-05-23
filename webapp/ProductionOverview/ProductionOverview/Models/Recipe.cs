namespace ProductionOverview.Models
{
    public class Recipe
    {
        
        public Recipe()
        {
            
        }
        public double CopperWire(double copper)
        {
            return copper * 2;
        }

        public double ElectronicCircuit(double iron, double copper)
        {
            double craftedEC = 0;
            double copperWires = CopperWire(copper);

            if (copperWires < 3)
            {
                return 0;
            }
            // 1 Electronic Circuit requires 1 Iron and 3 Copper wires
            while (iron >= 1 && copperWires >= 3)
            {
                iron -= 1;
                copperWires -= 3;
                craftedEC += 1;
            }
            return craftedEC;
        }
    }
}

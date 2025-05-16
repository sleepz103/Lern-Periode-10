using Microsoft.EntityFrameworkCore;

namespace ProductionOverview.Models
{
    public class InventoryContext : DbContext
    {
        public DbSet<Machine> Machines { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Factory> Factories { get; set; }
        public DbSet<Module2Factory> Module2Factories { get; set; }

        public InventoryContext(DbContextOptions<InventoryContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Module>()
                .HasOne(m => m.Machine)
                .WithMany(mach => mach.Modules)
                .HasForeignKey(m => m.MachineId);

            modelBuilder.Entity<Module2Factory>()
                .HasOne(m2f => m2f.Module)
                .WithMany(m => m.Module2Factories)
                .HasForeignKey(m2f => m2f.ModuleId);

            modelBuilder.Entity<Module2Factory>()
                .HasOne(m2f => m2f.Factory)
                .WithMany(f => f.Module2Factories)
                .HasForeignKey(m2f => m2f.FactoryId);
        }
    }

}

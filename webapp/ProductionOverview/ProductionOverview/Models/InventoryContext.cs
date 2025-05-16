using Microsoft.EntityFrameworkCore;

namespace ProductionOverview.Models
{
    public class InventoryContext : DbContext
    {
        public DbSet<Machine> Machines { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Factory> Factories { get; set; }

        public InventoryContext(DbContextOptions<InventoryContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Module>()
                .HasMany(m => m.Factories)
                .WithMany(f => f.Modules)
                .UsingEntity(j => j.ToTable("Module2Factory"));

            base.OnModelCreating(modelBuilder);
        }
    }

}

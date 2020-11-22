using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<Ayah> Ayah { get; set; }
        public DbSet<Surah> Surah { get; set; }
        public DbSet<Tafsir> Tafsir { get; set; }
    }
}
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace api.Models
{
    public partial class KoranensBudskapContext : DbContext
    {
        public KoranensBudskapContext()
        {
        }

        public KoranensBudskapContext(DbContextOptions<KoranensBudskapContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ayah> Ayahs { get; set; }
        public virtual DbSet<Surah> Surahs { get; set; }
        public virtual DbSet<Tafsir> Tafsirs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=KoranensBudskap;User Id=sa;Password=unsecure.12345;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ayah>(entity =>
            {
                entity.ToTable("Ayah");

                entity.Property(e => e.AyahId).ValueGeneratedNever();

                entity.Property(e => e.Swedish)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Surah)
                    .WithMany(p => p.Ayahs)
                    .HasForeignKey(d => d.SurahId);
            });

            modelBuilder.Entity<Surah>(entity =>
            {
                entity.ToTable("Surah");

                entity.Property(e => e.SurahId).ValueGeneratedNever();
            });

            modelBuilder.Entity<Tafsir>(entity =>
            {
                entity.ToTable("Tafsir");

                entity.Property(e => e.TafsirId).ValueGeneratedNever();

                entity.Property(e => e.Text).HasMaxLength(1);

                entity.HasOne(d => d.Ayah)
                    .WithMany(p => p.Tafsirs)
                    .HasForeignKey(d => d.AyahId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

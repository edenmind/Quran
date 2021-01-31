using System;

using Microsoft.EntityFrameworkCore;

namespace api.Models {
    public partial class KoranensBudskapContext : DbContext {
        public KoranensBudskapContext () { }

        public KoranensBudskapContext (DbContextOptions<KoranensBudskapContext> options) : base (options) { }

        public virtual DbSet<Ayah> Ayahs { get; set; }
        public virtual DbSet<Surah> Surahs { get; set; }
        public virtual DbSet<Tafsir> Tafsirs { get; set; }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlServer (Environment.GetEnvironmentVariable ("ASPNETCORE_CONNECTION_STRING"));
            }
        }

        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            modelBuilder.Entity<Ayah> (entity => {
                entity.ToTable ("Ayah");

                entity.Property (e => e.AyahId).ValueGeneratedNever ();

                entity.Property (e => e.Swedish)
                    .IsRequired ()
                    .IsUnicode (false);

                entity.HasOne (d => d.Surah)
                    .WithMany (p => p.Ayahs)
                    .HasForeignKey (d => d.SurahId);
            });

            modelBuilder.Entity<Surah> (entity => {
                entity.ToTable ("Surah");

                entity.Property (e => e.SurahId).ValueGeneratedNever ();
            });

            modelBuilder.Entity<Tafsir> (entity => {
                entity.ToTable ("Tafsir");

                entity.Property (e => e.TafsirId).ValueGeneratedNever ();

                entity.Property (e => e.Text).HasMaxLength (1);

                entity.HasOne (d => d.Ayah)
                    .WithMany (p => p.Tafsirs)
                    .HasForeignKey (d => d.AyahId);
            });

            OnModelCreatingPartial (modelBuilder);
        }

        partial void OnModelCreatingPartial (ModelBuilder modelBuilder);
    }
}

﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Models;

namespace api.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20201129001600_ForeignKeys")]
    partial class ForeignKeys
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("api.Models.Ayah", b =>
                {
                    b.Property<int>("AyahId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Arabic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SurahId")
                        .HasColumnType("int");

                    b.Property<string>("Swedish")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AyahId");

                    b.HasIndex("SurahId");

                    b.ToTable("Ayah");
                });

            modelBuilder.Entity("api.Models.Surah", b =>
                {
                    b.Property<int>("SurahId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SurahId");

                    b.ToTable("Surah");
                });

            modelBuilder.Entity("api.Models.Tafsir", b =>
                {
                    b.Property<int>("TafsirId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("AyahId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TafsirId");

                    b.HasIndex("AyahId");

                    b.ToTable("Tafsir");
                });

            modelBuilder.Entity("api.Models.Ayah", b =>
                {
                    b.HasOne("api.Models.Surah", null)
                        .WithMany("Ayah")
                        .HasForeignKey("SurahId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("api.Models.Tafsir", b =>
                {
                    b.HasOne("api.Models.Ayah", null)
                        .WithMany("Tafsir")
                        .HasForeignKey("AyahId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("api.Models.Ayah", b =>
                {
                    b.Navigation("Tafsir");
                });

            modelBuilder.Entity("api.Models.Surah", b =>
                {
                    b.Navigation("Ayah");
                });
#pragma warning restore 612, 618
        }
    }
}
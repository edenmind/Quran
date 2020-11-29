using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Surah",
                columns: table => new
                {
                    SurahId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Surah", x => x.SurahId);
                });

            migrationBuilder.CreateTable(
                name: "Ayah",
                columns: table => new
                {
                    AyahId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Arabic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Swedish = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SurahId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ayah", x => x.AyahId);
                    table.ForeignKey(
                        name: "FK_Ayah_Surah_SurahId",
                        column: x => x.SurahId,
                        principalTable: "Surah",
                        principalColumn: "SurahId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tafsir",
                columns: table => new
                {
                    TafsirId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AyahId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tafsir", x => x.TafsirId);
                    table.ForeignKey(
                        name: "FK_Tafsir_Ayah_AyahId",
                        column: x => x.AyahId,
                        principalTable: "Ayah",
                        principalColumn: "AyahId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ayah_SurahId",
                table: "Ayah",
                column: "SurahId");

            migrationBuilder.CreateIndex(
                name: "IX_Tafsir_AyahId",
                table: "Tafsir",
                column: "AyahId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tafsir");

            migrationBuilder.DropTable(
                name: "Ayah");

            migrationBuilder.DropTable(
                name: "Surah");
        }
    }
}

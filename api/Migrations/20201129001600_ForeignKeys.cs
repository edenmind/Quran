using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class ForeignKeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ayah_Surah_SurahId",
                table: "Ayah");

            migrationBuilder.DropForeignKey(
                name: "FK_Tafsir_Ayah_AyahId",
                table: "Tafsir");

            migrationBuilder.AlterColumn<int>(
                name: "AyahId",
                table: "Tafsir",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SurahId",
                table: "Ayah",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Ayah_Surah_SurahId",
                table: "Ayah",
                column: "SurahId",
                principalTable: "Surah",
                principalColumn: "SurahId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tafsir_Ayah_AyahId",
                table: "Tafsir",
                column: "AyahId",
                principalTable: "Ayah",
                principalColumn: "AyahId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ayah_Surah_SurahId",
                table: "Ayah");

            migrationBuilder.DropForeignKey(
                name: "FK_Tafsir_Ayah_AyahId",
                table: "Tafsir");

            migrationBuilder.AlterColumn<int>(
                name: "AyahId",
                table: "Tafsir",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "SurahId",
                table: "Ayah",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Ayah_Surah_SurahId",
                table: "Ayah",
                column: "SurahId",
                principalTable: "Surah",
                principalColumn: "SurahId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tafsir_Ayah_AyahId",
                table: "Tafsir",
                column: "AyahId",
                principalTable: "Ayah",
                principalColumn: "AyahId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

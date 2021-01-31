using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace api.Models {
    public partial class Tafsir {
        [Key]
        public int TafsirId { get; set; }
        public string Text { get; set; }
        public int? AyahId { get; set; }

        [JsonIgnore]
        public virtual Ayah Ayah { get; set; }
    }
}

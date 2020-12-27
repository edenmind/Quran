using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace api.Models {
    public partial class Ayah {
        public Ayah () {
            Tafsirs = new HashSet<Tafsir> ();
        }

        public int? AyahNumber { get; set; }
        public int? SurahId { get; set; }
        public string Swedish { get; set; }
        public int? Sajdah { get; set; }
        public string Arabic { get; set; }
        public int AyahId { get; set; }

        [JsonIgnore]
        public virtual Surah Surah { get; set; }

        public virtual ICollection<Tafsir> Tafsirs { get; set; }
    }
}

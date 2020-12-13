using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace api.Models {
    public partial class Surah {
        public Surah () {
            Ayahs = new HashSet<Ayah> ();
        }

        public int SurahId { get; set; }
        public string Name { get; set; }
        public int? Order { get; set; }
        public int? Count { get; set; }
        public int? Period { get; set; }

        [JsonIgnore]
        public virtual ICollection<Ayah> Ayahs { get; set; }
    }
}

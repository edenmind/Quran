using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models {
    public class Ayah {
        public int AyahId { get; set; }
        public string Arabic { get; set; }
        public string Swedish { get; set; }

        public List<Tafsir> Tafsir { get; set; }
        public int SurahId { get; set; }
    }
}

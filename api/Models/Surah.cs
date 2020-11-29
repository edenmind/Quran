using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models {
    public class Surah {
        public int SurahId { get; set; }
        public string Name { get; set; }

        public List<Ayah> Ayah { get; set; }

    }
}

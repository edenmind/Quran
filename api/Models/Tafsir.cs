using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models {
    public class Tafsir {
        public int TafsirId { get; set; }
        public string Text { get; set; }
        public int AyahId { get; set; }
    }

}

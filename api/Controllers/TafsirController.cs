using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using api.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class TafsirController : ControllerBase {
        private readonly KoranensBudskapContext _context;

        public TafsirController (KoranensBudskapContext context) {
            _context = context;
        }

        // GET: api/Tafsir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tafsir>>> GetTafsir () {
            return await _context.Tafsirs.ToListAsync ();
        }

        // GET: api/Tafsir/5
        [HttpGet ("{id}")]
        public async Task<ActionResult<Tafsir>> GetTafsir (int id) {
            var tafsir = await _context.Tafsirs.FindAsync (id);

            if (tafsir == null) {
                return NotFound ();
            }

            return tafsir;
        }

        // PUT: api/Tafsir/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutTafsir (int id, Tafsir tafsir) {
            if (id != tafsir.TafsirId) {
                return BadRequest ();
            }

            _context.Entry (tafsir).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync ();
            }
            catch (DbUpdateConcurrencyException) {
                if (!TafsirExists (id)) {
                    return NotFound ();
                }
                else {
                    throw;
                }
            }

            return NoContent ();
        }

        // POST: api/Tafsir
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tafsir>> PostTafsir (Tafsir tafsir) {
            _context.Tafsirs.Add (tafsir);
            await _context.SaveChangesAsync ();

            return CreatedAtAction ("GetTafsir", new { id = tafsir.TafsirId }, tafsir);
        }

        // DELETE: api/Tafsir/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteTafsir (int id) {
            var tafsir = await _context.Tafsirs.FindAsync (id);
            if (tafsir == null) {
                return NotFound ();
            }

            _context.Tafsirs.Remove (tafsir);
            await _context.SaveChangesAsync ();

            return NoContent ();
        }

        private bool TafsirExists (int id) {
            return _context.Tafsirs.Any (e => e.TafsirId == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using api.Models;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class SurahController : ControllerBase {
        private readonly KoranensBudskapContext _context;

        public SurahController (KoranensBudskapContext context) {
            _context = context;
        }

        // GET: api/Surah
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Surah>>> GetSurah () {
            return await _context.Surahs.ToListAsync ();
        }

        // GET: api/Surah/5
        [HttpGet ("{id}")]
        public async Task<ActionResult<Surah>> GetSurah (int id) {
            var surah = await _context.Surahs
                .Where (i => i.SurahId.Equals (id))
                .Include (a => a.Ayahs)
                .ThenInclude (t => t.Tafsirs)
                .FirstAsync ();

            if (surah == null) {
                return NotFound ();
            }

            return surah;
        }

        // PUT: api/Surah/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut ("{id}")]
        public async Task<IActionResult> PutSurah (int id, Surah surah) {
            if (id != surah.SurahId) {
                return BadRequest ();
            }

            _context.Entry (surah).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync ();
            }
            catch (DbUpdateConcurrencyException) {
                if (!SurahExists (id)) {
                    return NotFound ();
                }
                else {
                    throw;
                }
            }

            return NoContent ();
        }

        // POST: api/Surah
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Surah>> PostSurah (Surah surah) {
            _context.Surahs.Add (surah);
            await _context.SaveChangesAsync ();

            return CreatedAtAction ("GetSurah", new { id = surah.SurahId }, surah);
        }

        // DELETE: api/Surah/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteSurah (int id) {
            var surah = await _context.Surahs.FindAsync (id);
            if (surah == null) {
                return NotFound ();
            }

            _context.Surahs.Remove (surah);
            await _context.SaveChangesAsync ();

            return NoContent ();
        }

        private bool SurahExists (int id) {
            return _context.Surahs.Any (e => e.SurahId == id);
        }
    }
}

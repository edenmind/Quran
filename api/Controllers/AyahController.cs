using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AyahController : ControllerBase
    {
        private readonly Context _context;

        public AyahController(Context context)
        {
            _context = context;
        }

        // GET: api/Ayah
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ayah>>> GetAyah()
        {
            return await _context.Ayah.ToListAsync();
        }

        // GET: api/Ayah/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ayah>> GetAyah(int id)
        {
            var ayah = await _context.Ayah.FindAsync(id);

            if (ayah == null)
            {
                return NotFound();
            }

            return ayah;
        }

        // PUT: api/Ayah/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAyah(int id, Ayah ayah)
        {
            if (id != ayah.AyahId)
            {
                return BadRequest();
            }

            _context.Entry(ayah).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AyahExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ayah
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ayah>> PostAyah(Ayah ayah)
        {
            _context.Ayah.Add(ayah);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAyah", new { id = ayah.AyahId }, ayah);
        }

        // DELETE: api/Ayah/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAyah(int id)
        {
            var ayah = await _context.Ayah.FindAsync(id);
            if (ayah == null)
            {
                return NotFound();
            }

            _context.Ayah.Remove(ayah);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AyahExists(int id)
        {
            return _context.Ayah.Any(e => e.AyahId == id);
        }
    }
}

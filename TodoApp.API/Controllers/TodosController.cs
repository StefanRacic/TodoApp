using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.API.Data;
using TodoApp.API.Models;

namespace TodoApp.API.Controllers
{
  [Authorize]
  [Route("api/[controller]")]
  [ApiController]
  public class TodosController : ControllerBase
  {
    private readonly DataContext _context;
    public TodosController(DataContext context)
    {
      _context = context;
    }

    // GET api/todos
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      var todos = await _context.Todos.ToListAsync();

      return Ok(todos);
    }

    // POST api/todos
    [HttpPost]
    public async Task<IActionResult> Post(Todo todo)
    {
      if (todo.Name != "")
      {
        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();
      }
      else
      {
        return BadRequest("You must specify name");
      }
      return Ok(todo);
    }

    // DELETE api/todos/id
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      var todo = await _context.Todos.FirstOrDefaultAsync(item => item.Id == id);
      if (todo == null)
      {
        return NotFound();
      }
      else
      {
        _context.Todos.Remove(todo);
        await _context.SaveChangesAsync();
      }

      return Ok("Todo Item Removed");
    }
  }
}
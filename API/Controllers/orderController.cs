using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mysqlx.Crud;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class orderController : ControllerBase
    {
        // GET: api/order
        // [HttpGet]
        // public List<Order> Get()
        // {
        //     return null;
        // }

        // // GET: api/order/5
        // [HttpGet("{id}", Name = "Get")]
        // public string Get(int id)
        // {
        //     return "value";
        // }

        // // POST: api/order
        // [HttpPost]
        // public void Post([FromBody] string value)
        // {
        // }

        // // PUT: api/order/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE: api/order/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Database;
using API.Models;
using API.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class furnitureController : ControllerBase
    {
        // GET: api/furniture
        [HttpGet]
        public List<Furniture> Get()
        {
            IGetAllFurniture readObject = new ReadFurnitureData();
            return readObject.GetAllFurniture();
        }

        // GET: api/furniture/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/furniture
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/furniture/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/furniture/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

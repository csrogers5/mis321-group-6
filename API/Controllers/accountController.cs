using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Database;
using API.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class accountController : ControllerBase
    {
        // GET: api/account
        [HttpGet]
        public List<Account> Get()
        {
            IGetAllAccounts readObject = new ReadAccountData();
            return readObject.GetAllAccounts();
        }

        // GET: api/account/5
        [HttpGet("{id}", Name = "GetAccount")]
        public Account Get(int id)
        {
            IGetAccount readObject = new ReadAccountData();
            return readObject.GetAccount(id);
        }

        // POST: api/account
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

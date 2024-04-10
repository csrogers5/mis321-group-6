using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Database;
using API.Models;
using API.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mysqlx.Crud;
using NuGet.Protocol.Core.Types;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class orderController : ControllerBase
    {
        // GET: api/order
        [HttpGet]
        public List<OrderForm> Get()
        {
            IGetAllOrders readObject = new ReadOrderData();
            return readObject.GetAllOrders();
        }

        // GET: api/order/5
        [HttpGet("{id}", Name = "GetOrderForms")]
        public OrderForm Get(int id)
        {
            IGetOrder readObject = new ReadOrderData();
            return readObject.GetOrder(id);
        }

        // POST: api/order
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/order/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/order/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

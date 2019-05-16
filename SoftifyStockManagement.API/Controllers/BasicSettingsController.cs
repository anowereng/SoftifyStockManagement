using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoftifyStockManagement.API.SQL_Query;
using SoftifyStockManagement.API.Models;
namespace SoftifyStockManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasicSettingsController : ControllerBase
    {
        // GET api/values

        [HttpGet("GetSupplier")]
        public IActionResult GetSupplier()
        {
            SupplierQuery _lQuery = new SupplierQuery();
            var list = _lQuery.GetSupplier();
            if (list != null)
                return Ok(list);
            else
                return BadRequest();
        }

        [HttpGet("GetCombo")]
        public IActionResult GetCombo()
        {
            SupplierQuery _lQuery = new SupplierQuery();
            var list = _lQuery.GetCombo();
            if (list != null)
                return Ok(list);
            else
                return BadRequest();
        }


        [HttpPost("SupplierSave")]
        public IActionResult SupplierSave([FromBody] Supplier model)
        {
            SupplierQuery _lQuery = new SupplierQuery();
            if (ModelState.IsValid)
            {
                _lQuery.SupplierAdd(model);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

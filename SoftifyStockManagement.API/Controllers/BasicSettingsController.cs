using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SoftifyStockManagement.API.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using SoftifyStockManagement.API.SQL_Query;
namespace SoftifyStockManagement.API.Controllers
{
    [Authorize]
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
            if (model!=null)
            {
                string message =_lQuery.SupplierAdd(model);
                //if(message=="Success")
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
  
        [HttpPost("Hello")]
        public IActionResult SupplierHello([FromBody] Supplier model)
        {
            
                return Ok(model);

        }
        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetSupplierById(int id)
        {
            SupplierQuery _lQuery = new SupplierQuery();
            if (ModelState.IsValid)
            {
                var model= _lQuery.GetSupplierById(id);
                return Ok(model);
            }
            else
            {
                return BadRequest();
            }
        }

       

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}

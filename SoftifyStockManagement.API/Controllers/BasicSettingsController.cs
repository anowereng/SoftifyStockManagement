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
         [HttpPut("SupplierUpdate/{id:int}")]
        public IActionResult SupplierUpdate(int id, [FromBody] Supplier model)
        {

            SupplierQuery _lQuery = new SupplierQuery();
            if (model != null)
            {
                string message = _lQuery.SupplierUpdate(model);
                //if(message=="Success")
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
   
        // DELETE api/values/5
        [HttpDelete("SupplierDelete/{id:int}")]
        public IActionResult Delete(int id)
        {
           SupplierQuery _lQuery = new SupplierQuery();
            if (id != null)
            {
                string message = _lQuery.SupplierDelete(id);
                //if(message=="Success")
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}

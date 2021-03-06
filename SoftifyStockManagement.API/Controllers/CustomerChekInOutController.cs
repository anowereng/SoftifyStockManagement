﻿using System;
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
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerChekInOutController : ControllerBase
    {
     
        [HttpGet]
        public IActionResult Get([FromBody] string searchdata)
        {
            CustomerQuery _lQuery = new CustomerQuery();
            var list = _lQuery.GetCustomer(searchdata);
            if (list != null)
                return Ok(list);
            else
                return BadRequest();
        }

        [HttpPost("ProductSave")]
        public IActionResult ProductSave([FromBody]Product model)
        {
           ProductQuery _lQuery = new ProductQuery();
            if (model!=null)
            {
                string message =_lQuery.ProductAdd(model);
                //if(message=="Success")
                return Ok();
            }
            else
            {
                return BadRequest();
            }
           
        }
        [HttpPut("ProductUpdate/{id:int}")]
        public IActionResult ProductUpdate(int id, [FromBody]Product model)
        {

           ProductQuery _lQuery = new ProductQuery();
            if (model != null)
            {
                string message = _lQuery.ProductUpdate(model);
                //if(message=="Success")
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
   
        // DELETE api/values/5
        [HttpDelete("ProductDelete/{id:int}")]
        public IActionResult ProductDelete(int id)
        {
           ProductQuery _lQuery = new ProductQuery();
            if (id != null)
            {
                string message = _lQuery.ProductDelete(id);
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

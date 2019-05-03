using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using SoftifyStockManagement.API.Models;

namespace SoftifyStockManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // GET api/values

        [HttpPost]
        public IActionResult Login(User model)
        {
            var userpassword = model.UserPassword;
            return Ok(model.UserPassword);
        }


    }
}

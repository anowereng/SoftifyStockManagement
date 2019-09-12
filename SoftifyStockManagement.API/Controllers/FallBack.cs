﻿using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace SoftifyStockManagement.API.Controllers
{
    public class FallBack: Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/HTML");
        }
    }
}
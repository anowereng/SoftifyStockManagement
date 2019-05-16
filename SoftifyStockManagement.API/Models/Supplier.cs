using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoftifyStockManagement.API.Models
{
    public class Supplier
    {
        public  int id { get; set; }
        public string name  { get; set; }
        public string phone  { get; set; }
        public string email  { get; set; }
        public string address  { get; set; }
        public string reptname  { get; set; }
        public string reptphone  { get; set; }
        public int location  { get; set; }

    }
}

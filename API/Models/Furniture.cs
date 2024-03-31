using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Furniture 
    {
        public int Id{get; set;}

        public double Age{get; set;}

        public DateTime DateTimeArchive{get; set;}

        public int ActiveBids{get; set;} //ActiveBids as an object or array or both?
    }
}
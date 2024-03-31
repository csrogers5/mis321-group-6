using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class StudentProfile
    {
        public string Email{get; set;}

        public FullName FullName{get; set;}

        public  List<Furniture> ActiveListing{get; set;} //Populate the list with furniture that has "active" set to true 


    }
}
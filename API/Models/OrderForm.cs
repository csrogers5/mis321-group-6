using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class OrderForm
    {
        public int Id{get; set;}

        public int Furniture_ID{get; set;}

        public int Account_ID{get; set;}

        public DateOnly PickupDate{get; set;}

    }

    // order_id INT AUTO_INCREMENT PRIMARY KEY,
    // furniture_id INT,
    // account_id INT,
    // pickup_date DATETIME,
    // FOREIGN KEY (furniture_id) REFERENCES furniture(furniture_id),
    // FOREIGN KEY (account_id) REFERENCES accounts(account_id)
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.Interfaces;
using MySql.Data.MySqlClient;

namespace API.Database
{
    public class ReadFurnitureData : IGetAllFurniture
    {
        public List<Furniture> GetAllFurniture()
        {
             try
            {
                ConnectionString myConnection = new ConnectionString();
                string cs = myConnection.cs; 
                using MySqlConnection con = new MySqlConnection(cs); 
                con.Open();

                string stm = "select * from furniture"; 
                using var cmd = new MySqlCommand(stm, con); 

                using MySqlDataReader rdr = cmd.ExecuteReader();

                List<Furniture> allFurniture = new List<Furniture>(); 
                while(rdr.Read()) 
                {
                    allFurniture.Add(new Furniture()
                    {   
                        Id = rdr.GetInt32(0), Type = rdr.GetString(1), Quality = rdr.GetString(2),
                        City = rdr.GetString(3), Sold = rdr.GetBoolean(4), Price = rdr.GetInt32(5),
                        Image = rdr.GetString(6)
                    }); 
                }

                System.Console.WriteLine("Retrieved Successfully");
                return allFurniture;
            }
            catch(Exception ex)
            {
                System.Console.WriteLine("Retrieval Failed"  + ex.Message);
                return null;
            }
        }
    }
}

// furniture_id int auto_increment primary key,
// 	furniture_type varchar(20),
//     furniture_quality varchar(20),
//     furniture_city varchar(35),
//     furniture_sold bool,
//     furniture_price int,
//     furniture_image blob


//  public int Id{get; set;}

//         public string Type{get; set;}

//         public string Quality{get;set;}

//         public string City{get;set;}

//         public bool Sold{get; set;}

//         public double Price{get;set;}

//         public Blob Image{get; set;}
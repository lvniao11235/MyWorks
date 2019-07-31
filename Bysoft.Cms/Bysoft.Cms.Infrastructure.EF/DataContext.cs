using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Bysoft.Cms.Model;

namespace Bysoft.Cms.Infrastructure.EF
{
    public class DataContext : DbContext
    {
        public DataContext() : base("name=db")
        {
            
        }

        public DbSet<User> Users { get; set; }
    }
}

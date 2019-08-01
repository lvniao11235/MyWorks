using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Bysoft.Cms.Model;
using Microsoft.AspNet.Identity.EntityFramework;
using Bysoft.Cms.Common;
using System.Configuration;

namespace Bysoft.Cms.Infrastructure.EF
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext() : base("bysoft")
        {
            
        }

        static DataContext()
        {
            Database.SetInitializer<DataContext>(new DataContextInit());
        }

        public static DataContext Create()
        {
            return new DataContext();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Bysoft.Cms.Infrastructure.EF
{
    public class DataContextInit : DropCreateDatabaseIfModelChanges<DataContext>
    {
        protected override void Seed(DataContext context)
        {
            PerformInitialSetup(context);
            base.Seed(context);
        }
        public void PerformInitialSetup(DataContext context)
        {
        }
    }
}

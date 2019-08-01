using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Bysoft.Cms.Model;
using Bysoft.Cms.Infrastructure.EF;

namespace Bysoft.Cms.UserCenter
{
    public class AppUserManager : UserManager<AppUser>
    {
        public AppUserManager(IUserStore<AppUser> store) : base(store)
        {

        }

        public static AppUserManager Create(IdentityFactoryOptions<AppUserManager> options,
            IOwinContext context)
        {
            DataContext db = context.Get<DataContext>();
            AppUserManager manager = new AppUserManager(new UserStore<AppUser>(db));
            return manager;
        }
    }
}

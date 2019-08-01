using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;
using Bysoft.Cms.Model;
using Bysoft.Cms.Infrastructure.EF;
using Bysoft.Cms.Services;

namespace Bysoft.Cms.UserCenter
{
    public class IdentityConfig 
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext<DataContext>(DataContext.Create);
            app.CreatePerOwinContext<AppUserManager>(AppUserManager.Create);

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/home/login"),
            });
        }
    }
}

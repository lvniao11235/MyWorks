using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bysoft.Cms.UserCenter;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System.Security.Claims;
using Microsoft.AspNet.Identity;

namespace Bysoft.Cms.WebUI
{
    public class BaseController : Controller
    {
        protected AppUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<AppUserManager>();
            }
        }

        protected IAuthenticationManager AuthManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }
    }
}
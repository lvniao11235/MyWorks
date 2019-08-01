using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bysoft.Cms.Services;
using Bysoft.Cms.Model;
using System.Threading;
using System.Threading.Tasks;
using Bysoft.Cms.UserCenter;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System.Security.Claims;
using Microsoft.AspNet.Identity.Owin;

namespace Bysoft.Cms.WebUI.Controllers
{
    public class HomeController : BaseController
    {
        public UserService UserService { get; set; }

        [Authorize]
        public ActionResult Index()
        {
            UserService.GetUsers();
            return View();
        }

        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Login(string name, string password, string ReturnUrl)
        {
            AppUser user = await UserManager.FindAsync(name, password);
            ClaimsIdentity identity = await UserManager.CreateIdentityAsync(user,
                DefaultAuthenticationTypes.ApplicationCookie);
            AuthManager.SignOut();
            AuthManager.SignIn(new AuthenticationProperties
            {
                IsPersistent = true
            }, identity);
            return RedirectToAction("Index");
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult Logout()
        {
            AuthManager.SignOut();
            return RedirectToAction("Login");
        }

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Register(string name, string password)
        {
            AppUser user = new AppUser { UserName = name };
            IdentityResult result = await UserManager.CreateAsync(user, password);
            if (result.Succeeded)
            {
                return RedirectToAction("Index");
            }
            else
            {

            }
            return new ContentResult { Content = "" };
        }
    }
}
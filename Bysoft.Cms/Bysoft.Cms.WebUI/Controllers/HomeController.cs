using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Bysoft.Cms.Services;
using Bysoft.Cms.Model;
namespace Bysoft.Cms.WebUI.Controllers
{
    public class HomeController : Controller
    {
        public UserService UserService { get; set; }
        // GET: Home
        public ActionResult Index()
        {
            UserService.GetUsers();
            return View();
        }
    }
}
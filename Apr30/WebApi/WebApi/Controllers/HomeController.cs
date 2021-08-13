using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    public class HomeController : Controller
    {
       public string myProp { get; set; }
       public ViewResult Index()
        {
            ViewData["myProp"] = "Cool!";
            ViewData["title"] = "Title from controller";
            return View();
        }
        public ViewResult About()
        {
            return View();
        }
        public ViewResult Contact()
        {
            return View();
        }
    }
}
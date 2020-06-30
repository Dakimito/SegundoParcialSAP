using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SegundoParcialSAP.Web.Controllers
{
    public class GeoController : Controller
    {
        // GET: Geo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PuntoCuatro()
        {
            return View();
        }

        // GET: Geo/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Geo/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Geo/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Geo/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Geo/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Geo/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Geo/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}

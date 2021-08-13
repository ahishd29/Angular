using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Controllers
{
    public class BookController : Controller
    {
        private readonly BookRepository _bk = null;
        public BookController()
        {
            _bk = new BookRepository();
        }
        // GET: Book
        public List<Book> GetAllBooks()
        {
            //var data = _bk.GetAllBooks();
            //return View();
            return _bk.GetAllBooks();
        }
        public Book GetBook(int id)
        {
            return _bk.GetBookById(id);
        }
        public List<Book> SearchBooks(string bookName, string authorName)
        {
            return _bk.SearchBook(bookName, authorName);
        }
    }
}
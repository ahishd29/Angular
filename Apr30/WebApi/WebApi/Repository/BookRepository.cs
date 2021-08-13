using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repository
{
    public class BookRepository
    {
        public List<Book> GetAllBooks()
        {
            return DataSource();
        }
        public Book GetBookById(int id)
        {
            return DataSource().Where(x => x.Id == id).FirstOrDefault();
        }
        public List<Book> SearchBook(string title, string authorName)
        {
            return DataSource().Where(x => x.Title.Contains(title) && x.Author == authorName).ToList();
        }
        public List<Book> DataSource()
        {
            return new List<Book>()
            {
                new Book(){Id=1,Title="Mvc",Author="Ahish"},
                new Book(){Id=2,Title="C#",Author="Ahi"},
                new Book(){Id=3,Title="Angular",Author="Ahi_d"},
            };
            }
                
 
    }
}
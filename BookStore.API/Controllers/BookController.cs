using System;
using BookStore.API.DTO;
using BookStore.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace BookStore.API.Controllers
{
    [Route("api/books")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private static List<Book> books = [
            new Book(
                Id: 1,
                Title: "hii",
                Author: "kalpa",
                Isbn: "123",
                date: new DateOnly(2025,01,01)
            ),
        ];

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(books);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Book? book = books.FirstOrDefault(book => book.Id == id);
            return book == null ? NotFound("Book not found") : Ok(book);
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody] CreateBookDTO newBook)
        {
            Book? book = books.FirstOrDefault(book => book.Title == newBook.Title);
            if (book != null)
            {
                return Conflict("Book already exists.");
            }
            book = new Book(
                books.Count + 1,
                newBook.Title,
                newBook.Author,
                newBook.Isbn,
                newBook.PublicationDate
            );
            books.Add(book);
            return CreatedAtAction(nameof(GetById), new { id = book.Id }, book);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateBook([FromRoute] int id, [FromBody] UpdateBookDTO updateBook)
        {
            Book? book = books.FirstOrDefault(book => book.Id == id);
            if (book == null) return NotFound("Book not found.");
            if (updateBook.Title != "") book.Title = updateBook.Title;
            if (updateBook.Author != "") book.Author = updateBook.Author;
            if (updateBook.Isbn != "") book.Isbn = updateBook.Isbn;

            return Ok(book);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook([FromRoute] int id)
        {
            Book? book = books.FirstOrDefault(book => book.Id == id);
            if (book == null) return NotFound("Book not found.");
            books.Remove(book);
            return NoContent();
        }
    }

}


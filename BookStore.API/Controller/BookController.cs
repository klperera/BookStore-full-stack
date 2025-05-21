using System;
using BookStore.API.DTO;
using BookStore.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace BookStore.API.Controller
{
    [Route("api/books")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private List<Book> books = [
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

        [HttpGet]
        [Route("/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            int index = books.FindIndex(book => book.Id == id);
            return index == -1 ? NotFound("Book not found") : Ok(books[index]);
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody] CreateBookDTO newBook)
        {
            Book? book = books.Find(book => book.Title == newBook.Title);
            if (book != null)
            {
                return Conflict("Book is already ");
            }
            newBook.Id = books.Count + 1;
            books.Add(book = new Book(
                newBook.Id,
                newBook.Title,
                newBook.Author,
                newBook.Isbn,
                newBook.PublicationDate
            ));
            return CreatedAtAction(nameof(GetById), new { id = book.Id }, book);
        }
        [HttpPut]
        [Route("/{id}")]
        public IActionResult UpdateBook([FromRoute] int id, [FromBody] UpdateBookDTO updateBook)
        {
            int index = books.FindIndex(book => book.Id == id);
            if (index == -1) return NotFound("Book not found.");
            Book book = books[index];
            if (updateBook.Title != null) book.Title = updateBook.Title;
            if (updateBook.Author != null) book.Author = updateBook.Author;
            if (updateBook.Isbn != null) book.Isbn = updateBook.Isbn;

            return Ok(book);
        }

        [HttpDelete]
        [Route("/{id}")]
        public IActionResult DeleteBook([FromRoute] int id)
        {
            int index = books.FindIndex(book => book.Id == id);
            if (index == -1) return NotFound("Book not found.");
            books.RemoveAt(index);
            return NoContent();
        }
    }

}


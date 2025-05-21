using System;
using System.ComponentModel.DataAnnotations;

namespace BookStore.API.Models;

public class Book(int Id, string Title, string Author, string Isbn, DateOnly date)
{
    public int Id { get; set; } = Id;
    public string Title { get; set; } = Title;
    public string Author { get; set; } = Author;
    public string Isbn { get; set; } = Isbn;
    public DateOnly PublicationDate { get; set; } = date;
}

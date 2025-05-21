using System;
using System.ComponentModel.DataAnnotations;

namespace BookStore.API.Models;

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public string Isbn { get; set; } = string.Empty;
    public DateOnly PublicationDate { get; set; }

}

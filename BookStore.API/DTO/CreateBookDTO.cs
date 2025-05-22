using System.ComponentModel.DataAnnotations;

namespace BookStore.API.DTO;

public record class CreateBookDTO
{
    [Required][StringLength(50)] public string Title { get; set; } = string.Empty;
    [Required][StringLength(20)] public string Author { get; set; } = string.Empty;
    [Required][StringLength(10)] public string Isbn { get; set; } = string.Empty;
    public DateOnly PublicationDate { get; set; }
}

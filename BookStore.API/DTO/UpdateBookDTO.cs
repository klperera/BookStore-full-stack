namespace BookStore.API.DTO;

public record class UpdateBookDTO
{
    public string Title { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public string Isbn { get; set; } = string.Empty;
    public DateOnly PublicationDate { get; set; }
}

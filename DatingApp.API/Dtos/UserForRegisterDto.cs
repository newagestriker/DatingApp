using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12,MinimumLength = 6,ErrorMessage = "Number of characters in password should be between 6 and 12")]
        public string Password { get; set; }
    }
}
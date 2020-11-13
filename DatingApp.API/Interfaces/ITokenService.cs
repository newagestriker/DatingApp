using DatingApp.API.Entities;

namespace DatingApp.API
{
    public interface ITokenService
    {
       public string getToken(AppUser user);
    }
}
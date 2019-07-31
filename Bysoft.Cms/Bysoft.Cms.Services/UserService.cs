using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bysoft.Cms.Repositories;
using Autofac.Extras.DynamicProxy;
using Bysoft.Cms.Common;
using Bysoft.Cms.Model;
using System.Security;

namespace Bysoft.Cms.Services
{
    [Intercept(typeof(BaseInterceptor))]
    public class UserService
    {
        public UserRepository UserRepository { get; set; }

        public virtual List<User> GetUsers()
        {
            return null;
        }
    }
}

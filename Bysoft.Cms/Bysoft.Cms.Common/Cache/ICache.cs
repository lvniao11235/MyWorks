using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bysoft.Cms.Common.Cache
{
    public interface ICache
    {
        T Get<T>(string key);

        bool Set<T>(string key, T t);

        bool Set<T>(string key, T t, long period);
    }
}

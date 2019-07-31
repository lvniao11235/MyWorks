using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bysoft.Cms.Common.Cache
{
    public class RedisCache : ICache, IDisposable
    {
        public static Singleton<RedisConfig> RedistConfig = new Singleton<RedisConfig>();

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public T Get<T>(string key)
        {
            throw new NotImplementedException();
        }

        public bool Set<T>(string key, T t)
        {
            throw new NotImplementedException();
        }

        public bool Set<T>(string key, T t, long period)
        {
            throw new NotImplementedException();
        }
    }
}

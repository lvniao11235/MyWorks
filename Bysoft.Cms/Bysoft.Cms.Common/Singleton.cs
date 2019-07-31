using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bysoft.Cms.Common
{
    public class Singleton<T> where T:new()
    {
        private static T t;

        private static readonly object _lock = new object();

        public static T Instance()
        {
            if(t == null)
            {
                lock (_lock)
                {
                    if(t == null)
                    {
                        t = new T();
                    }
                }
            }
            return t;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bysoft.Cms.Common.Cache
{
    public class RedisConfig
    {
        public RedisConfig()
        {
            DefaultPeriod = DEFAULT_REDIS_PERIOD_VALUE;
            if (!string.IsNullOrEmpty(SystemConfig.AppSettings[DEFAULT_REDIS_PERIOD]))
            {
                DefaultPeriod = Int64.Parse(SystemConfig.AppSettings[DEFAULT_REDIS_PERIOD]);
            }
            string reads = SystemConfig.AppSettings[DEFAULT_REDIS_READ_LIST];
            ReadList = new List<string>();
            if (!string.IsNullOrEmpty(reads))
            {
                ReadList.AddRange(reads.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries));
            }
            string writes = SystemConfig.AppSettings[DEFAULT_REDIS_WRITE_LIST];
            WriteList = new List<string>();
            if (!string.IsNullOrEmpty(writes))
            {
                WriteList.AddRange(writes.Split(new char[] { ';' }, StringSplitOptions.RemoveEmptyEntries));
            }
        }

        public static string DEFAULT_REDIS_PERIOD = "redis_period";

        public static long DEFAULT_REDIS_PERIOD_VALUE = 30 * 60 * 60;

        public static string DEFAULT_REDIS_READ_LIST = "redis_read_list";

        public static string DEFAULT_REDIS_WRITE_LIST = "redis_write_list";

        public long DefaultPeriod { get; private set; }

        public List<string> ReadList { get; private set; }

        public List<string> WriteList { get; private set; }

        public string GetReadAddress()
        {
            return GetRandomAddress(ReadList);
        }

        public string GetWriteAddress()
        {
            return GetRandomAddress(WriteList);
        }

        private string GetRandomAddress(List<string> list)
        {
            if(list == null || list.Count == 0)
            {
                return null;
            }
            Random random = new Random((int)DateTime.Now.Ticks);
            return list[random.Next() % list.Count];
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bysoft.Cms.Model
{
    /// <summary>
    /// 实体类接口
    /// </summary>
    public interface IEntity
    {
        /// <summary>
        /// 逻辑主键
        /// </summary>
        int Id { get; set; }

        /// <summary>
        /// 业务主键
        /// </summary>
        string Uid { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Bysoft.Cms.Model
{
    public class User : IEntity
    {
        [Key]
        public int Id { get; set; }
        
        public string Uid { get; set; }

        public string Name { get; set; }
    }
}

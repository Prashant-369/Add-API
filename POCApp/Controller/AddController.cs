using Microsoft.AspNetCore.Mvc;

namespace POCApp.Controller
{
    [Route("[controller]")]
    [ApiController]
    public class AddController : ControllerBase
    {
        [HttpPost]
        public ActionResult<int> Post([FromBody] Numbers numbers)
        {
            int sum = numbers.Num1 + numbers.Num2;
            return sum;
        }
    }

    public class Numbers
    {
        public int Num1 { get; set; }
        public int Num2 { get; set; }
    }
}

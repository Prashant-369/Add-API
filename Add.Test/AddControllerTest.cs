using POCApp.Controller;
using System;
using Xunit;

namespace Add.Test
{
    public class AddControllerTest
    {
        [Fact]
        public void Test_AddController_ReturnsSum()
        {
            var controller = new AddController();
            var numbers = new Numbers { Num1 = 3, Num2 = 5 };

            var result = controller.Post(numbers);

            Assert.Equal(8, result.Value);
        }
    }
}

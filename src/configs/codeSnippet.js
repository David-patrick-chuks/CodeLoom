export const codeSnippets = [
    {
        language: "python",
        code: "def factorial(n):\n  if n == 0:\n    return 1\n  else:\n    return n * factorial(n - 1)",
    },
    {
        language: "javascript",
        code: "const isPalindrome = (str) => {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n};\nconsole.log(isPalindrome('racecar'));",
    },
    {
        language: "java",
        code: "import java.util.Arrays;\n\nclass SortExample {\n  public static void main(String[] args) {\n    int[] numbers = { 5, 3, 8, 1, 2 };\n    Arrays.sort(numbers);\n    System.out.println(Arrays.toString(numbers));\n  }\n}",
    },
    {
        language: "c",
        code: '#include <stdio.h>\n\nint main() {\n  for (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) {\n      printf("%d\\n", i);\n    }\n  }\n  return 0;\n}',
    },
    {
        language: "ruby",
        code: 'class Car\n  attr_reader :make, :model\n\n  def initialize(make, model)\n    @make = make\n    @model = model\n  end\n\n  def display\n    puts "Car make: #{@make}, model: #{@model}"\n  end\nend\ncar = Car.new("Toyota", "Corolla")\ncar.display',
    },
    {
        language: "swift",
        code: "struct Rectangle {\n  var width: Double\n  var height: Double\n\n  func area() -> Double {\n    return width * height\n  }\n}\nlet rectangle = Rectangle(width: 5, height: 10)\nprint(rectangle.area())",
    },
    {
        language: "c#",
        code: "using System;\n\nclass MaxValueExample {\n  static void Main() {\n    int[] numbers = { 10, 20, 30, 40, 50 };\n    int max = numbers.Max();\n    Console.WriteLine(\"Max value: \" + max);\n  }\n}",
    },
    {
        language: "php",
        code: "<?php\n$names = ['John', 'Jane', 'Joe'];\nforeach ($names as $name) {\n  echo 'Hello ' . $name . '!\\n';\n}\n?>",
    },
    {
        language: "go",
        code: 'package main\n\nimport "fmt"\n\nfunc main() {\n  numbers := []int{1, 2, 3, 4, 5}\n  sum := 0\n  for _, num := range numbers {\n    sum += num\n  }\n  fmt.Println("Sum:", sum)\n}',
    },
    {
        language: "rust",
        code: 'fn main() {\n  let numbers = vec![1, 2, 3, 4, 5];\n  let sum: i32 = numbers.iter().sum();\n  println!("Sum: {}", sum);\n}',
    },
];

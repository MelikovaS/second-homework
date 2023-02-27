// See https://aka.ms/new-console-template for more information
using System;

var num = 1321;
if (num > 999 && num < 10000)
{
    if ((num / 1000) == (num % 10) && ((num / 100) % 10) == ((num / 10) % 10))
    {
        Console.WriteLine("YES!");
    }
    else
    {
        Console.WriteLine("NO!");
    }
}
else
{
    Console.WriteLine("NO!");
}
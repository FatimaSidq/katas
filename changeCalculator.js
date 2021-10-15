function calculateChange(total, cash)
{
  let change = cash - total;
  let result = {};

  while (change > 0)
  {
    if (change > 2000)
    {
      change -= 2000;
      if (result['twentyDollar'])
      {
        result['twentyDollar'] += 1
      }
      else
      {
        result['twentyDollar'] = 1
      }
    }
    else if (change > 1000)
    {
      change -= 1000;
      if (result['tenDollar'])
      {
        result['tenDollar'] += 1
      }
      else
      {
        result['tenDollar'] = 1
      }
    }
    else if (change > 500)
    {
      change -= 500;
      if (result['fiveDollar'])
      {
        result['fiveDollar'] += 1
      }
      else
      {
        result['fiveDollar'] = 1
      }
    }
    else if (change > 200)
    {
      change -= 200;
      if (result['twoDollar'])
      {
        result['twoDollar'] += 1
      }
      else
      {
        result['twoDollar'] = 1
      }
    }
    else if (change > 100)
    {
      change -= 100;
      if (result['oneDollar'])
      {
        result['oneDollar'] += 1
      }
      else
      {
        result['oneDollar'] = 1
      }
    }
    else if (change > 25)
    {
      change -= 25;
      if (result['quarter'])
      {
        result['quarter'] += 1
      }
      else
      {
        result['quarter'] = 1
      }
    }
    else if (change > 10)
    {
      change -= 10;
      if (result['dime'])
      {
        result['dime'] += 1
      }
      else
      {
        result['dime'] = 1
      }
    }
    else if (change > 5)
    {
      change -= 5;
      if (result['nickel'])
      {
        result['nickel'] += 1
      }
      else
      {
        result['nickel'] = 1
      }
    }
    else
    {
      change -= 1;
      if (result['penny'])
      {
        result['penny'] += 1
      }
      else
      {
        result['penny'] = 1
      }
    }
  }
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
function isOddOrEven(start , end)
{
    for(let a = start; a <= end; a++)
    {
        if(a % 2===1)
        {
            console.log("Printing Odd Numbers"+a);
        }
        else
        {
            console.log("Print Even "+a);
        }
    }
}
isOddOrEven(1,30);
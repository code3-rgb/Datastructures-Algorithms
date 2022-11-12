const PrintEgyptian = (nr,dr)=>{

    if (dr == 0 || nr == 0)
    return;


if (dr % nr == 0)
{
    console.log("1/" + parseInt(dr / nr));
    return;
}


if (nr % dr == 0)
{
    console.log(parseInt(nr / dr));
    return;
}

if (nr > dr)
{
    console.log(parseInt(nr / dr) + " + ");
    printEgyptian(nr % dr, dr);
    return;
}


let n = parseInt(dr / nr, 10) + 1;
console.log("1/" + n + " + ");

PrintEgyptian(nr * n - dr, dr * n);

}


let nr = 6, dr = 14;
console.log("Egyptian Fraction Representation of ")
console.log(nr + "/" + dr + " is : ")

PrintEgyptian(nr, dr);
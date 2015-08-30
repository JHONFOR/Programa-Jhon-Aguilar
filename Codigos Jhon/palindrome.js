var palindrome="arañara";

var x=0;

var y=palindrome.length-1;

while(x<y)
{
	if(palindrome.charAt(x)==palindrome.charAt(y))
	{
      var p=true; 
      y--;
      x++;
	}
  

   if (palindrome.charAt(x)!=palindrome.charAt(y))
   {
   	 var p=false;
   	 y--;
   	 x++;
   }

}

if(p==true)
{
	console.log("es un palindromo");
}
if (p==false){
	console.log("no es un palindromo");
}

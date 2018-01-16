function translateUD()
{
	var userinput = document.getElementById("inputfield").value; 
	var limit = userinput.length; 
	var i = 0;
	var result = ""; 
	while (i < limit)
	{
		if(userinput.charAt(i) == 'a' || userinput.charAt(i) == 'e' || userinput.charAt(i) == 'i' || userinput.charAt(i) == 'o' || userinput.charAt(i) == 'u' || userinput.charAt(i) == 'y')
		{
			result += "ub"
		}
		result += userinput.charAt(i); 
		i++; 
	}
	document.getElementById("result").innerHTML = result; 
}
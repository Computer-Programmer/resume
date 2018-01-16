function translatePL()
{
	var userinput = document.getElementById("inputfield").value;
	var limit = userinput.length;
	var i = 0;
	var result = "";
	var firstletter = userinput.charAt(0);
	var part2 = "";
	{
		if (userinput.charAt(i) == 'a' || userinput.charAt(i) == 'e' || userinput.charAt(i) == 'i' || userinput.charAt(i) == 'o' || userinput.charAt(i) == 'u')
		{
			result += userinput+"yay"
		}
			else if ((userinput.charAt(i) != 'a' && userinput.charAt(i) != 'e' && userinput.charAt(i) != 'i' && userinput.charAt(i) != 'o' && userinput.charAt(i) != 'u')&&(userinput.charAt(i + 1) != 'a' && userinput.charAt(i + 1) != 'e' && userinput.charAt(i + 1) != 'i' && userinput.charAt(i + 1) != 'o' && userinput.charAt(i + 1) != 'u'))
			{
				var firsttwo = userinput.charAt(0) + userinput.charAt(1)

				for (var n = 2; n<limit; n++){
		part2 += userinput.charAt(n)
			}

				result += part2 + firsttwo + "ay" 
			}

		else 
		{
	for (var x = 1; x<limit; x++){
		part2 += userinput.charAt(x)
			}

			result += part2+firstletter+"ay"}
			
	}


		document.getElementById("result").innerHTML = result;


}

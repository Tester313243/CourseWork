function strcompare(_str1, _str2)
{
	if (_str1.length !== _str2.length) return 0;
	for (let i = 0; i < _str1.length; i++)
	{
		if (_str1[i] !== _str2[i]) return 0;
	}
	return 1;
}
function strlength(_str)
{
	return _str.length;
}
function max(x, y)
{
	if(x >= y)
	{
		return x;
	}
	else
	{
		return y;
	}
	return 0;
}
function strfunction(x)
{
	return "";
}
function strffunction(x)
{
	x = "dsasd";
	return "";
}
function main()
{
	let z = 0;
	let x = 0;
	z = 2147483647;
	let sa = "";
	let sb = "";
	z = max(1, -5);
	if(z > 0)
	{
		console.log("Welcome to BVD-2021!");
	}
	console.log('r');
	return 0;
}

//==============================================
main()
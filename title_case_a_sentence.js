function titleCase(str) {
  str = str.toLowerCase();
  var result = "";
  var reg = /(^[a-z]| [a-z])/gi;
  result = str.replace(reg, replacer);
  return result;
}


function replacer(match){
		return match.toUpperCase();
}

titleCase("sHoRt AnD sToUt");


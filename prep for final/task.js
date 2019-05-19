function phoneticLookup(val){
	var result ="";
	var data = { 
		"alpha":"Adams", 
		"bravo":"Boston",
		"charlie":"Chicago", 
		"delta":"Denver",
		"echo":"Easy", 
		"foxtrot":"Frank",
	}
		result=data[val];
	

	return result;
}
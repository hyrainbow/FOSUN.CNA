module.exports =  {
    infographic : {
	    color: [
	        '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
	    ]
    },
    macarons : {
	    color: [
	        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
	        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
	        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
	        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
	    ]
    },
    gray : {
	    color: [
	        '#757575','#c7c7c7','#dadada',
	        '#8b8b8b','#b5b5b5','#e9e9e9'
	    ]
    },
    getTheme: function(name) {
        if (name == "infographic"){
    	    return this.infographic;
        }else if (name == "macarons"){
    	    return this.macarons;
        }else if (name == "gray"){
    	    return this.gray;
        }
    }
}
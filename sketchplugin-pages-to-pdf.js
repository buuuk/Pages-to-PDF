var doc = context.document;
var pages = [doc pages];

if(!getPageByName("Pages to PDF")){
	var page = doc.addBlankPage();
    page.setName('Pages to PDF');
}

function getPageByName(name) {
    for (var i = 0; i < doc.pages().count(); i++) {
		var page = doc.pages()
		.objectAtIndex(i);
		if (page.name() == name) {
			doc.setCurrentPage(page);
			return page;
		}
    }
}

for (var i = 0; i < pages.count(); i++){
	// in the line above replace "i < 1" with "i < pages.count() to loop through the entire file
	var page = pages[i];
	var pageName = [page name];
	log(pageName);
	if(pageName != "Symbols" && pageName != "Pages to PDF" ){
		var allABs = pages[i].artboards();
		for(var j = 0; j < allABs.count(); j++){
			var ABname = allABs[j].name();
			var ABWidth = allABs[j].frame().width();
			var ABHeight = allABs[j].frame().height();
			//             log('   '+ ABname + ' W = ' + ABWidth + ' H = ' + ABHeight);
			if (j==0){
				var ABX = 0;
				var ABY = i*2000;
			}
			else{
				ABPWidth = 0;
				for(k=0;k<j;k++){
				var ABPWidth = ABPWidth + allABs[k].frame().width() + 100;
			log('new xy = ' + ABX + ' ' + ABY);
			}
			var ABX = 0 + ABPWidth;
			var ABY = i*2000;
		}
			var newArtboard = [MSArtboardGroup new]
			var newArtboardFrame = [newArtboard frame]
			[newArtboardFrame setWidth:ABWidth]
			[newArtboardFrame setHeight:ABHeight]
			[newArtboardFrame setX:ABX]
			[newArtboardFrame setY:ABY]
			[newArtboard setName:ABname]
			var pagenew = getPageByName("Pages to PDF");
		    [pagenew addLayers:[NSArray arrayWithObjects:newArtboard]]
		}
	}
}
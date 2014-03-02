var library = imgLibrary();

imgFind();

function imgFind() {
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        console.log("image found: " + imgs[i].src);
		console.log("img height: " + imgs[i].height);
		console.log("img width: " + imgs[i].width);
		var ratio = imgs[i].width/imgs[i].height;
		var closest = null;
		for (var j = 0; j < library.length; j++) {
			if(closest == null || Math.abs(library[j].ratio - ratio) < Math.abs(closest.ratio - ratio)){
				closest = library[j];
			}
		}
		imgs[i].src = closest.src;
		//imgs[i].style.background-repeat = 'repeat-y';
		//imgs[i].style.width = '100%';
    }

    return imgSrcs;
}

function image(ratio, src){
	this.ratio=ratio
	this.src=src
}

function imgLibrary(){
	var images = new Array()
	images.push(new image(220/237, "http://upload.wikimedia.org/wikipedia/commons/thumb/d/df/JohnStamosHWoFFeb2012.jpg/220px-JohnStamosHWoFFeb2012.jpg"))
	images.push(new image(320/240, "http://media2.s-nbcnews.com/j/streams/2013/August/130819/6C8670836-6c8284491-130716-john-stamos.blocks_desktop_small.jpg"))
	images.push(new image(220/364, "http://blogs.babble.com/famecrawler/files/2010/11/45423PCN_Smile05.jpg"))
	return images
}
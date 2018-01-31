var GeekLabel = GeekLabel || {};

// Turn element witch class 'slider' into horizontal corausel
GeekLabel.loadSlider = function(){

	if(document.readyState === "complete") {
		let allContainer = document.getElementsByClassName("slider");
		for(let i=0; i<allContainer.length; i++){
			let dom = allContainer[i];
			let slider = new Slider();
			slider.createSlider(dom, 'horizontal', 3);
		}
	}else{
		window.setTimeout(GeekLabel.loadSlider, 100);
	}
}

// slide document to given element id 
GeekLabel.goToId = function(eleId, step, fps){
	let ele = document.getElementById(eleId);
	if(!ele  || !step || !fps )return;
	
	let eleTop = ele.getBoundingClientRect().top;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
	let posY= eleTop+scrollTop;
	
	if(scrollTop+step >= posY){
		window.scrollTo(0, posY);
	}else{
		window.scrollTo(0, scrollTop+step);
		setTimeout(function(){
			GeekLabel.goToId(eleId, step, fps);
		}, 1000/fps);
	}
}

GeekLabel.loadSlider();
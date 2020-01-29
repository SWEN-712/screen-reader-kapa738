currentSvg = "";
title = "";

state1 = {
    included: false,
    name: "State 1",
	action: "null",
	startState:false,
	endState:false,
    connections: {
        To2: false,
        To3: false,
        To4: false
    }
}

state2 = {
    included: false,
    name: "State 2",
	action: "null",
	startState:false,
	endState:false,
    connections: {
        To1: false,
        To3: false,
        To4: false
    }
}

state3 = {
    included: false,
    name: "State 3",
	action: "null",
	startState:false,
	endState:false,
    connections: {
        To2: false,
        To1: false,
        To4: false
    }
}

state4 = {
    included: false,
    name: "State 4",
	action: "null",
	startState:false,
	endState:false,
    connections: {
        To2: false,
        To3: false,
        To1: false
    }
}

state1Box=`<rect x="0" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state1.name}"/><text x="5" y="15" fill="black"><a>${state1.name}</a></text>`;
state2Box=`<rect x="200" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state2.name}"/><text x="205" y="15" fill="black"><a>${state2.name}</a></text>`;
state3Box=`<rect x="0" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state3.name}"/><text x="5" y="215" fill="black"><a>${state3.name}</a></text>`;
state4Box=`<rect x="200" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state4.name}"/><text x="205" y="215" fill="black"><a>${state4.name}</a></text>`;

line12=`<line x1="100" y1="50" x2="200" y2="50" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state2.name}"/>`;
arrow1To2=`<polygon points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state2.name}" />`;
arrow2To1=`<polygon points="125,35 125,65 100,50" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state1.name}" />`;
action1To2=`<text points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="${state1.action} from ${state1.name} to ${state2.name}" />`;

line13=`<line x1="50" y1="100" x2="50" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state3.name}"/>`;
arrow3To1=`<polygon points="35,125 65,125 50,100" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state1.name}" />`;
arrow1To3=`<polygon points="35,175 65,175 50,200" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state3.name}" />`;

line14=`<line x1="100" y1="100" x2="200" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state4.name}"/>`;
arrow4To1=`<polygon points="100,100 100,125 125,100" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state1.name}" />`;
arrow1To4=`<polygon points="200,200 200,175 175,200" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state4.name}" />`;
action4To1=`<text points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="${state4.action} from ${state4.name} to ${state1.name}" />`;

line23=`<line x1="200" y1="100" x2="100" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state2.name} and ${state3.name}"/>`;
arrow3To2=`<polygon points="200,100 200,125 175,100" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state2.name}" />`;
arrow2To3=`<polygon points="100,200 100,175 125,200" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state3.name}" />`;
action2To3=`<text points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="${state2.action} from ${state2.name} to ${state3.name}" />`;

line24=`<line x1="250" y1="100" x2="250" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state2.name} and ${state4.name}"/>`;
arrow4To2=`<polygon points="235,125 265,125 250,100" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state2.name}" />`;
arrow2To4=`<polygon points="235,175 265,175 250,200" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state4.name}" />`;

line34=`<line x1="100" y1="250" x2="200" y2="250" style="stroke-width: 3; stroke:black" title="arrow between ${state3.name} and ${state4.name}"/>`;
arrow3To4=`<polygon points="175,235 175,265 200,250" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state4.name}" />`;
arrow4To3=`<polygon points="125,235 125,265 100,250" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state3.name}" />`;
action3To4=`<text points="175,35 175,65 200,50" style="stroke:black;stroke-width:1" title="${state3.action} from ${state3.name} to ${state4.name}" />`;

function generateSvg(){
    getData();
    updateTemplates();
    svgString = addSvg();
    title = "UML diagram";
    document.getElementById("svgPanel").innerHTML = svgString;
    document.getElementById("downloadSvg").style.display = "inline";
}

function updateTemplates(){
    state1Box=`<rect x="0" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state1.name}"/><text x="5" y="15" fill="black"><a>${state1.name}</a></text>`;
    state2Box=`<rect x="200" y="0" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state2.name}"/><text x="205" y="15" fill="black"><a>${state2.name}</a></text>`;
    state3Box=`<rect x="0" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state3.name}"/><text x="5" y="215" fill="black"><a>${state3.name}</a></text>`;
    state4Box=`<rect x="200" y="200" width="100" height="100" style="fill:white; stroke-width: 1; stroke:black" title="${state4.name}"/><text x="205" y="215" fill="black"><a>${state4.name}</a></text>`;
	startState1=`<circle cx="75" cy="50" r="25" stroke="black" stroke-width="3" fill="black" title="${state1.name}"/>`;
	startState2=`<circle cx="250" cy="50" r="25" stroke="black" stroke-width="3" fill="black" title="${state2.name}"/>`;
	startState3=`<circle cx="50" cy="250" r="25" stroke="black" stroke-width="3" fill="black" title="${state3.name}"/>`;
	startState4=`<circle cx="250" cy="250" r="25" stroke="black" stroke-width="3" fill="black" title="${state4.name}"/>`;
	endState1=`<circle cx="100" cy="50" r="25" stroke="black" stroke-width="3" fill="none" title="${state1.name}"/>`;
	endState2=`<circle cx="225" cy="50" r="25" stroke="black" stroke-width="3" fill="none" title="${state2.name}"/>`;
	endState3=`<circle cx="75" cy="250" r="25" stroke="black" stroke-width="3" fill="none" title="${state3.name}"/>`;
	endState4=`<circle cx="225" cy="250" r="25" stroke="black" stroke-width="3" fill="none" title="${state4.name}"/>`;

    line12=`<line x1="100" y1="50" x2="200" y2="50" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state2.name}"/>`;
    arrow1To2=`<polygon points="175,45 175,55 200,50" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state2.name}" />`;
    arrow2To1=`<polygon points="125,35 125,65 100,50" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state1.name}" />`;
	action1To2=`<text x="102" y="48">${state1.action}</text>`;

    line13=`<line x1="50" y1="100" x2="50" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state3.name}"/>`;
    arrow3To1=`<polygon points="35,125 65,125 50,100" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state1.name}" />`;
    arrow1To3=`<polygon points="35,175 65,175 50,200" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state3.name}" />`;

    line14=`<line x1="100" y1="100" x2="200" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state1.name} and ${state4.name}"/>`;
    arrow4To1=`<polygon points="100,100 100,125 125,100" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state1.name}" />`;
    arrow1To4=`<polygon points="200,200 200,175 175,200" style="stroke:black;stroke-width:1" title="arrow from ${state1.name} to ${state4.name}" />`;
	action4To1=`<text x="102" y="48">${state4.action}</text>`;

    line23=`<line x1="200" y1="100" x2="100" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state2.name} and ${state3.name}"/>`;
    arrow3To2=`<polygon points="200,100 200,125 175,100" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state2.name}" />`;
    arrow2To3=`<polygon points="100,200 110,180 120,190" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state3.name}" />`;
	action2To3=`<text x="148" y="150">${state2.action}</text>`;

    line24=`<line x1="250" y1="100" x2="250" y2="200" style="stroke-width: 3; stroke:black" title="arrow between ${state2.name} and ${state4.name}"/>`;
    arrow4To2=`<polygon points="235,125 265,125 250,100" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state2.name}" />`;
    arrow2To4=`<polygon points="235,175 265,175 250,200" style="stroke:black;stroke-width:1" title="arrow from ${state2.name} to ${state4.name}" />`;

    line34=`<line x1="100" y1="250" x2="200" y2="250" style="stroke-width: 3; stroke:black" title="arrow between ${state3.name} and ${state4.name}"/>`;
    arrow3To4=`<polygon points="175,245 175,255 200,250" style="stroke:black;stroke-width:1" title="arrow from ${state3.name} to ${state4.name}" />`;
    arrow4To3=`<polygon points="125,235 125,265 100,250" style="stroke:black;stroke-width:1" title="arrow from ${state4.name} to ${state3.name}" />`;
	action3To4=`<text x="105" y="248">${state3.action}</text>`;
}

function getData(){
    state1.included = document.getElementById("state1Include").checked;
    state2.included = document.getElementById("state2Include").checked;
    state3.included = document.getElementById("state3Include").checked;
    state4.included = document.getElementById("state4Include").checked;
	
	state1.startState = document.getElementById("state1Start").checked;
    state2.startState = document.getElementById("state2Start").checked;
    state3.startState = document.getElementById("state3Start").checked;
    state4.startState = document.getElementById("state4Start").checked;
	
	state1.endState = document.getElementById("state1End").checked;
    state2.endState = document.getElementById("state2End").checked;
    state3.endState = document.getElementById("state3End").checked;
    state4.endState = document.getElementById("state4End").checked;
	
	state1.action = document.getElementById("arrow1to2text").value;
    state2.action = document.getElementById("arrow2to3text").value;
    state3.action = document.getElementById("arrow3to4text").value;
    state4.action = document.getElementById("arrow4to1text").value;

    if(state1.included){
        state1.name = document.getElementById("state1Name").value;
		state1.name = "state" + " " + state1.name;
		if(state1.startState){
			state1.name = "StartState";
		}
		if(state1.endState){
			state1.name = "EndState";
		}
        state1.connections.To2 = document.getElementById("state1To2").checked;
        state1.connections.To3 = document.getElementById("state1To3").checked;
        state1.connections.To4 = document.getElementById("state1To4").checked;
    }

    if(state2.included){
        state2.name = document.getElementById("state2Name").value;
		state2.name = "state" + " " + state2.name;
		if(state2.startState){
			state2.name = "StartState";
		}
		if(state2.endState){
			state2.name = "EndState";
		}
        state2.connections.To1 = document.getElementById("state2To1").checked;
        state2.connections.To3 = document.getElementById("state2To3").checked;
        state2.connections.To4 = document.getElementById("state2To4").checked;
    }

    if(state3.included){
        state3.name = document.getElementById("state3Name").value;
		state3.name = "state" + " " + state3.name;
		if(state3.startState){
			state3.name = "StartState";
		}
		if(state3.endState){
			state3.name = "EndState";
		}
        state3.connections.To2 = document.getElementById("state3To2").checked;
        state3.connections.To1 = document.getElementById("state3To1").checked;
        state3.connections.To4 = document.getElementById("state3To4").checked;
    }

    if(state4.included){
        state4.name = document.getElementById("state4Name").value;
		state4.name = "state" + " " + state4.name;
		if(state4.startState){
			state4.name = "StartState";
		}
		if(state4.endState){
			state4.name = "EndState";
		}
        state4.connections.To2 = document.getElementById("state4To2").checked;
        state4.connections.To3 = document.getElementById("state4To3").checked;
        state4.connections.To1 = document.getElementById("state4To1").checked;
    }
}

function addSvg(){
    currentSvg = "";
    if(state1.included){
		if(state1.startState){
			currentSvg += startState1;
		} else if(state1.endState) {
			currentSvg += endState1;
		} else {
			currentSvg += state1Box;
		}
        if(state2.included && state1.connections.To2){
            currentSvg += line12 + arrow1To2 + action1To2;
        }
        if(state3.included && state1.connections.To3){
            currentSvg += line13 + arrow1To3;
        }
        if(state4.included && state1.connections.To4){
            currentSvg += line14 + arrow1To4;
        }
    }
    if(state2.included){
        if(state2.startState){
			currentSvg += startState2;
		} else if(state2.endState) {
			currentSvg += endState2;
		} else {
			currentSvg += state2Box;
		}
        if(state1.included && state2.connections.To1){
            if(!state1.connections.To2){
                currentSvg += line12;
            }
            currentSvg += arrow2To1;
        }
        if(state3.included && state2.connections.To3){
            currentSvg += line23 + arrow2To3 + action2To3;
        }
        if(state4.included && state2.connections.To4){
            currentSvg += line24 + arrow2To4;
        }
    }
    if(state3.included){
        if(state3.startState){
			currentSvg += startState3;
		} else if(state3.endState) {
			currentSvg += endState3;
		} else {
			currentSvg += state3Box;
		}
        if(state1.included && state3.connections.To1){
            if(!state1.connections.To3){
                currentSvg += line13;
            }
            currentSvg += arrow3To1;
        }
        if(state2.included && state3.connections.To2){
            if(!state2.connections.To3){
                currentSvg += line23;
            }
            currentSvg += arrow3To2;
        }
        if(state4.included && state3.connections.To4){
            currentSvg += line34 + arrow3To4 + action3To4;
        }
    }
    if(state4.included){
        if(state4.startState){
			currentSvg += startState4;
		} else if(state4.endState) {
			currentSvg += endState4;
		} else {
			currentSvg += state4Box;
		}
        if(state1.included && state4.connections.To1){
            if(!state1.connections.To4){
                currentSvg += line14;
            }
            currentSvg += arrow4To1 + action4To1;
        }
        if(state3.included && state4.connections.To3){
            if(!state3.connections.To4){
                currentSvg += line34;
            }
            currentSvg += arrow4To3;
        }
        if(state2.included && state4.connections.To2){
            if(!state2.connections.To4){
                currentSvg += line24;
            }
            currentSvg += arrow4To2;
        }
    }
    return currentSvg;
}

function getTitle(){
    tempTitle = [];
    if(state1.included){
        tempTitle.push(state1.name);
    }
    if(state2.included){
        tempTitle.push(state2.name);
    }
    if(state3.included){
        tempTitle.push(state3.name);
    }
    if(state4.included){
        tempTitle.push(state4.name);
    }
    return tempTitle.join(', ');
}

function downloadSvg(){

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + '<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" title="' + title + '">' + currentSvg + '</svg>');
    element.setAttribute('download', 'uml.svg');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

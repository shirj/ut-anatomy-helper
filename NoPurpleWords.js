console.log("Anatomy Helper Running")
document.body.style.border = "2px solid blue";
// $('text[fill="#7030A0"]').attr({"fill": "#FFFFFF", "purple": true});
setInterval(function() {
	let items = document.querySelectorAll('text[fill="#7030A0"]');
	for (let i = 0; i < items.length; i++) {
		console.log(items[i]);
		items[i].setAttribute("fill", "#FFFFFF");
		items[i].setAttribute("purple", true);
	}
	// $('text[fill="#7030A0"]').attr({"fill": "#FFFFFF", "purple": true});
}, 1000);

// // Select the node that will be observed for mutations
// const targetNode = document.getElementById('presentation-container');

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };

// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
// 	document.body.style.border = "5px solid red";
//     // Use traditional 'for loops' for IE 11
//     for(let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

// // Later, you can stop observing
// // observer.disconnect();

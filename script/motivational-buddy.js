// const renderQuotes = (data) => {
//     const motivationalQuotes = document.getElementById("motivational-quotes")

//     data.forEach((item) => {
//         let conditionalClass = ''

//         // need to look up what !item.alsoWasWriter //
//         if (!item.alsoWasWriter) {
//             conditionalClass = 'none';
//         }
        
//         let listItem =
//         `
//             <li class="${conditionalClass}>
//                 <p class="motivational-buddy_quotes">{$item.quote}</p>
//             </li>
//         `
    
//         motivationalQuotes.insertAdjacentHTML('beforeend', listItem)
//     })
// }

const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('motivational-quotes')

	// Loop through each item in the data array
	data.forEach((item) => {
		let conditionalClass = '' // Set an empty class variable

		if (!item.alsoWasWriter) { // Conditional if this is `false` (“not true”)
			conditionalClass = 'faded' // Update the variable
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		let listItem =
        `
            <li class="${conditionalClass}>
                <p class="motivational-buddy_quotes">${item.quote}</p>
            </li>
        `

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})
}


fetch('script/motivational-buddy.json')
    .then(response => response.json())
    .then(data => {
        renderItems(data);
        console.log(data);
    });


// MAKE MY BUDDY MOVE //
// dragElement(document.getElementById ("moving-buddy"));

// function dragElement(mov)
// const renderQuotes = (data) => {
//     const motivationalQuotes = document.getElementById("motivational-quotes")

//     data.forEach((item) => {
//         let conditionalClass = ''

//         // need to look up what !item.alsoWasWriter //
//         if (!item.quote) {
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


// fetch('/script/motivational-buddy.json')
//     .then(response => response.json())
//     .then(data => {
//         renderItems(data)
//     })



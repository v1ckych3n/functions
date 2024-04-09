const renderQuotes = (data) => {
    const motivationalQuotes = document.getElementById("motivation-quotes");

    data.forEach(item) => let conditionalClass = ''

    // need to look up what !item.alsoWasWriter //
    if (!item.alsoWasQuote) {
        conditionalClass = 'none';
    }

    let listItem =
        `
            <li class="${conditionalClass}>
                <p class="motivational-buddy_quotes">{$item.quote}</p>
            </li>
        `
    
    motivationalQuotes.insertAdjacentHTML('beforeend', listItem);
}


fetch('motivational-buddy.json')
    .then(response)
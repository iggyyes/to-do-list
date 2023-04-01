//doing the list first
const listsContainer = document.querySelector('[data-lists]')

let lists = ['pieczareczki', 'jakies gowno']

function render() {
    clearElement(listsContainer)
    // <li class="list-name">work</li>
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add('list-name')
        listElement.innerText = list
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
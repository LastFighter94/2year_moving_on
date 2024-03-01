console.log('hello js');

const makePopupLogic = (closeSelector, divToHideId) => {
    // divToHideId = '#string'
    // closeSelector = 'string' - без точки и решетки

    document.getElementById(closeSelector).addEventListener('click', () => {
        document.querySelector(divToHideId).style.display = 'none';
    })
}
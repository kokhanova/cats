const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formCatAdd = document.querySelector('#popup-form-cat');

function serializeForm(elements){
    const formData = {};

    elements.forEach(input => {

        if(input.type === 'submit') return;

        if(input.type !== 'checkbox'){
            formData[input.name] = input.value;
        }

        if(input.type === 'checkbox'){
            formData[input.name] = input.checked;
        }
    });

    return formData;
}

function createCat(dataCat){
    const cardInstance = new Card(dataCat, "#card-template", handleCatTitle);
    const newCardElement = cardInstance.getElement();
    cardsContainer.append(newCardElement);
}

function handleFormAddCat(e){
    e.preventDefault();
    const elementsFormCat = [...formCatAdd.elements];
    const dataFormForm = serializeForm(elementsFormCat);

    api.addNewCat(dataFormForm)
        .then(()=>{
            createCat(dataFormForm);
            popupAddCat.close();
        });
}

api.getAllCats()
    .then(({data})=>{
        data.forEach(function (catData) {
            createCat(catData);
        });
    });



const popupAddCat = new Popup('popup-add-cats');

popupAddCat.setEventListener();

const popupCatInfo = new Popup('popup-cat-info');
popupCatInfo.setEventListener();

function handleCatTitle(cardInstans){
    catsInfoInstance.setData(cardInstans);
    popupCatInfo.setContent(catsInfoElement);
    popupCatInfo.open();
}

const catsInfoInstance = new CatsInfo('#cats-info-template');

const catsInfoElement = catsInfoInstance.getElement();

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formCatAdd.addEventListener('submit', handleFormAddCat);

popupAddCat.close();
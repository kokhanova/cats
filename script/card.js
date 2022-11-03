class Card {
    constructor(dataCat, selectorTemplate) {
        this._data = dataCat;
        this._handleCatTitle = handleCatTitle;
        this._selectorTemplate = selectorTemplate;
    }

    _getTempate() {
        return document.querySelector(this._selectorTemplate).content.querySelector(".card");
    }

    getElement() {
        this.element = this._getTempate().cloneNode(true); 
        this.cardTitle = this.element.querySelector(".card__name");
        this.cardImage = this.element.querySelector(".card__image");
        this.cardLike = this.element.querySelector(".card__like");

        if (!this._data.favourite) {
        this.cardLike.remove();
    }

    this.cardTitle.textContent = this._data.name;
        this.cardImage.src = this._data.img_link;

        this.setEventListener();
        return this.element;
    }

    getData(){
        return this._data;
    }

    getId(){
        return this._data._id;
    }

    setData(newData) {
        this._data = newData;
    }

    deteteView() {
        this.element.remove();
        this.element = null;
    }

        setEventListener(){
            this.cardTitle.addEventListener('click', () => this._handleCatTitle(this));
        }
    }
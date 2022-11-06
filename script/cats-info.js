class CatsInfo {
    constructor(
        selectorTemplate,
        handleEditCatInfo,
        handleLikeCat,
        handleDeleteCat,
    ) {
        this._selectorTemplate = selectorTemplate;
        this._handleEditCatInfo = handleEditCatInfo;
        this._handleLikeCat = handleLikeCat;
        this._handleDeleteCat = handleDeleteCat;
        this._data = {};
    }

    setData(cardInstance) {
        this._cardInstance = cardInstance;
        this._data = this._cardInstance.getData();
        console.log(this._data);

        this.catImage.src =
            this._data.img_link ||
            "https://i.pinimg.com/474x/4a/74/ca/4a74cafe0cf960ea98df140283d22c65--simons-cat-cat-pattern.jpg";
        this.catAbout.textContent = this._data.description;
        this.catName.textContent = this._data.name;
        this.catAge.textContent = this._data.age || "Неопереден";
        this.catId.textContent = this._data.id;
    }

    _getTemplate() {
        return document.querySelector(this._selectorTemplate).content
            .children[0];
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true);

        this.buttonLiked = this.element.querySelector(".cat-info__favourite");

        this.catImage = this.element.querySelector(".cat-info__image");
        this.catId = this.element.querySelector(".cat-info__id");
        this.catName = this.element.querySelector(".cat-info__name");
        this.catAge = this.element.querySelector(".cat-info__age");
        this.catAbout = this.element.querySelector(".cat-info__desc");

        this.setEventListener();
        return this.element;
    }

    setEventListener() {}
}

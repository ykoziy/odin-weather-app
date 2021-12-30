class Carousel {
  constructor(controls, container) {
    this.controls = document.querySelector(controls);
    this.container = document.querySelector(container);
    this.currentPage = 1;

    this.pages = [
      Array.from(this.container.children).slice(0, 7),
      Array.from(this.container.children).slice(7, 14),
      Array.from(this.container.children).slice(14, 21),
      Array.from(this.container.children).slice(21, 24),
    ];

    Array.from(this.controls.children).forEach((element, index) => {
      if (index == 0) {
        element.addEventListener('click', this.#handlePreviousClick.bind(this));
      } else if (index > 0 && index < 5) {
        element.addEventListener('click', this.#viewPage.bind(this, index));
      } else {
        element.addEventListener('click', this.#handleNextCLick.bind(this));
      }
    });
  }

  #viewPage(pageNum) {
    this.pages[this.currentPage - 1].forEach((item) => {
      item.classList.toggle('hidden');
    });
    this.pages[pageNum - 1].forEach((item) => {
      item.classList.toggle('hidden');
    });
    this.currentPage = pageNum;
  }

  #handlePreviousClick() {
    if (this.currentPage - 1 == 0) {
      this.#viewPage(4);
    } else {
      this.#viewPage(this.currentPage - 1);
    }
  }

  #handleNextCLick() {
    if (this.currentPage + 1 <= 4) {
      this.#viewPage(this.currentPage + 1);
    } else {
      this.#viewPage(1);
    }
  }
}

export { Carousel };

import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      // console.log(goToPage);
      handler(goToPage);
    });
  }
  _all() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    return `<button class="btn--inline pagination__btn--all" >     
    <span>${numPages} Pages</span>
  </button>`;
  }
  _generateMarkupButton(arrow) {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    if (arrow == 'nextpage') {
      return ` <button data-goto=${
        curPage + 1
      } class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button> ${this._all()}
  `;
    }

    if (arrow == 'prevpage') {
      return `<button data-goto=${
        curPage - 1
      } class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button> `;
    }

    if (all == 'all') return ``;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const all = `<button class="btn--inline--all ">     
    <span>${numPages}</span>
  </button>`;
    const nextpage = 'nextpage';
    const prevpage = 'prevpage';

    console.log(numPages);
    //Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(nextpage);
    }

    //Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(prevpage);
    }

    //Other page
    if (curPage < numPages) {
      return `${this._generateMarkupButton(
        nextpage
      )}${this._generateMarkupButton(prevpage)}`;
    }

    //all pages

    //Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();

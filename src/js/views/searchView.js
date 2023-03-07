class SearchView {
  #perentEl = document.querySelector('.search');
  getQuery() {
    const query = this.#perentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
  #clearInput() {
    this.#perentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#perentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();

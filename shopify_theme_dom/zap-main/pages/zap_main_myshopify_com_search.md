# Shopify page scrape

- URL: https://zap-main.myshopify.com/search
- Title: Search
- Body classes: template-search
- Custom elements: burger-menu, cart-drawer, cart-drawer-items, cart-note, header-search, localization-form, predictive-search, product-card-small, shop-cart-sync, sticky-header
- Headings: Honey Lemon Infusion | Light Box | Discovery Box | Honey Lemon Infusion | Light Box | Discovery Box | Subscribe to our Newsletter and Get 15% off your first order | Search | About us | products | products | Customer service | Customer service | information | information

## 1. shopify-section-template--25743036416319__main-search

- Tag: section
- Classes: shopify-section section-search
- Headings: Search

```html
<section id="shopify-section-template--25743036416319__main-search" class="shopify-section section-search"><link href="//zap-main.myshopify.com/cdn/shop/t/2/assets/component-card.css?v=8378983569183607361774521151" rel="stylesheet" type="text/css" media="all">
<link href="//zap-main.myshopify.com/cdn/shop/t/2/assets/template-collection.css?v=87391627709612599701773127848" rel="stylesheet" type="text/css" media="all">
<link href="//zap-main.myshopify.com/cdn/shop/t/2/assets/component-article-card.css?v=159023789812106902011772782609" rel="stylesheet" type="text/css" media="all">
<link href="//zap-main.myshopify.com/cdn/shop/t/2/assets/component-search.css?v=113360489914788872261772782617" rel="stylesheet" type="text/css" media="all">
<link href="//zap-main.myshopify.com/cdn/shop/t/2/assets/template-search.css?v=46404203294596467201773127849" rel="stylesheet" type="text/css" media="all">
<style data-shopify="">#shopify-section-template--25743036416319__main-search {

  padding-top: 5.6rem;



  padding-bottom: 5.6rem;

}

@media screen and (min-width: 750px) { #shopify-section-template--25743036416319__main-search {

  padding-top: 7.2rem;



  padding-bottom: 7.2rem;

} }

@media screen and (min-width: 1360px) { #shopify-section-template--25743036416319__main-search {

  padding-top: 10rem;



  padding-bottom: 10rem;


} }


  predictive-search .spinner {
    width: 3.2rem;
    height: 3.2rem;
  }</style><div class="section-template--25743036416319__main-search-padding template-search ">
  <div class="template-search__header">
    <div class="container">
      <div class="page-header">
        <div class="page-header__inner template-search__header-inner"><h1 class="main-page-title page-title title--page h2">
              Search
            </h1></div>
      </div>
    </div>
    <div class="template-search__search">
      <form action="/search" method="get" role="search" class="search">
        <div class="search__form-inner">
          <div class="container">
            <div class="field">
              <input class="search__input field__input h3" id="Search-In-Template" type="search" dir="ltr" name="q" value="" placeholder="Search..." autofocus="" style="">
              <label class="visually-hidden" for="Search-In-Template">Search</label>
              <input name="options[prefix]" type="hidden" value="last" style="">

              <button class="search__button field__button focus-inset" aria-label="Search" type="submit">
                <svg class="icon icon-search-input" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.8435 29.0455C28.1755 29.3774 28.7136 29.3774 29.0456 29.0455C29.3775 28.7135 29.3775 28.1753 29.0456 27.8434L28.4446 28.4444L27.8435 29.0455ZM24.0524 13.8039H23.2024C23.2024 18.9945 18.9946 23.2023 13.804 23.2023V24.0523V24.9023C19.9335 24.9023 24.9024 19.9334 24.9024 13.8039H24.0524ZM13.804 24.0523V23.2023C8.61346 23.2023 4.40566 18.9945 4.40566 13.8039H3.55566H2.70566C2.70566 19.9334 7.67457 24.9023 13.804 24.9023V24.0523ZM3.55566 13.8039H4.40566C4.40566 8.61333 8.61346 4.40554 13.804 4.40554V3.55554V2.70554C7.67457 2.70554 2.70566 7.67445 2.70566 13.8039H3.55566ZM13.804 3.55554V4.40554C18.9946 4.40554 23.2024 8.61333 23.2024 13.8039H24.0524H24.9024C24.9024 7.67445 19.9335 2.70554 13.804 2.70554V3.55554ZM21.1243 21.1242L20.5233 21.7252L27.8435 29.0455L28.4446 28.4444L29.0456 27.8434L21.7253 20.5231L21.1243 21.1242Z" fill="currentColor"></path>
</svg>

              </button>
              <button class="search__button search__button--reset field__button focus-inset hidden" aria-label="Reset search" type="reset">
                <svg class="icon icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 4L4 20M20 20L4 4.00001" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"></path>
</svg>

              </button>
            </div>
          </div>
        </div></form>
</div>
  </div></div>

<script>
  (() => {
    function initSearch() {
      const input = document.querySelector('#Search-In-Template');
      if (input.closest('predictive-search')) return;
      if (!input) return;

      const form = input.form;
      const resetBtn = form?.querySelector('.search__button--reset');

      input.focus();
      const length = input.value.length;
      input.setSelectionRange(length, length);
      resetBtn.classList.toggle("hidden", !length);

      input?.addEventListener('input', (event) => {
        resetBtn.classList.toggle("hidden", !event.target.value);
      });

      resetBtn?.addEventListener('click', (event) => {
        event.preventDefault();
        if (input) {
          input.value = '';
          input.focus();
        }
        resetBtn.classList.add("hidden");
      });
    }
    window.addEventListener('load', initSearch);
  })();
</script>


</section>
```

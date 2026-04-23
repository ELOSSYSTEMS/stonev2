# Shopify page scrape

- URL: https://elegance-canvas.myshopify.com/collections/pro-art-series
- Title: Pro Art Series – Elegance-canvas
- Body classes: gradient
- Custom elements: facet-filters, localization-form, predictive-search, shop-cart-sync
- Headings: Cart | Your cart is empty | Search | Menu | Pro Art Series | Moonlit Breeze | Graceful Beauty | Mona’s Coffee | The Rebel Music | The Geisha’s Grace | Timeless Reflection | All filters | Join our creative community

## 1. shopify-section-template--19562840981686__main

- Tag: div
- Classes: shopify-section
- Headings: Moonlit Breeze | Graceful Beauty | Mona’s Coffee | The Rebel Music | The Geisha’s Grace | Timeless Reflection

```html
<div id="shopify-section-template--19562840981686__main" class="shopify-section"><style data-shopify="">.section-template--19562840981686__main-padding {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media screen and (min-width: 768px) {
    .section-template--19562840981686__main-padding {
      padding-top: 105px;
      padding-bottom: 105px;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-template--19562840981686__main-padding {
      padding-top: 140px;
      padding-bottom: 140px;
    }
  }</style>
<style data-shopify="">.main-collection .collection-item:nth-child(odd){
        flex-direction:row-reverse;
    }
  .main-collection .collection-item{ margin-bottom:10rem;}
  .main-collection .collection-item .card_img{
      padding-right:5rem;
    }
  .filter-sidebar .offcanvas-body{
      /* scrollbar-width:none; */
    }
  .filter-sidebar label{
      /* cursor:pointer; */
      line-height: normal;
    }

  @media (min-width: 576px) {
    .sm-mt-14 {
      margin-top: 14%!important;
    }
  }</style>

<div class="color-scheme-1 gradient var(--h2)">
  <div class="container main_container section-template--19562840981686__main-padding">
    <div class="filter-sidebar">
      <label for="sidebar_assignedLimit" class="visually-hidden">Sidebar Limit</label>
      <input id="sidebar_assignedLimit" type="hidden" class="sidebar_assignedLimit visually-hidden" value="6" name="color_atribute" style="">
      <script src="//elegance-canvas.myshopify.com/cdn/shop/t/139/assets/product-grid.js?v=70237875177288712681774876171"></script>

<style data-shopify="">
    /* For screens below 768px (default) */
       @media (min-width: 576px) {
      .sm-mt-14 {
        margin-top: 14%!important;
      }
       }
    .filter_top_bar:has(.two_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even) > .row .main-card{ margin-left:auto;}
    /* .filter_top_bar:has(.two_column) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .card-title, .pages span){ font-size:var(--h2); } */
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .card-title, .pages span){ font-size:calc(var(--h2) * 0.8); }
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .card-title, .pages span){ font-size:calc(var(--h2) * 0.7); }
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card.sm-mt-14{  margin-top: 0% !important; transition: all 0.3s linear;}


    
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2){ margin-top: 14% !important;}
    /* .filter_top_bar:has(.two_column.active) + .sidebar>.main_collection #product-grid .product-card:nth-child(even){ margin-top: 14% !important;} */
    /* .filter_top_bar:has(.four_column.active) + .sidebar>.main_collection #product-grid .product-card:nth-child(even){ margin-top: 14% !important;} */
    

    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2)>.row{  justify-content:center !important;}
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+1)>.row{  justify-content:start !important;}
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n)>.row{ justify-content:end !important;}
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:is(:nth-child(4n+2), :nth-child(4n+3))>.row{justify-content:center;}
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(4n+4)>.row{ justify-content:end;}
    .main_collection .main-product .product-card:nth-child(even) .row{ justify-content:end; }
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2)>.row { justify-content: center !important; }
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card :is(.card .card-title) { font-size: calc(var(--h2) * 0.8); }
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card :is(.card .card-title) { font-size: calc(var(--h2) * 0.7); }


    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .quick-view,
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .add_to_cart{ width: 22px; height: 22px;}

    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .swiper-prev,
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .swiper-next,
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .quick-view,
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .add_to_cart{ width: 40px; height: 40px;}
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .swiper-next{right:15px;}
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .swiper-prev{left:15px;}
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card .main-card :is(.swiper-next svg.next-icon), .filter_top_bar:has(.four_column.active) + .sidebar>.main_collection #product-grid .product-card .main-card :is(.swiper-prev svg.prev-icon){ width:20px;}
    /* .filter_top_bar:has(.four_column.active) + .sidebar>.main_collection #product-grid .product-card .icon_container,
    .filter_top_bar:has(.four_column.active) + .sidebar>.main_collection #product-grid .product-card .slae_tag{ margin:14px !important;} */


    @media (max-width:1400px){
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-prev svg,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-next svg,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .quick-view,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .add_to_cart
      { width: 22px; height: 22px;}

    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-prev,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-next,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .quick-view,
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .icon_container .add_to_cart{ width: 40px; height: 40px;}
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-next{right:15px;}
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card .swiper-prev{left:15px;}

    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:is(:nth-child(3n+1)) > .row {
      justify-content: flex-start !important;
  }
    }

    .main-product.row-cols-lg-3 :is(.main-card){
      width:100% !important;
    }
      
        .main-product.row-cols-lg-3 .product-card:nth-child(3n+2){ margin-top:14% !important;}
        @media (max-width: 991.98px) {
          .main-product.row-cols-lg-3 .product-card:nth-child(even){ margin-top:14% !important;}
          .main-product.row-cols-lg-3 .product-card:nth-child(odd){ margin-top:0 !important;}
        }
      

      @media (min-width: 992px) {

        
          .sidebar:has(.collapse-horizontal.show), .main-collection .sidebar{ grid-template-columns: auto 1fr; }
        

        
          .filter_menu{ display:none; }
        
      }
      /* .grid_container button{
        background: transparent;
        width: 50px;
        height: 50px;
        border-radius: 50rem;
        justify-content: center;
        align-items: center;
        transition:all 0.2s linear
    }
    .grid_container button svg{ width:16px; color: rgba(var(--color-foreground)); }
    .grid_container button.active {
        background: rgba(var(--color-primary-button-bg));
        width: 40px;
        height: 40px;
        border-radius: 50rem;
        justify-content: center;
        align-items: center;
    }
    .grid_container button {
        background:transparent;
        width: 40px;
        height: 40px;
        border-radius: 50rem;
        justify-content: center;
        align-items: center;
    }  */
    .grid_container button.four_column svg{ transform: rotate(90deg); }
    .grid_container button.active svg path {  color: rgba(var(--color-primary-button-text)); }
    /* .grid_container button{ border: 2px solid transparent;  padding: 3px 7px; background: rgba(var(--color-foreground) , 0.075);}  */
    .main_collection #product-grid>* { width: 50%; transition: all 0.3s linear; }
    .filter_top_bar:has(.two_column) + .sidebar>.main_collection #product-grid>*{  width: 50%; transition:all 0.3s linear ;}
    @media (min-width: 992px) {
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid>*{  width: 33.33%;   transition: all 0.3s linear; }
      
      .main_collection .facet-filters{ display:none !important; }
      .main-collection .sidebar_container .filter_results { padding-top: .5rem !important; }
      
    }

    @media (min-width: 1200px) {
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width: 25%;  transition:all 0.3s linear; }
      .sidebar .collapse-horizontal .card{ width: 350px; }
    }

    @media (max-width:  1199.98px) {
      .sidebar .collapse-horizontal .card{ width: 300px; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width:33.3%; transition:all 0.3s linear; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+1)>.row { justify-content: flex-start; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2)>.row { justify-content: center; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n)>.row { justify-content: end; }
    }





    @media (min-width: 1441px) {
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width: 25%;  transition:all 0.3s linear; }
    }
      @media (max-width: 1440px) {
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width: 33.33%;  transition:all 0.3s linear; }
       
      .filter_top_bar:has(.four_column) + .sidebar > .main_collection #product-grid .search-results-list-item:nth-child(3n + 1) > .row { justify-content: flex-start; }
      .filter_top_bar:has(.four_column) + .sidebar > .main_collection #product-grid .search-results-list-item:nth-child(3n) > .row { justify-content: end; }
      .filter_top_bar:has(.four_column) + .sidebar > .main_collection #product-grid .search-results-list-item:nth-child(3n + 2) > .row { justify-content: center; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(4n+4)>.row{ justify-content: flex-start !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .sm-mt-14 { margin-top: 0 !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card.even > .row { justify-content: center !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+3) > .row { justify-content: flex-end !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+1) > .row {justify-content: flex-start !important; }
       
       .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card :is(.card .card-title) {  font-size: var(--h5); }
    }

    @media (min-width:1200px) and (max-width: 1440px){
       .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .even { margin-top: 14%!important; }
    }


       @media (max-width: 1199.98px) {
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width: 50%;  transition:all 0.3s linear; }
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid>*{  width: 50%;   transition: all 0.3s linear; }

      
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2) {margin-top:0!important; }
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even) { margin-top: 14% !important; }
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(odd)>.row { justify-content: flex-start !important; }
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even)>.row { justify-content: flex-end !important; }
      .filter_top_bar:has(.four_column) + .sidebar > .main_collection #product-grid .search-results-list-item:nth-child(odd) > .row { justify-content: flex-start; }
      .filter_top_bar:has(.four_column) + .sidebar > .main_collection #product-grid .search-results-list-item:nth-child(even) > .row { justify-content: end; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(odd) > .row {justify-content: flex-start !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even) > .row {justify-content: flex-end !important; }
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even){ margin-top: 14% !important; }
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card :is(.card .card-title),
      .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card :is(.card .card-title)
       {
          font-size: var(--h2);
        }

      
    }

    @media (max-width:991.98px){
        .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid>*{ width:50%;  transition:all 0.3s linear; }
        .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(odd)>.row{ justify-content: flex-start; }
        .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even)>.row{ justify-content: end; }
       .main_collection .facet-filters{ display:block !important; }
  }

    @media (max-width: 780px) {
      .filter_top_bar .filter_container .sort{
        flex-direction: column;
        align-items: flex-end !important;
      }
      .filter_top_bar .filter_container :is(.product_count){
        margin-right: 0px !important;
      }

    }




    @media (max-width: 575.98px) {
      .main_collection.mobile_layout_two :is(.main-card .card .card-title) { font-size: var(--h5) !important; }
      .main_collection.mobile_layout_one :is(.main-card .card .card-title) { font-size: var(--h2) !important; }
      .main_collection.mobile_layout_two :is(.main-card .card .card-body) { font-size: var(--bs-font-sm) !important; }
      /* .filter_top_bar:has(.two_column.active) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .card-body){ font-size: var(--bs-font-sm);} */
      .main_collection #product-grid .search-results-list-item { width:100% !important;}
      .filter_top_bar:has(.two_column.active) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .card-title) { font-size: calc(var(--h2) - 2px ); }
      .filter_top_bar:has(.two_column.active) + .sidebar>.main_collection #product-grid .product-card :is(.main-card .product_price_info)  { font-size: var(--bs-body-font-size); }
      
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid>*, .filter_top_bar:has(.two_column) + .sidebar>.main_collection #product-grid>*{ width:100% !important; }
      
      
      .main_collection.mobile_layout_two .product-card:nth-child(even),
      .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(3n+2){ /* margin-top:3rem !important; */ }
      .main_collection .product-card > .row { height:100%;}
      
      
       .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even){ margin-top: 0 !important; }
       .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .product-card:nth-child(even){margin-top: 0 !important;}
       
    }


    @media (max-width: 480px) {
      
      .main_collection.mobile_layout_one .product-card .main-card { width: 100% !important; }
      
    }
    @media (max-width: 390px){
      
      .main_collection.mobile_layout_one .product-card .main-card { width: 100% !important; }
      
    }



    .hidden{ display:none; }

    /* .sidebar:has(div#product-grid>.product-card:only-child) {
        display: flex !important;
    }   */
    .sidebar:has(div#product-grid>.product-card:only-child) > #sidebar_collapse {
       flex:none !important;
    }
    /* .main_collection div#product-grid>.product-card:only-child {
        margin-top:0 !important;
    } */
     .sorting, .product_count {
        font-weight: var(--font-body-weight-bold);
        font-size: var(--bs-font-md);
        text-transform: uppercase;
        color: rgba(var(--color-foreground));
    }
    .sidebar .collapse-horizontal .sidebar_filter{
        overflow-y: auto;
        outline: 0;
        scrollbar-width: thin;
        /* scrollbar-color:rgba(var(--color-foreground), .3) transparent; */
        -webkit-tap-highlight-color: transparent;
    }
    .sidebar .collapse-horizontal .sidebar_filter .facet-filters{ background: rgba(var(--color-foreground) , 0.075); }
    .sorting > :not([hidden="hidden"]) {
        transition: all 0.3s linear;
        /* background: rgba(var(--color-secondary-button-bg),.6); */
        padding: 10px;
    }

    .sorting .dropdown-toggle::after {
      display: inline-block;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      /* border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent; */
      width: 1.2em;
      height: .9em;
      margin-right: -0.25rem;
      background-color: currentcolor;
      border: 0 !important;
      -webkit-mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      mask:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;
      /* bottom: 0; */
      /* top: -4px; */
      /* position: absolute; */
      margin: auto;
      /* right: 0px; */
    }
    .sorting .dropdown .dropdown-menu {
      width: 210px !important;
      border:1px solid;
      background: rgba(var(--color-background));
      overflow: auto;
    }
    .sorting .dropdown .dropdown-menu li[selected="selected"] a {
    /* text-decoration: underline; */
    background-color: rgb(var(--color-primary-button-bg));
    color: rgb(var(--color-primary-button-text));
}
    ul.dropdown-menu li.mb-2:last-child {
        margin: 0 !important;
    }
    ul.dropdown-menu li a {
      color:rgba(var(--color-foreground));
    }
    .search-results-list-item .pages {
      background: rgba(var(--color-foreground));
      border-radius: var(--bs-radius);
    }
    .search-results-list-item .pages a{
      color: rgba(var(--color-background));
      scrollbar-width:thin;
    }
    .filter_top_bar:has(.four_column) + .sidebar>.main_collection #product-grid .search-results-list-item .pages a {
        font-size: var(--h6);
    }
    .filter_top_bar:has(.three_column) + .sidebar>.main_collection #product-grid .search-results-list-item .pages a {
        font-size: var(--h5);
    }
    /* .main-collection .topbar-menu button svg{
      color: rgba(var(--color-primary-button-text));
    } */
    .filter_heading #sidebar_collapse span, .filter_heading .filter_menu span{
      font-weight: var(--font-body-weight-bold);
      font-size: var(--bs-font-md);

    }


      @media (max-width:480px){
    .main-collection :is(.sorting-count .sorting button, .dropdown){ padding-left:0 !important; }
    .main-collection .filter_top_bar .filter_container{
      flex-direction:column !important;
      align-items: flex-start !important;
    }
    .filter_top_bar .filter_container .sort{
      flex-direction: row;
      align-items: center !important;
      justify-content: space-between !important;
      width: 100%;
    }
    }

      .article-card .card .card-body .tags .tag-item{
      background: rgba(var(--color-secondary-button-bg));
      color: rgba(var(--color-secondary-button-text));
    }
      .article-card .card .card-body .blog_details, .article-card .card .card-body .read_more{ font-size: var(--bs-font-md); }
    .article-card .card .card-body .tags .tag-item a{ text-decoration:none;/* color: rgba(var(--color-secondary-button-text)); */ }
    /* .article-card .card .card-img{ position:relative; }  */
       .main_collection .card-body > div span.swatch {
        width: 15px;
        height: 15px;
        cursor: pointer;
        outline: 2px solid transparent;
        outline-offset: 2px;
        transition: all .2s linear;
    }
    .main_collection .card-body span.swatch.swatch--image.swatch_active, .main_collection .card-body span.swatch.swatch--color.swatch_active{
      outline: 2px solid var(--border-color);
    }
    .main-collection .card-body > div { margin-bottom: 10px;}
    .filter_top_bar .filter_container>*{
      flex:1;
    }
    .filter_top_bar .filter_container{
      display:flex;
      justify-content:space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 1rem;
    }
    /* .filter_container .topbar-menu{
        max-width: 210px;
        width: 100%;
    }   */
    .facet-filters-filters .filters-container ul {
        list-style: none;
    }
    .facet-filters-filters .filters-container ul li {
    margin-bottom: 0.8rem;
}
.facet-filters-filters .filters-container ul li .opacity-50{ pointer-events: none; }
    /* @media (max-width:991.98px){
      .filter_top_bar .filter_container{
        grid-template-columns:repeat(2, 1fr);
      }
    }
    @media (max-width:575.98px){
      .filter_top_bar .filter_container{
        grid-template-columns:repeat(1, 1fr);
        row-gap: 1rem;
      }
    } */
    /* .main-collection .sidebar .sidebar_container .collapse-horizontal{
      position:sticky;
      top:50px;
      height: calc(100vh - var(--dynamic_header_height, 0px));
    } */
      .filter_repeat{
        background: rgba(var(--color-primary-button-bg));
        padding: 8px 26px 8px 14px;
        position: relative;
        color: rgba(var(--color-primary-button-text));
        font-size: var(--bs-font-sm);
        border: none;
        line-height: 1;
        text-transform: capitalize;
      }
      .filter_repeat.btn:hover{
        background: rgba(var(--color-primary-button-bg));
        color: rgba(var(--color-primary-button-text));
      }
      .filter_repeat::after {
        content: '';
        position: absolute;
        mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
        -webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        background: rgba(var(--color-primary-button-text));
        mask-size: cover;
        -webkit-mask-size: cover;
        width: 12px;
        height: 12px;
        /* transform: translate(-70%, 75%); */
        top: 0;
        bottom: 0;
        right: 8px;
        margin: auto;
        cursor: pointer;
    }

    .filter_results:has(.filtered_items:empty) {
        display: none;
    }
    /* .facet-filters:has(.filtered_items:empty) {
        padding:0 !important;
    } */
    @media (max-width:991.98px){
      .mobile_card_drawer{ max-width:80%;}
    }
    .main_collection .facet-filters:has(.filtered_items:empty) {
        display: none;
    }
    /* .sorting ul li[selected] {
        background: rgba(var(--color-foreground), .1);
    } */



  /* .main-product.row-cols-md-3 :is(.card-title) {
      font-size: calc(var(--h2) - 10px);
  }
  .main-product.row-cols-lg-4 :is(.card-title) {
      font-size: calc(var(--h2) - 20px);
  } */



@media (max-width:425px){
  .mobile_card_drawer{ max-width:95%;}
  .sliders_control input[type="range"]{ width:100%; }
}



</style>



<div class="toggle_filter"></div>
<div class="collection-container">
  <div class="main-collection"><!-- change  the condition in filter issue -->
        <div class="filter_top_bar">
          <div class="filter_container two_column">
            
              <div class="topbar-menu d-flex gap-3">
                <div class="filter_heading">
                  <div class="d-flex align-items-center gap-2 w-auto text-dark">
                    
                      <div class="filter_title d-none d-lg-flex">
                        <button id="sidebar_collapse" class="btn btn-primary d-flex gap-2 align-items-center h-100" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar_collapse" aria-expanded="false" aria-controls="sidebar_collapse">
                          <svg width="25" height="16" viewBox="0 0 25 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7233 11.2415H11.1992C11.2337 11.5132 11.2524 11.795 11.2524 12.0843C11.2524 12.3735 11.2337 12.6555 11.1992 12.9271H23.7233C23.9917 12.9271 24.2092 12.5498 24.2092 12.0843C24.2092 11.6187 23.9917 11.2415 23.7233 11.2415H23.7233Z"></path>
<path d="M3.40117 11.2415H0.859164C0.384656 11.2415 0 11.6188 0 12.0843C0 12.5497 0.384761 12.9271 0.859164 12.9271H3.40107C3.34002 12.6555 3.30694 12.3736 3.30694 12.0843C3.30694 11.7949 3.34002 11.5131 3.40107 11.2415H3.40117Z"></path>
<path d="M23.3438 3.07306H21.1992C21.2603 3.34473 21.2933 3.62643 21.2933 3.91581C21.2933 4.20519 21.2603 4.48699 21.1992 4.75856H23.3438C23.8185 4.75856 24.2031 4.38125 24.2031 3.91581C24.2031 3.45037 23.8185 3.07306 23.3438 3.07306Z"></path>
<path d="M13.41 3.07306H0.492258C0.220389 3.07306 0 3.45037 0 3.91581C0 4.38125 0.220449 4.75856 0.492258 4.75856H13.4099C13.375 4.48689 13.356 4.20519 13.356 3.91581C13.356 3.62643 13.375 3.34463 13.4099 3.07306H13.41Z"></path>
<path d="M21.2024 3.07303C20.8083 1.31771 19.2108 0 17.3045 0C15.3983 0 13.8009 1.31771 13.4066 3.07303C13.3456 3.3447 13.3125 3.6264 13.3125 3.91578C13.3125 4.20516 13.3456 4.48696 13.4066 4.75853C13.8008 6.51384 15.3983 7.83156 17.3045 7.83156C19.2108 7.83156 20.8082 6.51384 21.2024 4.75853C21.2635 4.48686 21.2966 4.20516 21.2966 3.91578C21.2966 3.6264 21.2635 3.3446 21.2024 3.07303ZM17.3045 6.14595C16.0509 6.14595 15.0309 5.14546 15.0309 3.91578C15.0309 2.6861 16.0509 1.6856 17.3045 1.6856C18.5582 1.6856 19.5781 2.6861 19.5781 3.91578C19.5781 5.14546 18.5583 6.14595 17.3045 6.14595Z"></path>
<path d="M11.1966 11.2414C10.8024 9.48613 9.20495 8.16852 7.29868 8.16852C5.39241 8.16852 3.79503 9.48613 3.40077 11.2414C3.33972 11.5131 3.30664 11.7949 3.30664 12.0842C3.30664 12.3735 3.33972 12.6554 3.40077 12.927C3.79492 14.6824 5.39241 16 7.29868 16C9.20495 16 10.8023 14.6823 11.1966 12.927C11.2576 12.6554 11.2907 12.3736 11.2907 12.0842C11.2907 11.7948 11.2576 11.513 11.1966 11.2414ZM7.29868 14.3145C6.04505 14.3145 5.02507 13.314 5.02507 12.0843C5.02507 10.8546 6.04505 9.85412 7.29868 9.85412C8.55231 9.85412 9.57228 10.8546 9.57228 12.0843C9.57228 13.314 8.55231 14.3145 7.29868 14.3145Z"></path>
</svg><span class="text-uppercase showhide_filter"> Hide filter</span>
                        </button>
                      </div>
                    
                    
                      
                        <div class="filter_menu">
                          <a class="btn btn-primary text-decoration-none fw-bold d-flex align-items-center gap-2 w-auto flex-wrap" data-bs-toggle="offcanvas" href="#filterOffCanvas" role="button" aria-controls="filterOffCanvas" data-bs-backdrop="true" data-bs-scroll="false">
                            <svg width="25" height="16" viewBox="0 0 25 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7233 11.2415H11.1992C11.2337 11.5132 11.2524 11.795 11.2524 12.0843C11.2524 12.3735 11.2337 12.6555 11.1992 12.9271H23.7233C23.9917 12.9271 24.2092 12.5498 24.2092 12.0843C24.2092 11.6187 23.9917 11.2415 23.7233 11.2415H23.7233Z"></path>
<path d="M3.40117 11.2415H0.859164C0.384656 11.2415 0 11.6188 0 12.0843C0 12.5497 0.384761 12.9271 0.859164 12.9271H3.40107C3.34002 12.6555 3.30694 12.3736 3.30694 12.0843C3.30694 11.7949 3.34002 11.5131 3.40107 11.2415H3.40117Z"></path>
<path d="M23.3438 3.07306H21.1992C21.2603 3.34473 21.2933 3.62643 21.2933 3.91581C21.2933 4.20519 21.2603 4.48699 21.1992 4.75856H23.3438C23.8185 4.75856 24.2031 4.38125 24.2031 3.91581C24.2031 3.45037 23.8185 3.07306 23.3438 3.07306Z"></path>
<path d="M13.41 3.07306H0.492258C0.220389 3.07306 0 3.45037 0 3.91581C0 4.38125 0.220449 4.75856 0.492258 4.75856H13.4099C13.375 4.48689 13.356 4.20519 13.356 3.91581C13.356 3.62643 13.375 3.34463 13.4099 3.07306H13.41Z"></path>
<path d="M21.2024 3.07303C20.8083 1.31771 19.2108 0 17.3045 0C15.3983 0 13.8009 1.31771 13.4066 3.07303C13.3456 3.3447 13.3125 3.6264 13.3125 3.91578C13.3125 4.20516 13.3456 4.48696 13.4066 4.75853C13.8008 6.51384 15.3983 7.83156 17.3045 7.83156C19.2108 7.83156 20.8082 6.51384 21.2024 4.75853C21.2635 4.48686 21.2966 4.20516 21.2966 3.91578C21.2966 3.6264 21.2635 3.3446 21.2024 3.07303ZM17.3045 6.14595C16.0509 6.14595 15.0309 5.14546 15.0309 3.91578C15.0309 2.6861 16.0509 1.6856 17.3045 1.6856C18.5582 1.6856 19.5781 2.6861 19.5781 3.91578C19.5781 5.14546 18.5583 6.14595 17.3045 6.14595Z"></path>
<path d="M11.1966 11.2414C10.8024 9.48613 9.20495 8.16852 7.29868 8.16852C5.39241 8.16852 3.79503 9.48613 3.40077 11.2414C3.33972 11.5131 3.30664 11.7949 3.30664 12.0842C3.30664 12.3735 3.33972 12.6554 3.40077 12.927C3.79492 14.6824 5.39241 16 7.29868 16C9.20495 16 10.8023 14.6823 11.1966 12.927C11.2576 12.6554 11.2907 12.3736 11.2907 12.0842C11.2907 11.7948 11.2576 11.513 11.1966 11.2414ZM7.29868 14.3145C6.04505 14.3145 5.02507 13.314 5.02507 12.0843C5.02507 10.8546 6.04505 9.85412 7.29868 9.85412C8.55231 9.85412 9.57228 10.8546 9.57228 12.0843C9.57228 13.314 8.55231 14.3145 7.29868 14.3145Z"></path>
</svg><span> All filters</span>
                          </a>
                        </div>
                      
                    
                  </div>
                </div>
              </div>
            

            <div class="sort d-flex align-items-center justify-content-end flex-wrap">
              
                <div class="product_count me-5">
                  <span class="filter_totalcount">18
                    
                  </span>
                  <span>
                    
                    
                      
                        Products
                      
                    
                  </span>
                </div>
              

              
                <div class="sorting-count align-items-center d-flex flex-wrap gap-2 sorting-count justify-content-sm-end">
                  <div class="sorting d-sm-block ">
                    <div class="sorting_hidden d-none">
                      <label aria-label="Sorting" class="align-items-center d-flex gap-2 justify-content-center bg-transparent">
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
  <path d="M0 0H16V2H0V0Z" fill="currentColor"></path>
  <path d="M0 4H12V6H0V4Z" fill="currentColor"></path>
  <path d="M0 8H8V10H0V8Z" fill="currentColor"></path>
</svg>
                        Sort by
                      </label>
                      <select name="sort_by" class="sorting_select facet-filters-sorting-select border-0" id="SortBy"><option value="manual">
                            Featured
                          </option><option value="best-selling">
                            Best selling
                          </option><option value="title-ascending">
                            Alphabetically, A-Z
                          </option><option value="title-descending">
                            Alphabetically, Z-A
                          </option><option value="price-ascending">
                            Price, low to high
                          </option><option value="price-descending">
                            Price, high to low
                          </option><option value="created-ascending" selected="selected">
                            Date, old to new
                          </option><option value="created-descending">
                            Date, new to old
                          </option></select>
                    </div>
                    <div class="dropdown sorting_duplicate px-0 py-1">
                      <button class="btn border-0 dropdown-toggle px-0 py-2 ps-sm-2 d-flex gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Date, old to new</button>
                      <ul class="dropdown-menu p-0"><li data-value="manual" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Featured</a>
                          </li><li data-value="best-selling" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Best selling</a>
                          </li><li data-value="title-ascending" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Alphabetically, A-Z</a>
                          </li><li data-value="title-descending" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Alphabetically, Z-A</a>
                          </li><li data-value="price-ascending" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Price, low to high</a>
                          </li><li data-value="price-descending" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Price, high to low</a>
                          </li><li data-value="created-ascending" selected="selected" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Date, old to new</a>
                          </li><li data-value="created-descending" class="">
                            <a href="#" class="py-1 px-3 text-decoration-none d-block">Date, new to old</a>
                          </li></ul>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>

      <div class="sidebar d-flex d-lg-grid pt-0 pt-lg-4">
        <!-- sidebar-filter -->

        
          
            <div class="sidebar_container d-none d-lg-block">
              <div class="collapse collapse-horizontal col show" id="sidebar_collapse">
                <div class="card me-5 form-1 sidebar_filter h-100" id="sidebar_filter">
                  <style data-shopify="">

  /* .facet-filters .collapse-btn::after {
    content: 'More';
    display: inline-block;
  } */

   .facet-filters .collapse-btn:not(.collapsed)::after {
    content: 'Less';
      display: inline-block;
  }
    .facet-filters button.collapse-label {
     cursor:pointer;
   }
    
   .facet-filters button.collapse-label::after {
      content: "";
      display: inline-block;
      margin-left: auto;
      /* vertical-align: 0.255em; */
      width: 1em;
      height: 1em;
      margin-right: -0.25rem;
      background-color: currentcolor;
      border: 0 !important;
      -webkit-mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;
      flex-shrink: 0;
      /* margin: auto; */
  }
  
    .extra-filters_low { display:block !important; }
  .color-swatch {
      /* position: absolute; */
      left: 0px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      background: var(--product-swatch-value, transparent);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
     
      outline: 1px solid transparent;
      outline-offset: 2px;
      transition: all 0.2s linear;
      /* z-index: 1; */
  }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{
      position: absolute;
      opacity: 1;
      left: 0px;
      border: 1px solid rgba(var(--color-border),.3);
      box-shadow: none;
      background: none;
      vertical-align: middle;
       
      top: 0;
      bottom:0;
      margin: auto;
      padding: 0;
      z-index: 1;
      width:22px;
      height:22px;
    }
    .label_name{
      flex-grow: 1;
      position: relative;
      font-size: var(--bs-body-font-size);
      word-break: break-word;
      line-height: normal;
      align-items: center;
      cursor: pointer;
    }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{background:transparent;}

  .filter-item label.opacity-50{cursor: not-allowed;}
  .filter-item label.label_name:not(.opacity-50) span:hover .color-swatch{ outline: 1px solid #000}
  .filter-item label:not(.opacity-50) .color-swatch:hover { outline: 1px solid #000; }
  .filters-container .filter-item::nth-child(1) {padding-top: 0px !important;}

  /* .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"] ~ span.color-swatch {
      outline: 1px solid rgba(var(--color-foreground));
  } */
  .filter_repeat ,.remove_filter{border-radius: var(--bs-btn-border-radius) !important;}

  .clear-filters p a {
      /* color: rgba(var(--color-primary-button-text)); */
      font-size: var(--bs-body-font-size);
      /* outline: none; */
      /* background: rgba(var(--color-primary-button-bg)); */
      padding: 0px;
      font-weight: var(--bs-btn-font-weight);
  }
  .clear-filters p{ /* background: rgba(var(--color-primary-button-bg)); */position:relative; }
  .sidebar_filter .filters-container > div:empty {display: none;}
  .clear-filters p{ position:relative; }
  .clear-filters p a::after{
      content:'';
      position:absolute;
      mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      -webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      mask-repeat:no-repeat;
      -webkit-mask-repeat:no-repeat;
      background:rgba(var(--color-primary-button-text));
      mask-size:cover;
      -webkit-mask-size:cover;
      width:12px;
      height:12px;
      /* transform: translate(-70%, 75%); */
      top:0;
      bottom:0;
      right: 8px;
      margin:auto;
      cursor:pointer;
      display:none;
  }
  .hidden {
    display: none !important;
  }
  /* .filters-container .filter-item .filter-price-range .input-group .form-control{
    box-shadow:none !important;
  } */
  .filter-price-range .input-group input {
      /* position: absolute; */
      width: 100%;
  }
  .filter-price-range .input-group .input-group-text {
      position: absolute;
      z-index: 9;
      bottom: 3px;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
     border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb:hover {
    background: #f7f7f7;
  }
  input[type=range]::-webkit-slider-thumb:focus-visible{
    outline:2px solid #000;
  }
  input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
  }



  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
     opacity: 0;
  }

  .sliders_control input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 100%;
    position: absolute;
    background-color: rgba(var(--color-secondary-button-bg));
    border-radius: 20px;
    pointer-events: none;
    left:0px;
  }

  #fromSlider {
    height: 10px;
    background:transparent;
    z-index: 1;
  }

input[type=range]:focus::-webkit-slider-thumb,
input[type=range]:active::-webkit-slider-thumb,
input[type=range]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 8px rgba(var(--color-primary-button-text), 0.25);
  outline: 2px dashed currentcolor !important;
}
  /* input#fromSlider:focus-visible{
     border:0px solid ;
     outline:0px solid;
} */

.sliders_control input[type="range"]:focus-visible{
  border:0px solid ;
  outline:0px solid;
}
  .filter-price-range input[type="number"]{
    padding: 10px;
    padding-left: 35px;
    /* border: 0; */
    /* border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important; */
  }
  .filter-price-range .input-group .input-group-text{
    border: 0;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    letter-spacing:normal;
  }

    
    
     /* .filter_forsidebar .clear-filters{ display:none !important; } */
      
  
  #collapse-filter_p_m_custom_custom_colors input[type="checkbox"]:not(.custom_color),
  #collapse-filter_v_t_shopify_color-pattern input[type="checkbox"]:not(.custom_color){
    z-index:1;
    background: transparent;
    border: none;
    width: 15px;
    height: 15px;
    /* border-radius:50%; */
  }
  .clear-filters p a:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  .filter_repeat:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  @media (min-width:992px){
  .sidebar_container .facet-filters{
      border: var(--bs-style-border) solid var(--bs-border-color);
      border-radius: var(--bs-radius);
  }
  }

  /* .facet-filters .filter-group-display__list>*:last-child {margin-bottom:0 !important;} */

</style>



<facet-filters class="facet-filters" data-id="template--19562840981686__main">
  <form onsubmit="return false;">
    <div class="facet-filters-filters filter_forsidebar p-lg-3">
      <div class="clear-filters m-0">
        <div class="filter_results">
          <p class="d-inline-block mb-0 remove_filter rounded-pill d-none">
            
              <a href="/collections/pro-art-series?sort_by=" class="active-filters__clear border-0 btn remove_all rounded-0 text-capitalize text-decoration-underline">Remove all</a>
            
          </p>
          <div class="filtered_items d-flex flex-wrap align-items-center gap-2 mt-3"></div>
        </div>
      </div>
      <div class="filters-container"><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_availability" aria-expanded="true" aria-controls="collapse">
              Availability
            </button>
                <div style="list-style:none;" id="collapse-filter_v_availability" class="collapse-filter_v_availability collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-availability
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="1" id="Filter-filter.v.availability-1-filterEle1" data-compare="Filter-filter.v.availability-1" data-count="18" aria-label="In stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-1-filterEle1">In stock
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="0" id="Filter-filter.v.availability-2-filterEle1" data-compare="Filter-filter.v.availability-0" data-count="1" aria-label="Out of stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-2-filterEle1">Out of stock
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_price" aria-expanded="true" aria-controls="collapse">
              Price
            </button><div id="collapse-filter_v_price" class="  collapse show  ">
                  <div class="pt-3 ps-0 mt-1">
                    <div class="price position-relative">
                      <div class="sliders_control pb-4">
                        <label for="fromSlider" class="visually-hidden">Minimum price</label>
                        <input id="fromSlider" type="range" value="0" min="0" tabindex=" 0 " max="5000.00" style="">
                        <label for="toSlider" class="visually-hidden">Maximul price</label>
                        <input id="toSlider" type="range" value="5000.00" min="0" tabindex=" 0 " max="5000.00" style="z-index: 0;">
                      </div>
                    </div>
                    <div class="filter-price-range d-flex flex-wrap row position-relative mt-1 row-cols-2">
                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="fromInput" class="visually-hidden">₹</label>
                        <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57" onkeydown="if(event.key === 'Backspace' &amp;&amp; this.value === '0') return false;" oninput="if(this.value === '' || this.value &lt;= 0) this.value = 0;" type="number" class="form-control" name="filter.v.price.gte" placeholder="0" id="fromInput" data-id="Filter-filter.v.price.gte" value="0" min="0" max="5000.00" style="">
                      </div>

                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="toInput" class="visually-hidden">₹</label>
                        <input type="number" class="form-control" name="filter.v.price.lte" id="toInput" data-id="Filter-filter.v.price.lte" placeholder="5000.00" min="0" value="5000.00" max="5000.00" style="">
                      </div>
                    </div>
                  </div>
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_p_tag" aria-expanded="true" aria-controls="collapse">
              Tags
            </button>
                <div style="list-style:none;" id="collapse-filter_p_tag" class="collapse-filter_p_tag collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-filter_p_tag
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Prints" id="Filter-filter.p.tag-1-filterEle1" data-compare="Filter-filter.p.tag-Prints" data-count="18" aria-label="Prints" style="">

                          


                            
                            <label for="Filter-filter.p.tag-1-filterEle1">Prints
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Visual Artwork" id="Filter-filter.p.tag-2-filterEle1" data-compare="Filter-filter.p.tag-Visual Artwork" data-count="18" aria-label="Visual Artwork" style="">

                          


                            
                            <label for="Filter-filter.p.tag-2-filterEle1">Visual Artwork
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_option_size" aria-expanded="true" aria-controls="collapse">
              size
            </button>
                <div style="list-style:none;" id="collapse-filter_v_option_size" class="collapse-filter_v_option_size collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_size
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*24 inches" id="Filter-filter.v.option.size-1-filterEle1" data-compare="Filter-filter.v.option.size-12*24 inches" data-count="18" aria-label="12*24 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-1-filterEle1">12*24 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*48 inches" id="Filter-filter.v.option.size-2-filterEle1" data-compare="Filter-filter.v.option.size-12*48 inches" data-count="18" aria-label="12*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-2-filterEle1">12*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="24*48 inches" id="Filter-filter.v.option.size-3-filterEle1" data-compare="Filter-filter.v.option.size-24*48 inches" data-count="18" aria-label="24*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-3-filterEle1">24*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="48*96 inches" id="Filter-filter.v.option.size-4-filterEle1" data-compare="Filter-filter.v.option.size-48*96 inches" data-count="18" aria-label="48*96 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-4-filterEle1">48*96 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_option_material" aria-expanded="true" aria-controls="collapse">
              Material
            </button>
                <div style="list-style:none;" id="collapse-filter_v_option_material" class="collapse-filter_v_option_material collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_material
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Aluminum" id="Filter-filter.v.option.material-1-filterEle1" data-compare="Filter-filter.v.option.material-Aluminum" data-count="3" aria-label="Aluminum" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-1-filterEle1">Aluminum
                              <span class="filter_counts ">(3)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Bamboo" id="Filter-filter.v.option.material-2-filterEle1" data-compare="Filter-filter.v.option.material-Bamboo" data-count="5" aria-label="Bamboo" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-2-filterEle1">Bamboo
                              <span class="filter_counts ">(5)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Carved Wood" id="Filter-filter.v.option.material-3-filterEle1" data-compare="Filter-filter.v.option.material-Carved Wood" data-count="7" aria-label="Carved Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-3-filterEle1">Carved Wood
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Custom-Built Frame" id="Filter-filter.v.option.material-4-filterEle1" data-compare="Filter-filter.v.option.material-Custom-Built Frame" data-count="1" aria-label="Custom-Built Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-4-filterEle1">Custom-Built Frame
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Gilded Frame" id="Filter-filter.v.option.material-5-filterEle1" data-compare="Filter-filter.v.option.material-Gilded Frame" data-count="7" aria-label="Gilded Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-5-filterEle1">Gilded Frame
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Lacquered Frame" id="Filter-filter.v.option.material-6-filterEle1" data-compare="Filter-filter.v.option.material-Lacquered Frame" data-count="4" aria-label="Lacquered Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-6-filterEle1">Lacquered Frame
                              <span class="filter_counts ">(4)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Pine Wood" id="Filter-filter.v.option.material-7-filterEle1" data-compare="Filter-filter.v.option.material-Pine Wood" data-count="11" aria-label="Pine Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-7-filterEle1">Pine Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Reclaimed Wood" id="Filter-filter.v.option.material-8-filterEle1" data-compare="Filter-filter.v.option.material-Reclaimed Wood" data-count="10" aria-label="Reclaimed Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-8-filterEle1">Reclaimed Wood
                              <span class="filter_counts ">(10)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Solid Wood" id="Filter-filter.v.option.material-9-filterEle1" data-compare="Filter-filter.v.option.material-Solid Wood" data-count="11" aria-label="Solid Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-9-filterEle1">Solid Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Stainless Steel" id="Filter-filter.v.option.material-10-filterEle1" data-compare="Filter-filter.v.option.material-Stainless Steel" data-count="7" aria-label="Stainless Steel" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-10-filterEle1">Stainless Steel
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Textured Frame" id="Filter-filter.v.option.material-11-filterEle1" data-compare="Filter-filter.v.option.material-Textured Frame" data-count="6" aria-label="Textured Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-11-filterEle1">Textured Frame
                              <span class="filter_counts ">(6)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                    <button class="showmore show link  text-body underlined-link bg-transparent border-0 p-0 text-decoration-underline mt-3 d-block" id="collapse-filter_v_option_material" type="button">
                      <span class="label-show-more label-text">More</span>
                      <span class="label-show-less label-text hidden">Less</span>
                    </button>
                  
                </div></div></div>
    </div>
  </form>
</facet-filters>

                </div>
              </div>
            </div>
          
        

        <!-- end sidebar-filter -->

        <!-- main-products -->

        <div class="product-check" hidden=""><label for="hidElemenet-filter-filter.v.availability-1" class="visually-hidden">filter.v.availability</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.v.availability-1" data-param="filter.v.availability" data-id="Filter-filter.v.availability-1" value="18" style=""><label for="hidElemenet-filter-filter.v.availability-0" class="visually-hidden">filter.v.availability</label>
              <input aria-label="1" type="text" id="hidElemenet-filter-filter.v.availability-0" data-param="filter.v.availability" data-id="Filter-filter.v.availability-0" value="1" style=""><label for="hidElemenet-filter-filter.p.tag-Prints" class="visually-hidden">filter.p.tag</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.p.tag-Prints" data-param="filter.p.tag" data-id="Filter-filter.p.tag-Prints" value="18" style=""><label for="hidElemenet-filter-filter.p.tag-Visual Artwork" class="visually-hidden">filter.p.tag</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.p.tag-Visual Artwork" data-param="filter.p.tag" data-id="Filter-filter.p.tag-Visual Artwork" value="18" style=""><label for="hidElemenet-filter-filter.v.option.size-12*24 inches" class="visually-hidden">filter.v.option.size</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.v.option.size-12*24 inches" data-param="filter.v.option.size" data-id="Filter-filter.v.option.size-12*24 inches" value="18" style=""><label for="hidElemenet-filter-filter.v.option.size-12*48 inches" class="visually-hidden">filter.v.option.size</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.v.option.size-12*48 inches" data-param="filter.v.option.size" data-id="Filter-filter.v.option.size-12*48 inches" value="18" style=""><label for="hidElemenet-filter-filter.v.option.size-24*48 inches" class="visually-hidden">filter.v.option.size</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.v.option.size-24*48 inches" data-param="filter.v.option.size" data-id="Filter-filter.v.option.size-24*48 inches" value="18" style=""><label for="hidElemenet-filter-filter.v.option.size-48*96 inches" class="visually-hidden">filter.v.option.size</label>
              <input aria-label="18" type="text" id="hidElemenet-filter-filter.v.option.size-48*96 inches" data-param="filter.v.option.size" data-id="Filter-filter.v.option.size-48*96 inches" value="18" style=""><label for="hidElemenet-filter-filter.v.option.material-Aluminum" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="3" type="text" id="hidElemenet-filter-filter.v.option.material-Aluminum" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Aluminum" value="3" style=""><label for="hidElemenet-filter-filter.v.option.material-Bamboo" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="5" type="text" id="hidElemenet-filter-filter.v.option.material-Bamboo" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Bamboo" value="5" style=""><label for="hidElemenet-filter-filter.v.option.material-Carved Wood" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="7" type="text" id="hidElemenet-filter-filter.v.option.material-Carved Wood" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Carved Wood" value="7" style=""><label for="hidElemenet-filter-filter.v.option.material-Custom-Built Frame" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="1" type="text" id="hidElemenet-filter-filter.v.option.material-Custom-Built Frame" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Custom-Built Frame" value="1" style=""><label for="hidElemenet-filter-filter.v.option.material-Gilded Frame" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="7" type="text" id="hidElemenet-filter-filter.v.option.material-Gilded Frame" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Gilded Frame" value="7" style=""><label for="hidElemenet-filter-filter.v.option.material-Lacquered Frame" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="4" type="text" id="hidElemenet-filter-filter.v.option.material-Lacquered Frame" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Lacquered Frame" value="4" style=""><label for="hidElemenet-filter-filter.v.option.material-Pine Wood" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="11" type="text" id="hidElemenet-filter-filter.v.option.material-Pine Wood" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Pine Wood" value="11" style=""><label for="hidElemenet-filter-filter.v.option.material-Reclaimed Wood" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="10" type="text" id="hidElemenet-filter-filter.v.option.material-Reclaimed Wood" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Reclaimed Wood" value="10" style=""><label for="hidElemenet-filter-filter.v.option.material-Solid Wood" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="11" type="text" id="hidElemenet-filter-filter.v.option.material-Solid Wood" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Solid Wood" value="11" style=""><label for="hidElemenet-filter-filter.v.option.material-Stainless Steel" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="7" type="text" id="hidElemenet-filter-filter.v.option.material-Stainless Steel" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Stainless Steel" value="7" style=""><label for="hidElemenet-filter-filter.v.option.material-Textured Frame" class="visually-hidden">filter.v.option.material</label>
              <input aria-label="6" type="text" id="hidElemenet-filter-filter.v.option.material-Textured Frame" data-param="filter.v.option.material" data-id="Filter-filter.v.option.material-Textured Frame" value="6" style=""></div>

        <div class="main_collection mobile_layout_one col sidebar_filter">
          <style data-shopify="">

  /* .facet-filters .collapse-btn::after {
    content: 'More';
    display: inline-block;
  } */

   .facet-filters .collapse-btn:not(.collapsed)::after {
    content: 'Less';
      display: inline-block;
  }
    .facet-filters button.collapse-label {
     cursor:pointer;
   }
    
    .extra-filters_low { display:block !important; }
  .color-swatch {
      /* position: absolute; */
      left: 0px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      background: var(--product-swatch-value, transparent);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
     
      outline: 1px solid transparent;
      outline-offset: 2px;
      transition: all 0.2s linear;
      /* z-index: 1; */
  }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{
      position: absolute;
      opacity: 1;
      left: 0px;
      border: 1px solid rgba(var(--color-border),.3);
      box-shadow: none;
      background: none;
      vertical-align: middle;
       
      top: 0;
      bottom:0;
      margin: auto;
      padding: 0;
      z-index: 1;
      width:22px;
      height:22px;
    }
    .label_name{
      flex-grow: 1;
      position: relative;
      font-size: var(--bs-body-font-size);
      word-break: break-word;
      line-height: normal;
      align-items: center;
      cursor: pointer;
    }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{background:transparent;}

  .filter-item label.opacity-50{cursor: not-allowed;}
  .filter-item label.label_name:not(.opacity-50) span:hover .color-swatch{ outline: 1px solid #000}
  .filter-item label:not(.opacity-50) .color-swatch:hover { outline: 1px solid #000; }
  .filters-container .filter-item::nth-child(1) {padding-top: 0px !important;}

  /* .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"] ~ span.color-swatch {
      outline: 1px solid rgba(var(--color-foreground));
  } */
  .filter_repeat ,.remove_filter{border-radius: var(--bs-btn-border-radius) !important;}

  .clear-filters p a {
      /* color: rgba(var(--color-primary-button-text)); */
      font-size: var(--bs-body-font-size);
      /* outline: none; */
      /* background: rgba(var(--color-primary-button-bg)); */
      padding: 0px;
      font-weight: var(--bs-btn-font-weight);
  }
  .clear-filters p{ /* background: rgba(var(--color-primary-button-bg)); */position:relative; }
  .sidebar_filter .filters-container > div:empty {display: none;}
  .clear-filters p{ position:relative; }
  .clear-filters p a::after{
      content:'';
      position:absolute;
      mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      -webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      mask-repeat:no-repeat;
      -webkit-mask-repeat:no-repeat;
      background:rgba(var(--color-primary-button-text));
      mask-size:cover;
      -webkit-mask-size:cover;
      width:12px;
      height:12px;
      /* transform: translate(-70%, 75%); */
      top:0;
      bottom:0;
      right: 8px;
      margin:auto;
      cursor:pointer;
      display:none;
  }
  .hidden {
    display: none !important;
  }
  /* .filters-container .filter-item .filter-price-range .input-group .form-control{
    box-shadow:none !important;
  } */
  .filter-price-range .input-group input {
      /* position: absolute; */
      width: 100%;
  }
  .filter-price-range .input-group .input-group-text {
      position: absolute;
      z-index: 9;
      bottom: 3px;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
     border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb:hover {
    background: #f7f7f7;
  }
  input[type=range]::-webkit-slider-thumb:focus-visible{
    outline:2px solid #000;
  }
  input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
  }



  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
     opacity: 0;
  }

  .sliders_control input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 100%;
    position: absolute;
    background-color: rgba(var(--color-secondary-button-bg));
    border-radius: 20px;
    pointer-events: none;
    left:0px;
  }

  #fromSlider {
    height: 10px;
    background:transparent;
    z-index: 1;
  }

input[type=range]:focus::-webkit-slider-thumb,
input[type=range]:active::-webkit-slider-thumb,
input[type=range]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 8px rgba(var(--color-primary-button-text), 0.25);
  outline: 2px dashed currentcolor !important;
}
  /* input#fromSlider:focus-visible{
     border:0px solid ;
     outline:0px solid;
} */

.sliders_control input[type="range"]:focus-visible{
  border:0px solid ;
  outline:0px solid;
}
  .filter-price-range input[type="number"]{
    padding: 10px;
    padding-left: 35px;
    /* border: 0; */
    /* border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important; */
  }
  .filter-price-range .input-group .input-group-text{
    border: 0;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    letter-spacing:normal;
  }

    
      .main_collection .filters-container{ display:none !important; }
      
    
  
  #collapse-filter_p_m_custom_custom_colors input[type="checkbox"]:not(.custom_color),
  #collapse-filter_v_t_shopify_color-pattern input[type="checkbox"]:not(.custom_color){
    z-index:1;
    background: transparent;
    border: none;
    width: 15px;
    height: 15px;
    /* border-radius:50%; */
  }
  .clear-filters p a:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  .filter_repeat:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  @media (min-width:992px){
  .sidebar_container .facet-filters{
      border: var(--bs-style-border) solid var(--bs-border-color);
      border-radius: var(--bs-radius);
  }
  }

  /* .facet-filters .filter-group-display__list>*:last-child {margin-bottom:0 !important;} */

</style>



<facet-filters class="facet-filters" data-id="template--19562840981686__main">
  <form onsubmit="return false;">
    <div class="facet-filters-filters filter_fortab p-lg-3">
      <div class="clear-filters m-0">
        <div class="filter_results">
          <p class="d-inline-block mb-0 remove_filter rounded-pill d-none">
            
              <a href="/collections/pro-art-series?sort_by=" class="active-filters__clear border-0 btn remove_all rounded-0 text-capitalize text-decoration-underline">Remove all</a>
            
          </p>
          <div class="filtered_items d-flex flex-wrap align-items-center gap-2 mt-3"></div>
        </div>
      </div>
      <div class="filters-container"><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" aria-expanded="true" aria-controls="collapse">
              Availability
            </button>
                <div style="list-style:none;" class="collapse-filter_v_availability  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-availability
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="1" id="Filter-filter.v.availability-1-filterEle2" data-compare="Filter-filter.v.availability-1" data-count="18" aria-label="In stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-1-filterEle2">In stock
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="0" id="Filter-filter.v.availability-2-filterEle2" data-compare="Filter-filter.v.availability-0" data-count="1" aria-label="Out of stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-2-filterEle2">Out of stock
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  h5 d-flex m-0 gap-2 px-0" aria-expanded="true" aria-controls="collapse">
              Price
            </button><div class="  ">
                  <div class="pt-3 ps-0 mt-1">
                    <div class="price position-relative">
                      <div class="sliders_control pb-4">
                        <label for="fromSlider" class="visually-hidden">Minimum price</label>
                        <input id="fromSlider" type="range" value="0" min="0" tabindex=" 0 " max="5000.00" style="">
                        <label for="toSlider" class="visually-hidden">Maximul price</label>
                        <input id="toSlider" type="range" value="5000.00" min="0" tabindex=" 0 " max="5000.00" style="">
                      </div>
                    </div>
                    <div class="filter-price-range d-flex flex-wrap row position-relative mt-1 row-cols-2">
                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="fromInput" class="visually-hidden">₹</label>
                        <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57" onkeydown="if(event.key === 'Backspace' &amp;&amp; this.value === '0') return false;" oninput="if(this.value === '' || this.value &lt;= 0) this.value = 0;" type="number" class="form-control" name="filter.v.price.gte" placeholder="0" id="fromInput" data-id="Filter-filter.v.price.gte" value="0" min="0" max="5000.00" style="">
                      </div>

                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="toInput" class="visually-hidden">₹</label>
                        <input type="number" class="form-control" name="filter.v.price.lte" id="toInput" data-id="Filter-filter.v.price.lte" placeholder="5000.00" min="0" value="5000.00" max="5000.00" style="">
                      </div>
                    </div>
                  </div>
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" aria-expanded="true" aria-controls="collapse">
              Tags
            </button>
                <div style="list-style:none;" class="collapse-filter_p_tag  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-filter_p_tag
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Prints" id="Filter-filter.p.tag-1-filterEle2" data-compare="Filter-filter.p.tag-Prints" data-count="18" aria-label="Prints" style="">

                          


                            
                            <label for="Filter-filter.p.tag-1-filterEle2">Prints
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Visual Artwork" id="Filter-filter.p.tag-2-filterEle2" data-compare="Filter-filter.p.tag-Visual Artwork" data-count="18" aria-label="Visual Artwork" style="">

                          


                            
                            <label for="Filter-filter.p.tag-2-filterEle2">Visual Artwork
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" aria-expanded="true" aria-controls="collapse">
              size
            </button>
                <div style="list-style:none;" class="collapse-filter_v_option_size  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_size
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*24 inches" id="Filter-filter.v.option.size-1-filterEle2" data-compare="Filter-filter.v.option.size-12*24 inches" data-count="18" aria-label="12*24 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-1-filterEle2">12*24 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*48 inches" id="Filter-filter.v.option.size-2-filterEle2" data-compare="Filter-filter.v.option.size-12*48 inches" data-count="18" aria-label="12*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-2-filterEle2">12*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="24*48 inches" id="Filter-filter.v.option.size-3-filterEle2" data-compare="Filter-filter.v.option.size-24*48 inches" data-count="18" aria-label="24*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-3-filterEle2">24*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="48*96 inches" id="Filter-filter.v.option.size-4-filterEle2" data-compare="Filter-filter.v.option.size-48*96 inches" data-count="18" aria-label="48*96 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-4-filterEle2">48*96 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" aria-expanded="true" aria-controls="collapse">
              Material
            </button>
                <div style="list-style:none;" class="collapse-filter_v_option_material  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_material
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Aluminum" id="Filter-filter.v.option.material-1-filterEle2" data-compare="Filter-filter.v.option.material-Aluminum" data-count="3" aria-label="Aluminum" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-1-filterEle2">Aluminum
                              <span class="filter_counts ">(3)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Bamboo" id="Filter-filter.v.option.material-2-filterEle2" data-compare="Filter-filter.v.option.material-Bamboo" data-count="5" aria-label="Bamboo" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-2-filterEle2">Bamboo
                              <span class="filter_counts ">(5)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Carved Wood" id="Filter-filter.v.option.material-3-filterEle2" data-compare="Filter-filter.v.option.material-Carved Wood" data-count="7" aria-label="Carved Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-3-filterEle2">Carved Wood
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Custom-Built Frame" id="Filter-filter.v.option.material-4-filterEle2" data-compare="Filter-filter.v.option.material-Custom-Built Frame" data-count="1" aria-label="Custom-Built Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-4-filterEle2">Custom-Built Frame
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Gilded Frame" id="Filter-filter.v.option.material-5-filterEle2" data-compare="Filter-filter.v.option.material-Gilded Frame" data-count="7" aria-label="Gilded Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-5-filterEle2">Gilded Frame
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Lacquered Frame" id="Filter-filter.v.option.material-6-filterEle2" data-compare="Filter-filter.v.option.material-Lacquered Frame" data-count="4" aria-label="Lacquered Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-6-filterEle2">Lacquered Frame
                              <span class="filter_counts ">(4)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Pine Wood" id="Filter-filter.v.option.material-7-filterEle2" data-compare="Filter-filter.v.option.material-Pine Wood" data-count="11" aria-label="Pine Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-7-filterEle2">Pine Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Reclaimed Wood" id="Filter-filter.v.option.material-8-filterEle2" data-compare="Filter-filter.v.option.material-Reclaimed Wood" data-count="10" aria-label="Reclaimed Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-8-filterEle2">Reclaimed Wood
                              <span class="filter_counts ">(10)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Solid Wood" id="Filter-filter.v.option.material-9-filterEle2" data-compare="Filter-filter.v.option.material-Solid Wood" data-count="11" aria-label="Solid Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-9-filterEle2">Solid Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Stainless Steel" id="Filter-filter.v.option.material-10-filterEle2" data-compare="Filter-filter.v.option.material-Stainless Steel" data-count="7" aria-label="Stainless Steel" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-10-filterEle2">Stainless Steel
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Textured Frame" id="Filter-filter.v.option.material-11-filterEle2" data-compare="Filter-filter.v.option.material-Textured Frame" data-count="6" aria-label="Textured Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-11-filterEle2">Textured Frame
                              <span class="filter_counts ">(6)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                    <button class="showmore show link  text-body underlined-link bg-transparent border-0 p-0 text-decoration-underline mt-3 d-block" id="collapse-filter_v_option_material" type="button">
                      <span class="label-show-more label-text">More</span>
                      <span class="label-show-less label-text hidden">Less</span>
                    </button>
                  
                </div></div></div>
    </div>
  </form>
</facet-filters>


          <div id="product-grid" class="main-product pt-3 pt-sm-4   row position-relative pt-lg-0">
            
              


                  

                  
<div class="product-card sm-mt-14">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="100" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.2051282051282%;">
        <a href="/products/moonlit-breeze" class="card-img" aria-label="Moonlit Breeze">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=1280" alt="Moonlit Breeze" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-01-6763b2542b3d5.webp?v=1734587052&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=1280" alt="Moonlit Breeze" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product02-02-6763b25385ca8.webp?v=1734587052&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        

        

        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095400820918" data-url="/products/moonlit-breeze" data-sectionid="template--19562840981686__main" data-productid="8095400820918" data-producthandle="moonlit-breeze" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 3,200.00" data-cmpprice="" data-variantdetails="43553409269942" data-productdetails="8095400820918">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095400820918">
        <a href="/products/moonlit-breeze" id="CardLink-template--19562840981686__main-8095400820918" aria-labelledby="CardLink-template--19562840981686__main-8095400820918 " class="text-decoration-none">
          Moonlit Breeze
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 3,100.00
      
    </span>

    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div>

                  

                  
<div class="product-card ">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="100" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.2051282051282%;">
        <a href="/products/graceful-beauty" class="card-img" aria-label="Graceful Beauty">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=1280" alt="Graceful Beauty" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-01-1.webp?v=1734587299&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=1280" alt="Graceful Beauty" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product03-02-1.webp?v=1734587299&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        
          <div class="slae_tag">
            <span class="badges sale_badge"> Sale</span>
          </div>
        

        

        
          <div class="slae_price">
            <div class="text-uppercase">
              
            </div>
          </div>
        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095400951990" data-url="/products/graceful-beauty" data-sectionid="template--19562840981686__main" data-productid="8095400951990" data-producthandle="graceful-beauty" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 3,150.00" data-cmpprice="" data-variantdetails="43553409728694" data-productdetails="8095400951990">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095400951990">
        <a href="/products/graceful-beauty" id="CardLink-template--19562840981686__main-8095400951990" aria-labelledby="CardLink-template--19562840981686__main-8095400951990 " class="text-decoration-none">
          Graceful Beauty
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 3,000.00
      
    </span>

    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div>

                  

                  
<div class="product-card sm-mt-14">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="101" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.15384615384615%;">
        <a href="/products/mona-s-coffee" class="card-img" aria-label="Mona’s Coffee">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=1280" alt="Mona’s Coffee" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/Product_04_01.jpg?v=1738068426&amp;width=1206 1206w" width="1300" height="1562" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=1280" alt="Mona’s Coffee" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product04-02-1.webp?v=1738068426&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        
          <div class="slae_tag">
            <span class="badges sale_badge"> Sale</span>
          </div>
        

        

        
          <div class="slae_price">
            <div class="text-uppercase">
              
            </div>
          </div>
        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095401115830" data-url="/products/mona-s-coffee" data-sectionid="template--19562840981686__main" data-productid="8095401115830" data-producthandle="mona-s-coffee" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 2,500.00" data-cmpprice="Rs. 3,000.00" data-variantdetails="43553410121910" data-productdetails="8095401115830">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095401115830">
        <a href="/products/mona-s-coffee" id="CardLink-template--19562840981686__main-8095401115830" aria-labelledby="CardLink-template--19562840981686__main-8095401115830 " class="text-decoration-none">
          Mona’s Coffee
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 2,100.00
      
    </span>

    
      <span class="low_price text-decoration-line-through">
        
          Rs. 3,000.00
        
      </span>
    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div>

                  

                  
<div class="product-card ">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="100" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.2051282051282%;">
        <a href="/products/the-rebel-music" class="card-img" aria-label="The Rebel Music">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=1280" alt="The Rebel Music" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-01-1.jpg?v=1734587494&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=1280" alt="The Rebel Music" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product05-02-1.jpg?v=1734587494&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        
          <div class="slae_tag">
            <span class="badges sale_badge"> Sale</span>
          </div>
        

        

        
          <div class="slae_price">
            <div class="text-uppercase">
              
            </div>
          </div>
        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095401214134" data-url="/products/the-rebel-music" data-sectionid="template--19562840981686__main" data-productid="8095401214134" data-producthandle="the-rebel-music" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 3,500.00" data-cmpprice="" data-variantdetails="43553410908342" data-productdetails="8095401214134">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095401214134">
        <a href="/products/the-rebel-music" id="CardLink-template--19562840981686__main-8095401214134" aria-labelledby="CardLink-template--19562840981686__main-8095401214134 " class="text-decoration-none">
          The Rebel Music
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 3,200.00
      
    </span>

    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div>

                  

                  
<div class="product-card sm-mt-14">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="5" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.2051282051282%;">
        <a href="/products/the-geisha-s-grace" class="card-img" aria-label="The Geisha’s Grace">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=1280" alt="The Geisha’s Grace" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-01-1-1.jpg?v=1751872076&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=1280" alt="The Geisha’s Grace" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/product06-02-1-1.jpg?v=1734587570&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        
          <div class="slae_tag">
            <span class="badges sale_badge"> Sale</span>
          </div>
        

        

        
          <div class="slae_price">
            <div class="text-uppercase">
              
            </div>
          </div>
        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095401279670" data-url="/products/the-geisha-s-grace" data-sectionid="template--19562840981686__main" data-productid="8095401279670" data-producthandle="the-geisha-s-grace" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 2,450.00" data-cmpprice="" data-variantdetails="43553411334326" data-productdetails="8095401279670">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095401279670">
        <a href="/products/the-geisha-s-grace" id="CardLink-template--19562840981686__main-8095401279670" aria-labelledby="CardLink-template--19562840981686__main-8095401279670 " class="text-decoration-none">
          The Geisha’s Grace
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 2,450.00
      
    </span>

    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div>

                  

                  
<div class="product-card ">
                    <div class="row">
                      <div class="main-card col-12 col-md-11">
                        

<style data-shopify="">
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
    /* Popup code ends */

    .card-image .swiper-slide{
      background:rgb(var(--color-background));
    }

     .main-product .product__details .variants ul[data-option-name="color"] li.option-item.btn.available.highlighted1.none_color {
             background: rgb(var(--color-input-bg));
              color: rgb(var(--color-input-text-color));
             }

   .main-product .product__details .variants ul[data-option-name="color"] li.option-item.swatch[data-id=""]{
              
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-color: ;
   }


  .image_wrapper img{
    /* content-visibility: auto; */
    background: rgba(var(--color-background));
  }

   
      /* .card .card .card-body{ padding-bottom:0 !important;} */
     
    /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all .4s ease;
         opacity:0;
      }
    .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
        opacity:1 !important;
      } */
     .card .icon_container{ transform: translate(10px); transition: all .4s ease;  opacity:0;}
     .card .card-image:hover .icon_container{opacity:1;  transform: translate(0);}
     .card-image:has(a:focus-visible) .icon_container{opacity:1;}
     .card .icon_container:has(button:focus-visible){opacity:1;}
      
      @media (min-width: 992px){
       /* .card :is(.icon_container), .card :is(.icon_container) :is(.icon_container){
         transform: translate(10px);
         transition: all 1s ease;
          opacity:0;
      }
       .card .card-image:hover :is(.icon_container), .card:focus-visible :is(.icon_container){
        transform: translate(0);
         opacity:1 !important;
      } */
      }
      .card .swiper {
        transform: translateX(100%);
        transition: all .5s ease;
        background: rgb(var(--color-background));
    }
    .card .card-image:hover .swiper, .card:focus-visible .swiper, .card .card-image:focus-visible .swiper { transform:none; }

        .card .card-image:hover .swiper,
  .card:focus-visible .swiper,
  .card .card-image:focus-visible .swiper {
    transform: translateX(0); display:block;
    opacity: 1;
    visibility: visible;
  }
  
   /* .card-image:has(a.card-img:focus-visible) {
    outline: 2px solid var(--bs-border-color);
   } */
      .ratio .swiper-button>svg {
        position: relative;
    }
    /* .quick-view:focus{
      transform:translateX(20%);
    } */
    .card .card_swiper .swiper-button svg{ width:auto; height:auto;}
    @media (max-width: 575.98px){
      .card .card_swiper .swiper-button svg{ width:25px !important; height: 25px !important;}
    }

    .card .card-body .vendor{ font-size: var(--bs-font-md); }
    .card .card-body > div { margin-bottom: 8px; font-size: var(--bs-body-font-size); }
    .card .card-body > div:last-child { margin: 0; }
    .card .card-body > div:empty { display: none !important; }
    .card .card-body > div div.swatch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      
        border-radius:50%;
      
      /* outline: 1px solid transparent;
      outline-offset: 2px; */
      transition: all .2s linear;
  }
    
       .card .card-body > div div.swatch img{
             border-radius: 50%;
       }
      

  /* .card .card-body > div div.swatch_active{
      outline: 2px solid currentcolor !important;
      outline-offset:3px;
  }  */

  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color: rgba(var(--color-background));
    color:rgba(var(--color-background));
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before, .dot-pulse::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 3px;
    height: 3px;
    border-radius: 5px;
    background-color:rgba(var(--color-background));
    color: rgba(var(--color-background));
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 32px 0;
      margin: 0 -5%;
      overflow: hidden;
  }

  /* card pagination */

  .card_swiper_pagination{
      position: absolute;
      top: 0 !important;
      height: fit-content;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .card_swiper_pagination .swiper-pagination-bullet {
      width: 36% !important;
      height: 2px !important;
      margin: 0 !important;
      margin-right: 7px !important;
  }
  .card_swiper_pagination .swiper-pagination-bullet:last-child{
    margin-right:0 !important;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%, 100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  .card .image_wrapper .secondary_image {
      /* transform: scale(0); */
      opacity:0;
      transition:all 0.3s linear;
  }
  /* .image_wrapper .primary_image{ z-index:1; }   */
  .card .card-image:hover .image_wrapper .secondary_image{ /* transform: scale(1); */ opacity:1;}
  @keyframes shine{
    100% {
      left: 125%;
  }
  }

  .card .card-image .image_wrapper{ position:relative; }
  /* .card .card-image .image_wrapper::after{
      content: "";
      position: absolute;
      top: 0;
      left: -105%;
      z-index: 2;
      display: block;
      width: 50%;
      height: 100%;
      pointer-events: none;
  }
  .card .card-image .image_wrapper:hover::after{
    animation: shine 1s ease-in-out;
  } */
  .card-image.card_product_detail:has(a:focus-visible){
      outline: 2px dashed currentcolor !important;
      outline: -webkit-focus-ring-color solid 2px;
  }
  .swatches_container .swatch{
    outline: 2px solid transparent;
    outline-offset: 2px;
   }
  .swatches_container .swatch.swatch_active{
      outline: 2px solid currentColor;
      outline-offset: 2px;
  }
</style>


  <div data-availablecheck="true" data-stockcount="6" class="fadeInUp card color-scheme-3 bg-transparent h-100 secondary_image">
    <div class="card-image overflow-hidden card_product_detail color-scheme-3 ">
      <div class="image_wrapper ratio ratio-3x4" style=" --aspect-ratio:120.2051282051282%;">
        <a href="/products/timeless-reflection" class="card-img" aria-label="Timeless Reflection">
          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=1280" alt="Timeless Reflection" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_01.png?v=1729507622&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" fetchpriority="high" sizes="(max-width: 767px) 100vw, (min-width: 768px) calc((100vw - 120px) / 2), (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 1200px) 650px" class="product-image img-fluid primary_image">
          

          
            <img src="//elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=1280" alt="Timeless Reflection" srcset="//elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=320 320w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=540 540w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=600 600w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=713 713w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=823 823w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=990 990w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=1100 1100w, //elegance-canvas.myshopify.com/cdn/shop/files/Product07_02.png?v=1729507622&amp;width=1206 1206w" width="975" height="1172" loading="lazy" aria_hidden="true" sizes="(min-width: 1200px) 650px, (min-width: 992px) calc((100vw - 130px) / 3), (min-width: 768px) calc((100vw - 120px) / 2), calc((100vw - 35px) / 2)" class="img-fluid secondary_image">
          
        </a>
      </div>
      <div class="tags position-absolute top-0 start-0 m-2 m-sm-3 z-1 d-grid gap-2">
        
          <div class="slae_tag">
            <span class="badges sale_badge"> Sale</span>
          </div>
        

        

        
          <div class="slae_price">
            <div class="text-uppercase">
              
            </div>
          </div>
        
      </div>

      
        <div class="icon_container position-absolute top-0 end-0 z-1 m-2 m-sm-3 d-grid gap-2">
          
            
            <button class="popup-modal popup-modal- quick-view border-0 d-none d-md-flex justify-content-center align-items-center" id="quick-view-8095401410742" data-url="/products/timeless-reflection" data-sectionid="template--19562840981686__main" data-productid="8095401410742" data-producthandle="timeless-reflection" aria-label="Quick view" data-currencysymbol="Rs." data-quickviewtype="popup" data-unitprice="
                  
              " data-price="Rs. 4,200.00" data-cmpprice="Rs. 6,000.00" data-variantdetails="43553411662006" data-productdetails="8095401410742">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9997 19.0217C6.85273 19.0217 4.06423 16.5302 2.45823 14.4402C1.64148 13.3787 1.14648 12.7352 1.14648 11C1.14648 9.26199 1.63873 8.62124 2.45823 7.55974C4.06698 5.46974 6.85548 2.97824 10.9997 2.97824C15.1467 2.97824 17.9352 5.46974 19.5412 7.55974C20.358 8.62124 20.853 9.26474 20.853 11C20.853 12.738 20.3607 13.3787 19.5412 14.4402C17.9352 16.5302 15.1467 19.0217 10.9997 19.0217ZM3.54723 13.6015C4.96623 15.4467 7.41373 17.6467 10.9997 17.6467C14.5857 17.6467 17.0332 15.4467 18.4522 13.6015C19.1975 12.6307 19.478 12.2677 19.478 11C19.478 9.73224 19.1975 9.36924 18.4522 8.39849C17.0332 6.55324 14.5857 4.35324 10.9997 4.35324C7.41373 4.35324 4.96623 6.55324 3.54723 8.39849C2.80198 9.36924 2.52148 9.73224 2.52148 11C2.52148 12.2677 2.79923 12.6307 3.54723 13.6015Z" fill="currentcolor"></path>
<path d="M11 14.4375C9.10525 14.4375 7.5625 12.8948 7.5625 11C7.5625 9.10525 9.10525 7.5625 11 7.5625C12.8948 7.5625 14.4375 9.10525 14.4375 11C14.4375 12.8948 12.8948 14.4375 11 14.4375ZM11 8.9375C9.8615 8.9375 8.9375 9.8615 8.9375 11C8.9375 12.1385 9.8615 13.0625 11 13.0625C12.1385 13.0625 13.0625 12.1385 13.0625 11C13.0625 9.8615 12.1385 8.9375 11 8.9375Z" fill="currentcolor"></path>
</svg>
              <div class="popup-loader spinner-border spinner-border-sm" role="status" style="display: none;">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          
        </div>
      
    </div>
    <div class="card-body   px-0">
      
      <h3 class="card-title h2 mb-1" id="title-template--19562840981686__main-8095401410742">
        <a href="/products/timeless-reflection" id="CardLink-template--19562840981686__main-8095401410742" aria-labelledby="CardLink-template--19562840981686__main-8095401410742 " class="text-decoration-none">
          Timeless Reflection
        </a>
      </h3>
      

      

<div class="product_price_info d-flex gap-2 flex-wrap">
  
    <span class="from_price">
      From
      
        Rs. 2,500.00
      
    </span>

    
      <span class="low_price text-decoration-line-through">
        
          Rs. 6,000.00
        
      </span>
    
  
</div>



      

      
    </div>
  </div>
                      </div>
                    </div>
                  </div><input type="hidden" id="paginate_totalcount" class="visually-hidden" value="18" aria-label="18" style="">
                    <div class="pagination-container mt-3 mt-xl-5 text-center w-100 d-none">
                      <div class="pagination justify-content-center align-items-center flex-wrap"> <span class="page current">1</span> <span class="page"><a href="/collections/pro-art-series?page=2" title="">2</a></span> <span class="page"><a href="/collections/pro-art-series?page=3" title="">3</a></span> <span class="next"><a href="/collections/pro-art-series?page=2" title="">Next »</a></span> </div>
                    </div>
                <div class="pagination-wrapper " style="width:100% !important;">
    <nav class="pt-5" role="navigation" aria-label="Pagination">
      <ul class="pagination pagination__list list-unstyled mb-0" role="list"><li class="page-item"><a role="link" aria-disabled="true" class="pagination__item page-link pagination__item--current light active" aria-current="page" aria-label="Page 1" data-link-target="2">
                 01</a></li><li class="page-item"><a href="/collections/pro-art-series?page=2" class="pagination__item page-link" aria-label="Page 2" data-link-target="2">
                02</a></li><li class="page-item"><a href="/collections/pro-art-series?page=3" class="pagination__item page-link" aria-label="Page 3" data-link-target="3">
                03</a></li><li class="page-item">
            <a href="/collections/pro-art-series?page=2" class="pagination__item pagination__item--prev page-link" aria-label="Next page" data-link-target="2">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.45586 12L3 22L22 12L3 2L7.45586 12Z" fill="currentcolor"></path>
</svg>

</a>
          </li></ul>
    </nav>
  </div>

            
          </div>

          
            
            <button id="load-more" class="btn btn-primary mt-4" style="display:none !important;">
              View more
            </button>
          
        </div>

        <!-- end main-products -->
      </div>
    
  </div>
</div>

<!-- Drawer -->


  <div class="mobile_card_drawer offcanvas offcanvas-end color-scheme-4 yes" data-bs-scroll="false" tabindex="-1" id="filterOffCanvas" aria-labelledby="filterDrawer">
    <div class="offcanvas-header text-center justify-content-center align-items-center position-relative">
      <h2 class="offcanvas-title h1 offcanvas-title" id="filterDrawer">All filters</h2>
      <button type="button" class="btn-close m-3 position-absolute d-flex top-0 end-0 shadow-none text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="line-decor position-relative">
  <div class="container">
    <div class="d-flex flex-nowrap align-items-center" style=" ">
      
      
          <span class="line-left flex-grow-1"></span>
          <div class="d-inline-flex divide-icon">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 102 64.9" style="enable-background:new 0 0 102 64.9;" xml:space="preserve">
  <path d="M96.5,24.8c4.6-2.7,4.8-5.8,4.4-7.5c-0.6-3.4-4.1-6.4-8.5-7.3c-4.5-1.5-11.9,0.4-21.9,5.9c-3.3-2.3-8.1-6.3-11.9-9.5
  	c-5.7-4.7-6.9-5.6-7.5-5.7c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.3,0.1h-0.1v0.1c-0.8,0.4-2.4,1.7-7,5.4c-3.9,3.3-8.8,7.3-12.1,9.6
  	c-10-5.5-17.4-7.5-21.9-5.9c-4.3,0.9-7.9,4-8.5,7.3C0.8,18.8,1,22,5.5,24.7c8.8,5,19-0.4,26.1-5.1c7.2,4.1,13.9,8.9,17.5,11.5
  	c-5,7.6-9.7,14.7-9.5,20.6c0.2,4.9,2.1,8.8,5.3,10.9c2.8,1.8,6.5,2,9.5,0.5c3.6-1.8,6-5.5,6.8-10.5c1.2-7.7-5.6-17.9-8.3-21.5
  	c3.6-2.7,10.3-7.4,17.4-11.5C77.4,24.4,87.6,29.8,96.5,24.8L96.5,24.8z M20.5,21.7c-4.3,1.5-8,1.6-11.6,0.2c-1.7-1.2-2.4-2.6-2-4.1
  	c0.5-1.9,2.6-3.6,4.4-4.3c3.5-1.2,9.2,0.3,17,4.4C25.3,19.6,22.7,20.8,20.5,21.7L20.5,21.7z M57.2,52.4c-0.3,2.9-1.7,4.6-2.8,5.4
  	c-1.2,0.9-2.7,1.5-4.2,1.5c-0.2,0-0.4,0-0.6,0c-2.6-0.3-5.7-2.4-5.9-7.5c-0.2-5.9,3.3-12.2,7.1-18.2C53.4,37.1,58.3,45.8,57.2,52.4z
  	 M51,28.6c-3.4-2.5-9.7-7-16.5-11c3.2-2.3,6.3-4.7,9-7l-0.5-0.6l0.5,0.5c2.7-2.1,5.2-4.2,7.3-5.6c2.1,1.4,4.7,3.5,7.4,5.7
  	c2.8,2.2,5.8,4.6,9,7C60.6,21.7,54.4,26.1,51,28.6z M90.6,13.6c2.1,0.9,4.3,2.8,4.5,4.9c0.1,1.3-0.6,2.5-2.1,3.6
  	c-6.2,2.4-12.3,0.1-19.4-4.1C81.4,13.8,87.1,12.4,90.6,13.6L90.6,13.6z"></path>
  </svg>
</div>

          <span class="line-right flex-grow-1"></span>
      

    </div>
  </div>
</div>

    <div class="offcanvas-body">
      <div class="search form-2 offset-lg-2 body-container facet-filter sidebar_filters" id="drawer_filter">
        <style data-shopify="">

  /* .facet-filters .collapse-btn::after {
    content: 'More';
    display: inline-block;
  } */

   .facet-filters .collapse-btn:not(.collapsed)::after {
    content: 'Less';
      display: inline-block;
  }
    .facet-filters button.collapse-label {
     cursor:pointer;
   }
    
   .facet-filters button.collapse-label::after {
      content: "";
      display: inline-block;
      margin-left: auto;
      /* vertical-align: 0.255em; */
      width: 1em;
      height: 1em;
      margin-right: -0.25rem;
      background-color: currentcolor;
      border: 0 !important;
      -webkit-mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;
      flex-shrink: 0;
      /* margin: auto; */
  }
  
    .extra-filters_low { display:block !important; }
  .color-swatch {
      /* position: absolute; */
      left: 0px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      background: var(--product-swatch-value, transparent);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
     
      outline: 1px solid transparent;
      outline-offset: 2px;
      transition: all 0.2s linear;
      /* z-index: 1; */
  }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{
      position: absolute;
      opacity: 1;
      left: 0px;
      border: 1px solid rgba(var(--color-border),.3);
      box-shadow: none;
      background: none;
      vertical-align: middle;
       
      top: 0;
      bottom:0;
      margin: auto;
      padding: 0;
      z-index: 1;
      width:22px;
      height:22px;
    }
    .label_name{
      flex-grow: 1;
      position: relative;
      font-size: var(--bs-body-font-size);
      word-break: break-word;
      line-height: normal;
      align-items: center;
      cursor: pointer;
    }
    .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"]{background:transparent;}

  .filter-item label.opacity-50{cursor: not-allowed;}
  .filter-item label.label_name:not(.opacity-50) span:hover .color-swatch{ outline: 1px solid #000}
  .filter-item label:not(.opacity-50) .color-swatch:hover { outline: 1px solid #000; }
  .filters-container .filter-item::nth-child(1) {padding-top: 0px !important;}

  /* .filter-item input[type=checkbox][name="filter.v.t.shopify.color-pattern"] ~ span.color-swatch {
      outline: 1px solid rgba(var(--color-foreground));
  } */
  .filter_repeat ,.remove_filter{border-radius: var(--bs-btn-border-radius) !important;}

  .clear-filters p a {
      /* color: rgba(var(--color-primary-button-text)); */
      font-size: var(--bs-body-font-size);
      /* outline: none; */
      /* background: rgba(var(--color-primary-button-bg)); */
      padding: 0px;
      font-weight: var(--bs-btn-font-weight);
  }
  .clear-filters p{ /* background: rgba(var(--color-primary-button-bg)); */position:relative; }
  .sidebar_filter .filters-container > div:empty {display: none;}
  .clear-filters p{ position:relative; }
  .clear-filters p a::after{
      content:'';
      position:absolute;
      mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      -webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="%23000000"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg>');
      mask-repeat:no-repeat;
      -webkit-mask-repeat:no-repeat;
      background:rgba(var(--color-primary-button-text));
      mask-size:cover;
      -webkit-mask-size:cover;
      width:12px;
      height:12px;
      /* transform: translate(-70%, 75%); */
      top:0;
      bottom:0;
      right: 8px;
      margin:auto;
      cursor:pointer;
      display:none;
  }
  .hidden {
    display: none !important;
  }
  /* .filters-container .filter-item .filter-price-range .input-group .form-control{
    box-shadow:none !important;
  } */
  .filter-price-range .input-group input {
      /* position: absolute; */
      width: 100%;
  }
  .filter-price-range .input-group .input-group-text {
      position: absolute;
      z-index: 9;
      bottom: 3px;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
     border: 1px solid rgba(var(--color-primary-button-text));
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb:hover {
    background: #f7f7f7;
  }
  input[type=range]::-webkit-slider-thumb:focus-visible{
    outline:2px solid #000;
  }
  input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
  }



  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
     opacity: 0;
  }

  .sliders_control input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    width: 100%;
    position: absolute;
    background-color: rgba(var(--color-secondary-button-bg));
    border-radius: 20px;
    pointer-events: none;
    left:0px;
  }

  #fromSlider {
    height: 10px;
    background:transparent;
    z-index: 1;
  }

input[type=range]:focus::-webkit-slider-thumb,
input[type=range]:active::-webkit-slider-thumb,
input[type=range]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 8px rgba(var(--color-primary-button-text), 0.25);
  outline: 2px dashed currentcolor !important;
}
  /* input#fromSlider:focus-visible{
     border:0px solid ;
     outline:0px solid;
} */

.sliders_control input[type="range"]:focus-visible{
  border:0px solid ;
  outline:0px solid;
}
  .filter-price-range input[type="number"]{
    padding: 10px;
    padding-left: 35px;
    /* border: 0; */
    /* border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important; */
  }
  .filter-price-range .input-group .input-group-text{
    border: 0;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    letter-spacing:normal;
  }

    
    
  
  #collapse-filter_p_m_custom_custom_colors input[type="checkbox"]:not(.custom_color),
  #collapse-filter_v_t_shopify_color-pattern input[type="checkbox"]:not(.custom_color){
    z-index:1;
    background: transparent;
    border: none;
    width: 15px;
    height: 15px;
    /* border-radius:50%; */
  }
  .clear-filters p a:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  .filter_repeat:focus-visible {
      outline: 2px dashed rgba(var(--color-border));
      outline-offset: 2px;
  }
  @media (min-width:992px){
  .sidebar_container .facet-filters{
      border: var(--bs-style-border) solid var(--bs-border-color);
      border-radius: var(--bs-radius);
  }
  }

  /* .facet-filters .filter-group-display__list>*:last-child {margin-bottom:0 !important;} */

</style>



<facet-filters class="facet-filters" data-id="template--19562840981686__main">
  <form onsubmit="return false;">
    <div class="facet-filters-filters  p-lg-3">
      <div class="clear-filters m-0">
        <div class="filter_results">
          <p class="d-inline-block mb-0 remove_filter rounded-pill d-none">
            
              <a href="/collections/pro-art-series?sort_by=" class="active-filters__clear border-0 btn remove_all rounded-0 text-capitalize text-decoration-underline">Remove all</a>
            
          </p>
          <div class="filtered_items d-flex flex-wrap align-items-center gap-2 mt-3"></div>
        </div>
      </div>
      <div class="filters-container"><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_availability" aria-expanded="true" aria-controls="collapse">
              Availability
            </button>
                <div style="list-style:none;" id="collapse-filter_v_availability" class="collapse-filter_v_availability collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-availability
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="1" id="Filter-filter.v.availability-1-filterEle3" data-compare="Filter-filter.v.availability-1" data-count="18" aria-label="In stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-1-filterEle3">In stock
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.availability" value="0" id="Filter-filter.v.availability-2-filterEle3" data-compare="Filter-filter.v.availability-0" data-count="1" aria-label="Out of stock" style="">

                          


                            
                            <label for="Filter-filter.v.availability-2-filterEle3">Out of stock
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_price" aria-expanded="true" aria-controls="collapse">
              Price
            </button><div id="collapse-filter_v_price" class="  collapse show  ">
                  <div class="pt-3 ps-0 mt-1">
                    <div class="price position-relative">
                      <div class="sliders_control pb-4">
                        <label for="fromSlider" class="visually-hidden">Minimum price</label>
                        <input id="fromSlider" type="range" value="0" min="0" tabindex=" 0 " max="5000.00" style="">
                        <label for="toSlider" class="visually-hidden">Maximul price</label>
                        <input id="toSlider" type="range" value="5000.00" min="0" tabindex=" 0 " max="5000.00" style="">
                      </div>
                    </div>
                    <div class="filter-price-range d-flex flex-wrap row position-relative mt-1 row-cols-2">
                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="fromInput" class="visually-hidden">₹</label>
                        <input onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57" onkeydown="if(event.key === 'Backspace' &amp;&amp; this.value === '0') return false;" oninput="if(this.value === '' || this.value &lt;= 0) this.value = 0;" type="number" class="form-control" name="filter.v.price.gte" placeholder="0" id="fromInput" data-id="Filter-filter.v.price.gte" value="0" min="0" max="5000.00" style="">
                      </div>

                      <div class="input-group flex-nowrap w-50 btn_radius">
                        <div class="input-group-text">₹</div>
                        <label for="toInput" class="visually-hidden">₹</label>
                        <input type="number" class="form-control" name="filter.v.price.lte" id="toInput" data-id="Filter-filter.v.price.lte" placeholder="5000.00" min="0" value="5000.00" max="5000.00" style="">
                      </div>
                    </div>
                  </div>
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_p_tag" aria-expanded="true" aria-controls="collapse">
              Tags
            </button>
                <div style="list-style:none;" id="collapse-filter_p_tag" class="collapse-filter_p_tag collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-filter_p_tag
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Prints" id="Filter-filter.p.tag-1-filterEle3" data-compare="Filter-filter.p.tag-Prints" data-count="18" aria-label="Prints" style="">

                          


                            
                            <label for="Filter-filter.p.tag-1-filterEle3">Prints
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.p.tag" value="Visual Artwork" id="Filter-filter.p.tag-2-filterEle3" data-compare="Filter-filter.p.tag-Visual Artwork" data-count="18" aria-label="Visual Artwork" style="">

                          


                            
                            <label for="Filter-filter.p.tag-2-filterEle3">Visual Artwork
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 border-bottom ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_option_size" aria-expanded="true" aria-controls="collapse">
              size
            </button>
                <div style="list-style:none;" id="collapse-filter_v_option_size" class="collapse-filter_v_option_size collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_size
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*24 inches" id="Filter-filter.v.option.size-1-filterEle3" data-compare="Filter-filter.v.option.size-12*24 inches" data-count="18" aria-label="12*24 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-1-filterEle3">12*24 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="12*48 inches" id="Filter-filter.v.option.size-2-filterEle3" data-compare="Filter-filter.v.option.size-12*48 inches" data-count="18" aria-label="12*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-2-filterEle3">12*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="24*48 inches" id="Filter-filter.v.option.size-3-filterEle3" data-compare="Filter-filter.v.option.size-24*48 inches" data-count="18" aria-label="24*48 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-3-filterEle3">24*48 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.size" value="48*96 inches" id="Filter-filter.v.option.size-4-filterEle3" data-compare="Filter-filter.v.option.size-48*96 inches" data-count="18" aria-label="48*96 inches" style="">

                          


                            
                            <label for="Filter-filter.v.option.size-4-filterEle3">48*96 inches
                              <span class="filter_counts ">(18)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                </div></div><div class="filter-item py-4 px-2 ">
            <button type="button" class="bg-transparent text-start border-0 w-100 collapse-label  collapse-label  h5 d-flex m-0 gap-2 px-0" data-bs-toggle="collapse" data-bs-target="#collapse-filter_v_option_material" aria-expanded="true" aria-controls="collapse">
              Material
            </button>
                <div style="list-style:none;" id="collapse-filter_v_option_material" class="collapse-filter_v_option_material collapse show  extra_button">

                  <ul role="listbox" class="
                      pt-3 ps-0 filter-group-display__list mb-0 filter-param-option_material
                    "><li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Aluminum" id="Filter-filter.v.option.material-1-filterEle3" data-compare="Filter-filter.v.option.material-Aluminum" data-count="3" aria-label="Aluminum" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-1-filterEle3">Aluminum
                              <span class="filter_counts ">(3)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Bamboo" id="Filter-filter.v.option.material-2-filterEle3" data-compare="Filter-filter.v.option.material-Bamboo" data-count="5" aria-label="Bamboo" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-2-filterEle3">Bamboo
                              <span class="filter_counts ">(5)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Carved Wood" id="Filter-filter.v.option.material-3-filterEle3" data-compare="Filter-filter.v.option.material-Carved Wood" data-count="7" aria-label="Carved Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-3-filterEle3">Carved Wood
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Custom-Built Frame" id="Filter-filter.v.option.material-4-filterEle3" data-compare="Filter-filter.v.option.material-Custom-Built Frame" data-count="1" aria-label="Custom-Built Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-4-filterEle3">Custom-Built Frame
                              <span class="filter_counts ">(1)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex  ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Gilded Frame" id="Filter-filter.v.option.material-5-filterEle3" data-compare="Filter-filter.v.option.material-Gilded Frame" data-count="7" aria-label="Gilded Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-5-filterEle3">Gilded Frame
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Lacquered Frame" id="Filter-filter.v.option.material-6-filterEle3" data-compare="Filter-filter.v.option.material-Lacquered Frame" data-count="4" aria-label="Lacquered Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-6-filterEle3">Lacquered Frame
                              <span class="filter_counts ">(4)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Pine Wood" id="Filter-filter.v.option.material-7-filterEle3" data-compare="Filter-filter.v.option.material-Pine Wood" data-count="11" aria-label="Pine Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-7-filterEle3">Pine Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Reclaimed Wood" id="Filter-filter.v.option.material-8-filterEle3" data-compare="Filter-filter.v.option.material-Reclaimed Wood" data-count="10" aria-label="Reclaimed Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-8-filterEle3">Reclaimed Wood
                              <span class="filter_counts ">(10)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Solid Wood" id="Filter-filter.v.option.material-9-filterEle3" data-compare="Filter-filter.v.option.material-Solid Wood" data-count="11" aria-label="Solid Wood" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-9-filterEle3">Solid Wood
                              <span class="filter_counts ">(11)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Stainless Steel" id="Filter-filter.v.option.material-10-filterEle3" data-compare="Filter-filter.v.option.material-Stainless Steel" data-count="7" aria-label="Stainless Steel" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-10-filterEle3">Stainless Steel
                              <span class="filter_counts ">(7)</span>
                            </label>


                        </div>
                      </li>
                      
<li role="option" class="d-flex   facts_items hidden ">
                        <div class="d-inline-flex align-items-center gap-2 position-relative
                        ">
                          <input type="checkbox" class="color_swatch flex-shrink-0 me-1 " name="filter.v.option.material" value="Textured Frame" id="Filter-filter.v.option.material-11-filterEle3" data-compare="Filter-filter.v.option.material-Textured Frame" data-count="6" aria-label="Textured Frame" style="">

                          


                            
                            <label for="Filter-filter.v.option.material-11-filterEle3">Textured Frame
                              <span class="filter_counts ">(6)</span>
                            </label>


                        </div>
                      </li>
                      
</ul>

                  
                    <button class="showmore show link  text-body underlined-link bg-transparent border-0 p-0 text-decoration-underline mt-3 d-block" id="collapse-filter_v_option_material" type="button">
                      <span class="label-show-more label-text">More</span>
                      <span class="label-show-less label-text hidden">Less</span>
                    </button>
                  
                </div></div></div>
    </div>
  </form>
</facet-filters>

      </div>
      <div class="d-flex justify-content-evenly p-3 pb-0 ">

        <button class="btn btn-secondary" data-bs-dismiss="offcanvas">Apply</button>
      </div>
    </div>
  </div>

<label class="visually-hidden" for="post_limit1">6</label>
<input type="hidden" value="6" id="post_limit1" class="visually-hidden" style="">



<script>
  $(document).ready(function(){

$('button.showmore').click(function() {
  var buttonId = this.id;
  var $container = $(this).closest('.filter-item');
  var $labelShowMore = $container.find('.label-show-more');
  var $labelShowLess = $container.find('.label-show-less');

  var selector = 'div#' + buttonId + ' ul li';
  var $items = $(selector);
  var newSelector = ".facts_items .hidden";
  var ccount = 5;
  if ($items.length === 0) {
    selector = 'div.' + buttonId + ' ul li';
    newSelector = ".hidden";
    $items = $(selector);
    var ccount = 9;
  }

  console.log(selector, $items.length, "items found");
  if ($items.filter('.hidden').length > 0) {

      setTimeout(() => {
        var $visibleItems = $items.not(newSelector);
        var sixthItem = $visibleItems.length > 5 ? $visibleItems[ccount] : $visibleItems[5];

        if (sixthItem) {
          var $checkbox = $(sixthItem).find('input[type="checkbox"]');

          if ($checkbox.length) {

              $items.removeClass('hidden');
              $labelShowLess.removeClass('hidden');
              $labelShowMore.addClass('hidden');
            $checkbox.focus();
          }
        }
      }, 200);

    } else {
      if ($items.length > 5) {
        $items.slice(5).each(function() {
          if ($(this).hasClass('facts_items')) {
            $(this).addClass('hidden');
          }
        });
        $labelShowLess.addClass('hidden');
        $labelShowMore.removeClass('hidden');
        setTimeout(() => {
          var $firstVisibleItem = $items.first().find('input[type="checkbox"]');
          if ($firstVisibleItem.length) {
            $labelShowMore.focus();
          } else {
            $(this).focus();
          }
        }, 10);
      }
    }
});



 /* maximum value control */
  initRangeInputs();
  document.addEventListener('ajaxComplete', initRangeInputs);


function initRangeInputs() {
  // Select all relevant number inputs with max attributes
  const numberInputs = document.querySelectorAll('input[type="number"][max]');

  numberInputs.forEach(input => {
    const maxValue = parseFloat(input.max);
    const minValue = parseFloat(input.min) || 0; // Default min to 0 if not specified

    // Clean up any existing listeners to prevent duplicates
    input.removeEventListener('input', handleInput);
    input.addEventListener('input', handleInput);

    function handleInput() {
      let value = parseFloat(this.value);

      // Handle empty/NaN cases
      if (isNaN(value)) {
        this.value = minValue;
        return;
      }

      // Enforce boundaries
      if (value < minValue) {
        this.value = minValue;
      } else if (value > maxValue) {
        this.value = maxValue;
      }

      // Format the number (optional)
      if (this.dataset.decimals) {
        const decimals = parseInt(this.dataset.decimals);
        this.value = value.toFixed(decimals);
      }

      // Dispatch change event if needed
      if (this.dataset.triggerChange === 'true') {
        this.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }

    // Initial validation
    handleInput.call(input);
  });
}

 /* maximum value control */





     function fetchProducts(url) {
  fetch(url, { headers: { "X-Requested-With": "XMLHttpRequest" } })
    .then(response => response.text())
    .then(data => {
     jQuery('.clear-filters').removeClass('d-none')
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const newProductGrid = doc.querySelector("#product-grid");
      const paginationContainer = doc.querySelector(".pagination-container");
      document.getElementById("product-grid").innerHTML = newProductGrid.innerHTML;
      document.querySelector(".pagination-container").innerHTML = paginationContainer.innerHTML;

    })
    .catch(() => {});
         const productGrid = document.getElementById("product-grid");
         productGrid.innerHTML = '<div class="no-results h5 col my-4 text-center">No products found. Please adjust your filters </div>';

}



  const paginationContainer = document.querySelector('.pagination-container');

if (paginationContainer) {
  paginationContainer.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('page-link')) {
      event.preventDefault();
      const url = event.target.getAttribute('href');
      fetchProducts(url);
    }
  });
}





  $('.sorting').click(function(){
    $('.sorting_select').removeAttr('hidden')
  })
  $('select#SortBy').change(function(){
    $(this).attr('hidden','hidden')
  })


  $(document).ready(function () {
    $('#desktop_column').on('input change', function () {
      var selectedValue = $(this).val();

      $('.grid_container button').removeClass('active');
      $('.grid_container button[data-columns="' + selectedValue + '"]').addClass('active');
    });
  });



  $('.sorting_duplicate .dropdown-menu li').click(function(event) {
    event.preventDefault();
    var sorting_val = $(this).data('value');
    var selected_text = $(this).text().trim();
    $('.sorting_select').val(sorting_val).trigger('change');
    $(this).closest('.dropdown')
           .find('.dropdown-toggle')
           .html(selected_text );

    $(this).siblings().removeAttr('selected');
    $(this).attr('selected', 'selected');
    document.querySelector('.sorting_select').dispatchEvent(new Event('change', { bubbles: true }));

    var spanElement1new = $('.filters-container').removeClass('opacity-50')


  });

  // Initialize button text from selected option
  var initial_selected = $('.sorting_duplicate .dropdown-menu li[selected]');
  if (initial_selected.length) {
    $('.sorting_duplicate .dropdown-toggle')
      .html(initial_selected.text().trim());
  }



    const sidebar = document.getElementById('sidebar_filter');
     const sidebarContainer = document.getElementById('sidebar_collapse');
    $('#sidebar_collapse').click(function()
     {
       $('#sidebar_collapse .showhide_filter').text('Hide filter');

             if ($(this).hasClass('collapsed')) {
                $('#sidebar_collapse .showhide_filter').text('Show filter');
            } else {
                $('#sidebar_collapse .showhide_filter').text('Hide filter');
            }
     })




/* Remove All functionality */
document.querySelectorAll('form').forEach(form => {
  const filteredItems = form.querySelector('.filtered_items');
  const removeFilter = form.querySelector('.remove_filter');
  const filterResults = form.querySelector('.filter_results');

  if (filteredItems && removeFilter && filterResults) {
    if (filteredItems.children.length > 0) {
      removeFilter.classList.remove('d-none');
      filterResults.classList.add('pt-sm-4');
      filterResults.classList.add('pt-2');

    } else {
      removeFilter.classList.add('d-none');
      filterResults.classList.remove('pt-4');
    }
  }
});


document.querySelectorAll('.filtered_items .filter_repeat').forEach(function(element) {
    element.addEventListener('click', function() {
       event.preventDefault();
      var pparam = this.getAttribute('data-pparam');
      var pval = this.getAttribute('data-pval');
      var checkbox = document.querySelector('input[type="checkbox"][name="' + pparam + '"][value="' + pval + '"]');

      if (checkbox) {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        if (params.has(pparam)) {
          let values = params.getAll(pparam);
          values = values.filter(value => value !== pval);
          params.delete(pparam);
          values.forEach(value => params.append(pparam, value));
          window.history.replaceState({}, '', `${url.pathname}?${params.toString()}`);
        }
      }
    });

});


document.querySelectorAll('.filtered_items .filter_repeat_price').forEach(function(element) {
  element.addEventListener('click', function() {
     event.preventDefault();
    var pparam = this.getAttribute('data-pparam');
    var pval = this.getAttribute('data-pval');

    document.querySelectorAll(`[name="${pparam}"]`).forEach(function(input) {
      if (input.type === "checkbox" && input.value === pval) {
        input.checked = false;
      } else if (input.type === "number") {
        input.value = "";
      }
    });

    var maxValue = document.getElementById('toInput').getAttribute('max');
    var fromInput = document.getElementById('fromInput');
    var toInput = document.getElementById('toInput');
    var fromSlider = document.getElementById('fromSlider');
    var toSlider = document.getElementById('toSlider');

    fromInput.value = 0;
    toInput.value = maxValue;
    fromSlider.value = 0;
    toSlider.value = maxValue;

    fromInput.dispatchEvent(new Event('input'));
    toInput.dispatchEvent(new Event('input'));
    fromSlider.dispatchEvent(new Event('input'));
    toSlider.dispatchEvent(new Event('input'));

    $(this).remove();

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    if (params.has(pparam) || params.has(pval)) {
      let values = params.getAll(pparam);
      params.delete(pparam);
      params.delete(pval);
      window.history.replaceState({}, '', `${url.pathname}?${params.toString()}`);
      fetchProducts(`${url.pathname}?${params.toString()}`);
    }
  });
});









function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#000', '#000', controlSlider);
    if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
    } else {
        fromSlider.value = from;
    }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#000', '#000', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
    } else {
       // toInput.value = from;
    }
}


  function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);

  document.querySelectorAll('form').forEach(form => {
    const otherFromSlider = form.querySelector('#fromSlider');
    const otherToSlider = form.querySelector('#toSlider');
    const otherFromInput = form.querySelector('#fromInput');

    if (otherFromSlider && otherToSlider && otherFromInput) {
      fillSlider(otherFromSlider, otherToSlider, '#000', '#000', otherToSlider);

      if (from > to) {
        otherFromSlider.value = to;
        otherFromInput.value = to;
      } else {
        otherFromInput.value = from;
      }


      if (parseInt(otherFromSlider.value) === 0 && parseInt(otherToSlider.value) === 0) {
        const max = otherToSlider.getAttribute('max') || 1000;
        otherToSlider.value = max;
      }
    }
  });
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);

  // Update all toSliders and toInputs in other forms
  document.querySelectorAll('form').forEach(form => {
    const otherFromSlider = form.querySelector('#fromSlider');
    const otherToSlider = form.querySelector('#toSlider');
    const otherToInput = form.querySelector('#toInput');

    if (otherFromSlider && otherToSlider && otherToInput) {
      fillSlider(otherFromSlider, otherToSlider, '#000', '#000', otherToSlider);
      setToggleAccessible(otherToSlider);

      if (from <= to) {
        otherToSlider.value = to;
        otherToInput.value = to;
      } else {
        otherToInput.value = from;
        otherToSlider.value = from;
      }
    }
  });
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;

}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

function setupPriceRangeControls(form) {
  const fromSlider = form.querySelector('#fromSlider');
  const toSlider = form.querySelector('#toSlider');
  const fromInput = form.querySelector('#fromInput');
  const toInput = form.querySelector('#toInput');

  if (!fromSlider || !toSlider || !fromInput || !toInput) return;

  fillSlider(fromSlider, toSlider, '#000', '#000', toSlider);
  setToggleAccessible(toSlider);
  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

  $(fromSlider).change(function() {
    fromInput.dispatchEvent(new Event('change', { bubbles: true }));
  });

  $(toSlider).change(function() {
    toInput.dispatchEvent(new Event('change', { bubbles: true }));
  });
}

document.querySelectorAll('form').forEach(form => {
  setupPriceRangeControls(form);
});


const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1 && node.matches('form')) {
        setupPriceRangeControls(node);
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});





    function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

 function getDefaultselection() {
  const priceGte = getUrlParameter('filter.v.price.gte');
  const priceLte = getUrlParameter('filter.v.price.lte');
  document.querySelectorAll('form').forEach(form => {
    const fromInput = form.querySelector('#fromInput');
    const fromSlider = form.querySelector('input[name="fromSlider"]') ||
                      form.querySelector('#fromSlider');

    if (priceGte && fromInput && fromSlider) {
      fromInput.value = priceGte;
      fromSlider.value = priceGte;
      console.log("Updated from values in form:", form, priceGte);
    }

    // Update TO inputs and sliders
    const toInput = form.querySelector('#toInput');
    const toSlider = form.querySelector('input[name="toSlider"]') ||
                    form.querySelector('#toSlider');

    if (priceLte && toInput && toSlider) {
      toInput.value = priceLte;
      toSlider.value = priceLte;
      console.log("Updated to values in form:", form, priceLte);
    }
  });
}
  getDefaultselection();
  });
</script>

    </div>
  </div>
</div>


</div>
```

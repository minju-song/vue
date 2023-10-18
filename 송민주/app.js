    // var APP_LOG_LIFECYCLE_EVENTS = true;
    import Header from './components/myHeader.js';
    import Product from './components/productPage.js';
    import Checkout from './components/checkoutPage.js';

    const template = `
        <div>
            <header>
                <my-header :sitename='sitename'
                            @go='goPage'
                            :cartItemCount='cartItemCount'>
                </my-header>
            </header>
            <div class="row"
                <product v-if="showProduct"
                            @cartcount='cartCount'>
                </product>
                <checkout v-else
                            @submit='submitForm'>
                </checkout>
            </div>
        </div>
    `;

    var webstore = new Vue({
      el: '#app',
      template,
      components : {
        'my-header' : Header,
        'product' : Product,
        'checkout' : Checkout
      },
      data: {
        cartItemCount : 0,
        sitename: "Vue.js 애완용품샵",
        showProduct: true,
      },
      methods: {
        goPage() {
          this.showProduct = this.showProduct? false: true;
        },
        submitForm() {
          alert('제출 완료');
          this.cartCount(0);
          this.goPage();
        },
        cartCount(count) {
          this.cartItemCount = count;
        }
      },  
    });

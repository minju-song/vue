    // var APP_LOG_LIFECYCLE_EVENTS = true;
    import Header from './components/myHeader.js';
    import Product from './components/productPage.js';
    import Checkout from './components/checkoutPage.js';

    const template = `
        <div>
            <header>
                <my-header :sitename='sitename'
                            @go='goPage'
                            :cartItemCount='cartItemCount'></my-header>
            </header>
            <div class="row"
                <product v-if="showProduct"
                            :product='product'
                            :canAddToCart='canAddToCart'
                            @addCart='addToCart'></product>
                <checkout v-else
                            :order=order
                            :states='states'
                            @submit='submitForm'></checkout>
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
        sitename: "Vue.js 애완용품샵",
        showProduct: true,
        // a: false,
        states: {
          AL: '알라바마',
          AK: '알래스카',
          AR: '애리조나',
          CA: '캘리포니아',
          NV: '네바다'
        },
        order: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          method: '자택 주소',
          business: '직장 주소',
          home: '자택 주소',
          gift:'선물로 보내기',
          sendGift: '선물로 보내기',
          dontSendGift: '선물로 보내기 않기'
        },
        product: {
          id: 1001,
          title: "고양이 사료, 25파운드",
          description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
          price: 2000,
          image: "assets/images/product-fullsize.png",
          availableInventory: 5
        },
        cart: []
      },
      methods: {
        addToCart(id) {
          this.cart.push( id);
        },
        goPage() {
          this.showProduct = this.showProduct? false: true;
        },
        submitForm() {
          alert('제출 완료');
          this.cart = [];
          this.goPage();
        }
      },
      computed: {
        cartItemCount() {
          return this.cart.length || '';
        },
        canAddToCart() {
          return this.product.availableInventory > this.cartItemCount;
        }
      },
   
    });

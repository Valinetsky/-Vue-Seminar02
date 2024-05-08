new Vue({
  el: ".content",
  data: {
    sortedText: "по возрастанию",
    isSorted: 0,
    footerString: "Товар не сортирован никак",
    products: [
      {
        productName: "Товар01",
        productPrice: 11,
      },
      {
        productName: "Товар02",
        productPrice: 7,
      },
      {
        productName: "Товар03",
        productPrice: 3,
      },
      {
        productName: "Товар04",
        productPrice: 5,
      },
      {
        productName: "Товар05",
        productPrice: 1337,
      },
    ],
  },
  methods: {
    sorted: function () {
      this.isSorted = this.isSorted === 1 ? 2 : 1;
      this.sortedText = this.isSorted === 1 ? "по убыванию" : "по возрастанию";
      this.footerString = "";
    },
  },
  computed: {
    sortedProduct() {
      switch (this.isSorted) {
        case 1:
          return this.products.sort((d1, d2) =>
            d1.productPrice > d2.productPrice ? 1 : -1
          );
        case 2:
          return this.products.sort((d1, d2) =>
            d1.productPrice < d2.productPrice ? 1 : -1
          );
        default:
          return this.products;
      }
    },
  },
});

new Vue({
  el: ".root",
  data: {
    nameButton: "Перевернуть",
    lists: [
      "Элемент № 1 списка по-умолчанию",
      "Элемент № 2 списка по-умолчанию",
      "Элемент № 3 списка по-умолчанию",
    ],
  },
  methods: {
    reverseMessage: function () {
      this.nameButton = this.nameButton.split("").reverse().join("");
    },
    addListElement: function () {
      this.lists.push("Новый элемент списка");
    },
    remove: function (idx) {
      this.lists.splice(idx, 1);
    },
  },
});

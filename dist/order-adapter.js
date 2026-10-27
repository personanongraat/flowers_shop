// Replace these adapters with calls to your own server. Keep credentials on the server.
window.orderAdapter = {
  async submit(order) {
    if (SHOP.demo) return {id: 'LOCAL-' + Date.now().toString(36).toUpperCase(), demo:true};
    throw new Error('Приём заказов пока не подключён. Свяжитесь с мастерской по телефону.');
  },
  async feedback(answer) {
    if (SHOP.demo) return {demo:true};
    throw new Error('Отправка обратной связи пока не подключена.');
  }
};

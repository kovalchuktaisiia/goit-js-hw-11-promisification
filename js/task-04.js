
const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;
  
    setTimeout(() => {
      if (canFulfill) {
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
      }
  
      reject('Промис выполнился с ошибкой (отклонён, rejected)');
    }, 1000);
  });
  
  // promise.then(onFulfilled, onRejected);
  
  function onFulfilled(result) {
    console.log('onFulfilled -> onFulfilled');
    console.log(`✅ ${result}`);
  }
  
  function onRejected(error) {
    console.log('onRejected -> onRejected');
    console.log(`❌ ${error}`);
  }

  
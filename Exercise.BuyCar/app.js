const checkEnoughMoney = (money) => {
    return new Promise((resolve, reject) => {
        if (money > 10000) {
            resolve();
        } else {
            reject("do not enough money");
        }
    })
}

function buyCar(money) {
    checkEnoughMoney(money).then(() => {
        console.log(`can buy VF8`);
    })
    .catch((error) => {
        console.log(error);
    })
}

buyCar(10000);
buyCar(5000000);
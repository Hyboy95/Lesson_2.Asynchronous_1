const onMyBirthday = (isKayoSick, cakesQuantity) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(cakesQuantity)
            } else {
                reject (new Error('I am sad'))
            }
        }, 2000)
    })
}

function celebrateBirthday(isKayoSick, cakesQuantity) {
    onMyBirthday(isKayoSick, cakesQuantity)
        .then((result) => {
            console.log(`I have ${result} cakes`);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Party");
        });
}

celebrateBirthday(false, 5);
celebrateBirthday(true, 5);



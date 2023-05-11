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

onMyBirthday(false, 5)
    .then((result) => {
        console.log(`I have ${result} cakes`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Party");
    });

onMyBirthday(true, 5)
    .then((result) => {
        console.log(`I have ${result} cakes`);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Party");
    });

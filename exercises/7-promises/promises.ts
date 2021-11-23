function getData(): Promise<Array<string>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['item1', 'item2', 'item3'])
        }, 2000)
    })
}

getData()
    .then(res => console.log(res))
    .catch(err => console.error(err))
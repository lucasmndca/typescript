function getItems(): Promise<Array<string>> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['item1', 'item2', 'item3'])
        }, 2000)
    })
}

async function start(): Promise<void> {
    try {
        const data: Array<string> = await getItems()
        console.log('Operations was successful')  
        console.log(`Items: ${data.toString()}`)  
    } catch (error) {
        console.error(error)   
    }
}

// Starts
start()
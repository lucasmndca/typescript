console.log('Welcome! Please run "npm run" + one of the scripts below: ')

const scripts: Array<string> = [
    'start-types',
    'start-interfaces',
    'start-functions',
    'start-classes',
    'start-inheritance',
    'start-modules'
]

scripts.forEach(script => {
    console.log(`- ${script}`)
})
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const members = require('./api/members.json')

const apiFolderPath = 'api'

const rebuild = async () => {
  await Promise.all(members.map(c => {
    const filepath = path.join(__dirname, apiFolderPath, 'id-members', `${c.id}.json`)
    return writeFile(filepath, JSON.stringify(c, null, 2))
  }))
  .catch(console.error)

  console.log('build successful')
}

rebuild()

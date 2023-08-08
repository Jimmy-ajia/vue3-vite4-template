/**
 @description
 @author Wangtp
 @date Created in 16:24 2023/02/09
 */
const path = require('path')
const fs = require('fs')



function getCurrentVersion(){
  const vers = fs.readFileSync('.version.json')
  if (vers){
    return JSON.parse(vers.toString('utf-8'))

  }
  return null
}

function createNewVersion(version){

  if (version){
    const vers = version.split('.')

    const num = parseInt(vers.pop()) + 1

    vers.push(num)

    return vers.join('.')

  }
}

function updateVersion(newVersion, data){
  data.version = newVersion

  const date = new Date()
  data.updateTime = [date.toLocaleDateString(),date.toLocaleTimeString()].join(' ')

  const newVersionData = JSON.stringify(data)
  console.log(data);
  fs.writeFileSync('.version.json', newVersionData)

  return data
}




module.exports = function (){

  const versionData = getCurrentVersion()
  if (process.env.NODE_ENV === 'development'){

    return  versionData
  }else {
    const newVersion = createNewVersion(versionData.version)

    const newVersionData = updateVersion(newVersion, versionData)

    return newVersionData
  }

}

import { Storage } from 'aws-amplify'

export async function s3Upload(file) {
    //console.log(file)
    const filename = `${Date.now()}-${file.name}`
    //console.log(filename)
    //window.LOG_LEVEL = 'DEBUG';
    const stored = await Storage.put(filename, file, {
        contentType: file.type
    })
    //console.log(stored)
    return stored.key
}
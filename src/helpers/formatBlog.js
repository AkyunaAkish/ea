import validateURL from './validateURL'

export default function(blogDetails, formComponents) {
  return new Promise((resolve, reject) => {
    if(blogDetails.title.length < 1)  reject('Please include a blog title (Section #1)')
    if(blogDetails.thumbnail_url.length < 1) reject('Please include a thumbnail URL (Section #1)')
    if(!validateURL(blogDetails.thumbnail_url)) reject('Invalid thumbnail URL (Section #1)')
    if(formComponents.length < 1) reject('Please include at least one Section of content')

    const packagedData = {
      title: blogDetails.title,
      thumbnail_url: blogDetails.thumbnail_url,
      content: ''
    }

    formComponents.forEach((component, i) => {
      if(component.content.length < 1) {
        reject(`Section #${i+2} has no content, please delete it or add content to it`)
      } else {
        switch (component.type) {
          case 'Header':
          packagedData.content += `<h1>${component.content}</h1><br/>`
          break
          case 'Paragraph':
          packagedData.content += `<p>${component.content}</p><br/>`
          break
          case 'Link':
          if(!validateURL(component.content)) reject(`Invalid link URL (Section #${i+2})`)
          packagedData.content += `<a href='${component.content}' target='_blank'>${component.content}</a><br/>`
          break
          case 'Image':
          if(!validateURL(component.content)) reject(`Invalid image URL (Section #${i+2})`)
          packagedData.content += `<img src='${component.content}'/><br/>`
          break
        }
      }
    })

    resolve(packagedData)
  })
}

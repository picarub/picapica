

let urlrify = text => {
 let urlRegex = /(https?:\/\/[^\s]+)/g
 return text.replace(urlRegex, url => {
  return '<a href="' + url + '">' + url + '</a>'
 })
}

export { urlrify }
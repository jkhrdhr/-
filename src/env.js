let basURL

switch (process.env.NODE_ENV) {
      case 'development':
            basURL = '/a'
            break
      case 'production':
            basURL = '/b'
            break
      default:
            basURL = '/a'
            break
}

export default {
      basURL
}

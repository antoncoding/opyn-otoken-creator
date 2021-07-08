
module.exports = {
  'test/**/*.{js,jsx,ts,tsx,json,css,scss,md}': (filenames) => `prettier --write ${filenames.join(' ')}`,
}


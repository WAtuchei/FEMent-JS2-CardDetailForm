// import PropTypes from 'prop-types'

const nameHandler = (e) => {
   e.target.maxLength = 36
}
const cardNumHandler = (e) => {
   e.target.maxLength = 16
}
const cardExpireHandler = (e) => {
   e.target.maxLength = 2
}

const formHandler = (e) => {
   e.preventDefault()
}

// input Events
const emptyInput = (e) => {
   let inputLength = e.target.value.length
   
   if (inputLength == 0) {
      console.log('empty');
   }
}

export { emptyInput, nameHandler, cardNumHandler, cardExpireHandler, formHandler }
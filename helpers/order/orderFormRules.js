export default {
  orderNumber:{
    required: true,
    message: 'Please input your order number.',
    trigger: ['input', 'blur']
  },
  schoolName:{
    required: true,
    message: 'Please input the name of the school.',
    trigger: ['input', 'blur']
  },
  timestampCreation: {
    type: 'number',
    required: true,
    message: 'Please input the creation date of the order.',
    trigger: ['input', 'blur']
  },
  dueTimestamp: {
    type: 'number',
    required: true,
    message: 'Please input the due date of the order.',
    trigger: ['input', 'blur']
  },
  pieces: {
    type: 'number',
    required: true,
    message: 'Please input the number of pieces.',
    trigger: ['input', 'blur']
  },

  // stole: {
  //   pieces: {
  //     type: 'number',
  //     required: true,
  //     message: 'Please input the number of pieces are gonna be made it.',
  //     trigger: ['input', 'blur', 'change']
  //   },
  //   type: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  //   color: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur', 'change']
  //   },
  //   lettering: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  //   borderColor: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  //   letteringAndNumberColors: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  //   logoColor1: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  //   logoColor2: {
  //     required: true,
  //     message: 'Please input the type of fabric for the stole.',
  //     trigger: ['input', 'blur']
  //   },
  // }
}

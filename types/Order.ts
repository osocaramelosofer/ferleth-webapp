export interface Order{
  orderNumber: Number | String,
  schoolName: String,
  timestampCreation: Number,
  dueTimestamp: Number,

  stole: {
    pieces: Number | null,
    type: String,
    color: String,
    lettering: String,
    borderColor: String,
    letteringAndNumberColors: String,
    logoColor1: String,
    logoColor2: String,
  }
}

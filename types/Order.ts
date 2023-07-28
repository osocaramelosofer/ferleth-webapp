export interface Stole {
  type: String,
  color: String,
  lettering: String,
  borderColor: String,
  letteringAndNumberColors: String,
  logoColor1: String,
  logoColor2: String,
  orderUID: String | Number | null
}

export interface Order{
  orderNumber: Number | String,
  schoolName: String,
  timestampCreation: Number | null,
  dueTimestamp: Number | null,
  tags: String[] | null,

  pieces: Number | null,
  quality: 'low' | 'medium' | 'high',
  costPerUnit: Number | null,
  totalCost: Number | null
}

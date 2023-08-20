export interface Stole {
  type: String | null,
  color: String | null,
  lettering: String | null,
  borderColor: String | null,
  letteringAndNumberColors: String | null,
  logoColor1: String | null,
  logoColor2: String | null,
  orderUID: String | Number | null
}

export interface Order{
  orderNumber: Number | String,
  schoolName: String,
  timestampCreation: Number | String | null,
  dueTimestamp: Number | String | null,
  tags: String[] | null,

  pieces: Number | null,
  quality: 'low' | 'medium' | 'high',
  costPerUnit: Number | null,
  totalCost: Number | null,
  stoleUID: String | null
}


import {Order as OrderInterface} from "@/types/Order"
export class Order implements  OrderInterface {
  orderNumber: String
  schoolName: String
  timestampCreation:  Number
  dueTimestamp:  null
  tags: String[] | null
  pieces: Number | null
  quality: 'low' | 'medium' | 'high'
  costPerUnit: Number | null
  totalCost: Number | null
  stoleUID: String | null

  constructor(schoolName, orderNumber, timestampCreation, dueTimestamp, tags,
              pieces, quality, costPerUnit, totalCost, stoleUID) {
    this.schoolName = schoolName;
    this.orderNumber = orderNumber;
    this.timestampCreation = timestampCreation;
    this.dueTimestamp = dueTimestamp;
    this.tags = tags;
    this.pieces = pieces;
    this.quality = quality;
    this.costPerUnit = costPerUnit;
    this.totalCost = totalCost;
    this.stoleUID = stoleUID;
  }
  timestampToDate(timestamp: number): String{
      const date = new Date(timestamp);
      const day = String(date.getDate()).padStart(2,'0')
      const month = String(date.getMonth() + 1).padStart(2,'0')
      const year = String(date.getFullYear()).slice(-2)
      return `${day}/${month}/${year}`
  }
  hello(){
    console.log("hello")
  }
}

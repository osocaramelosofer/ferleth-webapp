import {StoleInterface} from "@/types/StoleInterface"
export class Stole implements  StoleInterface {
  type: String | null
  color: String | null
  lettering: String | null
  borderColor: String | null
  letteringAndNumberColors: String | null
  logoColor1: String | null
  logoColor2: String | null
  orderUID: String | Number | null
  stoleImageUID: String | null

  constructor(type, color, lettering, borderColor, letteringAndNumberColors,
              logoColor1, logoColor2, orderUID, stoleImageUID) {
    this.type = type;
    this.color = color;
    this.lettering = lettering;
    this.borderColor = borderColor;
    this.letteringAndNumberColors = letteringAndNumberColors;
    this.logoColor1 = logoColor1;
    this.logoColor2 = logoColor2;
    this.orderUID = orderUID;
    this.stoleImageUID = stoleImageUID;
  }
}

import {Stole} from "~/models/Stole";

export const stoleConverter = {
  toFirestore: (stole) => {
    return {
      type: stole.type,
      color: stole.color,
      lettering: stole.lettering,
      borderColor: stole.borderColor,
      letteringAndNumberColors: stole.letteringAndNumberColors,
      logoColor1: stole.logoColor1,
      logoColor2: stole.logoColor2,
      orderUID: stole.orderUID
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Stole(
      data.type,
      data.color,
      data.lettering,
      data.borderColor,
      data.letteringAndNumberColors,
      data.logoColor1,
      data.logoColor2,
      data.orderUID
  );
  }
};

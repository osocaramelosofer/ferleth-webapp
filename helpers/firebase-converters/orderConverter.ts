import {Order} from "~/models/Order";

export const orderConverter = {
  toFirestore: (order) => {
    return {
      schoolName: order.schoolName,
      orderNumber: order.orderNumber,
      timestampCreation: order.timestampCreation,
      dueTimestamp: order.dueTimestamp,
      tags: order.tags,
      pieces: order.pieces,
      quality: order.quality,
      costPerUnit: order.costPerUnit,
      totalCost: order.totalCost,
      stoleUID: order.stoleUID
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Order(
      data.schoolName,
      data.orderNumber,
      data.timestampCreation,
      data.dueTimestamp,
      data.tags,
      data.pieces,
      data.quality,
      data.costPerUnit,
      data.totalCost,
      data.stoleUID,
    );
  }
};

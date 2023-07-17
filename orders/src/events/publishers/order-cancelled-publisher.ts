import { Subjects, Publisher, OrderCancelledEvent } from "@eventick/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

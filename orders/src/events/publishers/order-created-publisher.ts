import { Publisher, OrderCreatedEvent, Subjects } from "@eventick/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

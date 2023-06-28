import { Publisher, Subjects, TicketUpdatedEvent } from "@eventick/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

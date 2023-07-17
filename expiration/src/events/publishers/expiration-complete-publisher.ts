import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@eventick/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

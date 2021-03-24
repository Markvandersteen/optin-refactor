const existingStreams = ["Nieuwsbrief", "Acties", "SpelMails"];

type PostSubscriptionRequest = {
  emailAddres: string;
  clientIp: string;
  registrant: string;
  referenceUrl: string;
  lottery: string;
  streams: Array<String>;
  registrationNumber?: string;
};

class OptinService {
  constructor() {}

  placeOptin(
    lottery: string,
    streams: string,
    emailAddress: string,
    clientIp: string,
    registrant: string,
    referenceUrl: string,
    registrationNumber: string
  ) {}
}

class OptinHandler {
  private service: OptinService;
  constructor(service) {
    this.service = service;
  }

  public postSubScription(req: PostSubscriptionRequest) {
    console.log(req);
  }

  getSubScription() {}

  retractSubscription() {}
}
const main = function() {
  const inputs = [];
  const MAIN_LOTTERY = "npl";

  inputs["vl"] = ["NieuwsBrief", "Acties"];
  const handler = new OptinHandler(new OptinService());

  Object.keys(inputs).forEach(lottery => {
    handler.postSubScription({
      emailAddres: "mark@mark.nl",
      clientIp: "127.0.0.1",
      registrant: "some registration",
      referenceUrl: "/foobar",
      lottery,
      registrationNumber: "dsvofne8420fnsd",
      streams: inputs[lottery]
    });
  });
};

main();

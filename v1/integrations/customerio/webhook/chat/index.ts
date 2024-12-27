import { NAP_DEV_BASE_URL } from "../../../../../base.ts";

const url = NAP_DEV_BASE_URL;
url.pathname = "/v1/integrations/customerio/webhook/chat";

console.log(url);
const body = {
  // id: "6ab3bc9ecb3182af135f015e7fbf3c19", // pat transcarent id
  // id: "f083d025330e9c22eccf129e578bf91e", // t1
  // id: "fc126daf22571ffa6b76330443d149ae", // p.sobik
  id: "fd68348b7a109e1ebeabb6b9652c3a02", // g.b
  // id: "206fc1814672fc94e87d074f36724d1b", // hwj
  message: `
<div type='9am:video' src='https://vimeo.com/1041195253/e606fceee7'></div><p>{{snippets.greeting}}<p> Welcome to 9amHealth!
`,
};

// <a href="https://app.join9am.com/app/chat?showFirstStep=false&popup=rxDietNutritionProgram">rxdiet Click here full</a>
// <a href="http://app/chat?showFirstStep=false&popup=rxDietNutritionProgram">rxdiet popup From zendesk</a>
// <a href="http://app/profile">profile no query</a>
// <a href="https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B">Apero Link</a>
// in text <a href="http://app/profile">profile no query</a> actial link.
// bold link: <b>https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#inBold</b>
// https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#alone
// some text, then a link: https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#alt=InTextAppointment and some more text
// some text, then a link: https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#alt=WithPuncAppointment.
// Custom Text https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#alt=Custom%20Text%20Spaced
// <em>two links in a string https://google.com and https://9am-health-test.aperohealth.com/guest/schedule?appointmentTypeId=appt_t_a40ccee4&lookup=UWC399B#alt=WithPuncAppointment.</em>
//
// file: https://api.dev.join9am.com/v1/files/6f720895-badc-415e-a862-dc249bec7ae8
// link to file: <a href="https://api.dev.join9am.com/v1/files/6f720895-badc-415e-a862-dc249bec7ae8">file</a>

class Rq {
  url: URL;
  method: string;
  headers: Headers = new Headers({
    "Content-Type": "application/json",
  });
  body: string;

  constructor(url: URL, method: string, body: string) {
    this.url = url;
    this.method = method;
    this.body = body;
  }
}

const fn = async () => {
  try {
    const r = new Rq(url, "POST", JSON.stringify(body));
    const res = await fetch(r.url, {
      method: r.method,
      headers: r.headers,
      body: r.body,
    });
    console.log(res);
    const response = await res.text();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

fn();

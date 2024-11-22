import { NAP_DEV_BASE_URL } from "../../../../../base.ts";

const url = NAP_DEV_BASE_URL;
url.pathname = "/v1/integrations/customerio/webhook/chat";

console.log(url);
const body = {
  id: "e50b5ac3dc43caa5c88718762c0a74f7",
  message: `
><p>Thanks for sending in your reading! A blood pressure reading of less than 80/40 indicates that you need immediate medical attention, so we need to take a few more steps:</p><p>Wait about five minutes and take your blood pressure reading again. Here are some tips on taking your blood pressure readings at home <a href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home" target="_blank" class="css-1h5x3dy">Monitoring Your Blood Pressure at Home.</a></p><p><b>2. Please call 911 if your second blood pressure reading is also less than 80/40 AND you have any of the following symptoms</b>, as you may be at risk for shock (when not enough oxygen is going to your brain, which could be life-threatening.)</p><ul><li>Dizziness/lightheadedness/fainting</li><li>Severe nausea</li><li>Blurry vision</li><li>Cold, pale and clammy skin</li><li>Lack of concentration</li><li>Extreme thirst or dehydration</li></ul> <p>OR</p><p><b>Please visit an urgent care clinic (or emergency care if it's after hours) if your blood pressure reading is less than 80/40, even if you have no symptoms</b>. A very low blood pressure reading puts you at risk of shock (when not enough oxygen is going to your brain, which could be life-threatening), so it's important to raise your blood pressure reading as soon as possible.</p><p>3. A 9am Care Team member will reach out to you as soon as possible to assist you in getting care and review blood pressure treatment options, but we cannot provide urgent or emergency care, so it is important that you seek medical attention according to Step #2.</p>
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

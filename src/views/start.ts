import m from "mithril";
import { App } from "../gifcap";
import Button from "../components/button";
import View from "../components/view";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

interface StartViewAttrs {
  readonly app: App;
}

export default class StartView implements m.ClassComponent<StartViewAttrs> {
  private readonly app: App;

  constructor(vnode: m.CVnode<StartViewAttrs>) {
    this.app = vnode.attrs.app;
  }

  view() {
    return m(View, [
      m("p", "יצירת קובצי GIF מונפשים מהקלטת מסך."),
      m("p", "פועל מקומית בדפדפן שלך, אף נתון לא נשלח לשרת."),
      isMobile ? m("p", "מצטערים, מכשירים ניידים אינם תומכים בהקלטת מסך.") : undefined,
      isMobile
        ? undefined
        : m(Button, {
            label: "התחל הקלטה",
            icon: "play",
            onclick: () => this.app.startRecording(),
            primary: true,
          }),
    ]);
  }
}

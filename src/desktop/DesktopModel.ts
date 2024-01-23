import {HelloForm} from "../greeting/HelloForm";
import {Desktop} from "./Desktop";

export default () => ({
  id: 'helloworld.Desktop',
  objectType: Desktop,
  navigationHandleVisible: false,
  navigationVisible: false,
  headerVisible: false,
  views: [
    {
      id: 'helloworld.HelloForm',
      objectType: HelloForm
    }
  ]
});

export type DesktopWidgetMap = {
  'helloworld.HelloForm': HelloForm;
  'helloworld.Desktop': Desktop;
};

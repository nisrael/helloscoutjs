import {Desktop as ScoutDesktop, models, DesktopModel as ScoutDesktopModel} from '@eclipse-scout/core';
import DesktopModel, {DesktopWidgetMap} from './DesktopModel';

export class Desktop extends ScoutDesktop {
  declare widgetMap: DesktopWidgetMap;

  constructor() {
    super();
  }

  protected override _jsonModel(): ScoutDesktopModel {
    return models.get(DesktopModel);
  }
}

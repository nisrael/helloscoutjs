import {Form, models, MessageBoxes, InitModelOf, WidgetModel} from '@eclipse-scout/core';
import HelloFormModel, {HelloFormWidgetMap} from './HelloFormModel';

export class HelloForm extends Form {
  declare widgetMap: HelloFormWidgetMap;

  constructor() {
    super();
  }

  protected override _jsonModel(): WidgetModel {
    return models.get(HelloFormModel)
  }

  protected override _init(model: InitModelOf<this>) {
    super._init(model);
    this.widget('GreetButton').on('click', event => {
      let name = this.widget('NameField').value || 'stranger';
      MessageBoxes.openOk(this.session.desktop, `Hello ${name}!`);
    });
  }
}

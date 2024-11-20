import type { Schema, Struct } from '@strapi/strapi';

export interface PageItemEcossistema extends Struct.ComponentSchema {
  collectionName: 'components_page_item_ecossistemas';
  info: {
    displayName: 'ItemEcossistema';
    icon: 'chess-board';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    fullDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageLevel extends Struct.ComponentSchema {
  collectionName: 'components_page_levels';
  info: {
    displayName: 'Level';
    icon: 'arrow-circle-up';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    subtitle: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.item-ecossistema': PageItemEcossistema;
      'page.level': PageLevel;
    }
  }
}

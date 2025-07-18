import type { Schema, Struct } from '@strapi/strapi';

export interface IncludesIncludes extends Struct.ComponentSchema {
  collectionName: 'components_includes_includes';
  info: {
    displayName: 'includes';
    icon: 'earth';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface NotIncludesNotIncludes extends Struct.ComponentSchema {
  collectionName: 'components_not_includes_not_includes';
  info: {
    displayName: 'not_includes';
    icon: 'fileError';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface TravelItineraryDay extends Struct.ComponentSchema {
  collectionName: 'components_travel_itinerary_days';
  info: {
    displayName: 'Itinerary_day';
    icon: 'calendar';
  };
  attributes: {
    day_number: Schema.Attribute.Integer & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    includes: Schema.Attribute.Component<'includes.includes', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'includes.includes': IncludesIncludes;
      'not-includes.not-includes': NotIncludesNotIncludes;
      'travel.itinerary-day': TravelItineraryDay;
    }
  }
}

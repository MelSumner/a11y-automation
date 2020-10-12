import JSONAPISerializer from '@ember-data/serializer/json-api';

// This serializer must exist because of https://deprecations.emberjs.com/ember-data/v3.x/#toc_ember-data:default-serializers

export default class ApplicationSerializer extends JSONAPISerializer {
}
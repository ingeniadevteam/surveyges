Schemas = new Mongo.Collection("schemas");

Schem = new SimpleSchema({
    survey: {
        type: String,
        label: "id"
    },
    schema: {
        type: Object,
        label: "schema"
    }
});

Schemas.attachSchema(Schem);

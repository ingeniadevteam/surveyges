Schemas = new Mongo.Collection("schemas");

Schem = new SimpleSchema({
    survey: {
        type: String,
        label: "id"
    },
    schema: {
        type: String,
        label: "schema"
    }
});

Schemas.attachSchema(Schem);

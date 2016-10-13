Prueba = new SimpleSchema({
  question1:{
    type: "String",
    allowedValues: ["UNA RESPUESTA","DOS RESPUESTA","TRES RESPUESTA"],
    autoform: {
      options:[
        {label:"UNA RESPUESTA",value:"UNA RESPUESTA"},
        {label:"DOS RESPUESTA",value:"DOS RESPUESTA"},
        {label:"TRES RESPUESTA",value:"TRES RESPUESTA"}
      ]
    }
  }
});

import jsonSchemaGenerator from "json-schema-generator";
import converter from "@openapi-contrib/json-schema-to-openapi-schema";

const json = {
  status: true,
  message: "user logged in successfully",
  data: {
    id: "08c4b97f-a626-44c0-af68-be271c4d55a6 ",
    email: "declanrice@gmail.com",
    is_email_verified: false,
    first_name: "declan",
    last_name: "rice",
    organisation_name: "rice enterprises",
    organisation_id: "e4c83643-a9af-4e36-899e-830d9c7d1018 ",
    industry: "sports",
    account_type: "organisational",
  },
};

// TODO:TODO: you can even add the xclipboard into the pipeline so you can
// just get your value out
// console.log(JSON.stringify(json));
const jsonSchema = jsonSchemaGenerator(json);

// console.log({ jsonSchema });
(async () => {
  const openApiSchema = await converter(jsonSchema);
  // console.log({ openApiSchema });
  // console.log({ stringify: JSON.stringify(openApiSchema) });
  console.log(JSON.stringify(openApiSchema));
})();


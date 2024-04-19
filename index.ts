import jsonSchemaGenerator from "json-schema-generator";
import converter from "@openapi-contrib/json-schema-to-openapi-schema";

const requestPayload = {
  customer: {
    id: "05630ce0-3b07-4e2b-8e1e-5bee2734fce1",
    name: "Jane",
  },
};

const responseJson = {
  status: true,
  message: "success",
  data: {
    limit: 20,
    next: "8997674d-11a3-4387-b22d-047343241c9a",
    customers: [
      { customer_id: "033f68f8-44e4-4898-a982-2cfc00b91421", count: 6 },
      { customer_id: "aedb3832-0447-4266-ba09-0cba3dac9d6f", count: 4 },
      { customer_id: "8997674d-11a3-4387-b22d-047343241c9a", count: 1 },
    ],
  },
};

// TODO:TODO: you can even add the xclipboard into the pipeline so you can
// just get your value out
//
// console.log(JSON.stringify(json));
// const jsonToBuild = requestPayload;
const jsonToBuild = responseJson;
const jsonSchema = jsonSchemaGenerator(jsonToBuild);

// console.log({ jsonSchema });
(async () => {
  const openApiSchema = await converter(jsonSchema);
  // console.log({ openApiSchema });
  // console.log({ stringify: JSON.stringify(openApiSchema) });
  console.log(JSON.stringify(openApiSchema));
})();


import jsonSchemaGenerator from "json-schema-generator";
import converter from "@openapi-contrib/json-schema-to-openapi-schema";

// source: https://jonlinnell.co.uk/articles/node-stdin
async function main() {
  let data = "";
  try {
    for await (const chunk of process.stdin) data += chunk;

    const jsonToBuild = JSON.parse(data);
    const jsonSchema = jsonSchemaGenerator(jsonToBuild);

    (async () => {
      const openApiSchema = await converter(jsonSchema);
      console.log(JSON.stringify(openApiSchema));
    })();
  } catch (error) {
    console.log("error processing stdin");
  }
}

main();

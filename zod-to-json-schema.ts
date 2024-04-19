import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const schemaToCreate = 
  z.object({
    name: z.string().min(5),
    someUnion: z.union([z.number(), z.boolean()]),
  })
  .describe("My neat object schema");

const jsonSchema = zodToJsonSchema(schemaToCreate, "schemaToCreate");

console.log(JSON.stringify(jsonSchema));

# JSON to JSON Schema
npx ts-node index.ts | jq | xclip -in -selection clipboard


# Typescript to JSON Schema
npx ts-json-schema-generator --path 'types.ts' --type 'TypeToConvert' | jq '.definitions.TypeToConvert' | xclip -in -selection clipboard


# Zod Schema to JSON Schema
npx ts-node zod-to-json-schema.ts  | jq '.definitions.schemaToCreate' | xclip -in -selection clipboard


# Go struct to JSON 
go run go-struct-to-json/main.go | jq

# Go struct to JSON Schema
go run go-struct-to-json/main.go | npx ts-node json-to-json-schema.ts  |jq

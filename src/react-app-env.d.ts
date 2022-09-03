declare module "babel-plugin-relay/macro" {
  export { graphql as default } from "react-relay";
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// 출처: // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35707

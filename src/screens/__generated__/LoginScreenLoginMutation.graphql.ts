/**
 * @generated SignedSource<<10c58330f03243ee754b42ce938f1981>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LogInInput = {
  clientMutationId?: string | null;
  password: string;
  username: string;
};
export type LoginScreenLoginMutation$variables = {
  input: LogInInput;
};
export type LoginScreenLoginMutation$data = {
  readonly logIn: {
    readonly viewer: {
      readonly sessionToken: string;
      readonly user: {
        readonly email: string | null;
        readonly username: string | null;
      };
    };
  } | null;
};
export type LoginScreenLoginMutation = {
  response: LoginScreenLoginMutation$data;
  variables: LoginScreenLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sessionToken",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginScreenLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LogInPayload",
        "kind": "LinkedField",
        "name": "logIn",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginScreenLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LogInPayload",
        "kind": "LinkedField",
        "name": "logIn",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2d248b2964e261b387a6ca2ac33854c8",
    "id": null,
    "metadata": {},
    "name": "LoginScreenLoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginScreenLoginMutation(\n  $input: LogInInput!\n) {\n  logIn(input: $input) {\n    viewer {\n      sessionToken\n      user {\n        username\n        email\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "50a18acda88529885c80c4fa120794bf";

export default node;

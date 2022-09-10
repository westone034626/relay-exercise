/**
 * @generated SignedSource<<7fbd3d3b31e956b482796cd668d3899f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthProviderLogOutMutation$variables = {};
export type AuthProviderLogOutMutation$data = {
  readonly logOut: {
    readonly clientMutationId: string | null;
    readonly ok: boolean;
  } | null;
};
export type AuthProviderLogOutMutation = {
  response: AuthProviderLogOutMutation$data;
  variables: AuthProviderLogOutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "input",
        "value": {
          "clientMutationId": "logOut"
        }
      }
    ],
    "concreteType": "LogOutPayload",
    "kind": "LinkedField",
    "name": "logOut",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      }
    ],
    "storageKey": "logOut(input:{\"clientMutationId\":\"logOut\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthProviderLogOutMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthProviderLogOutMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "61bc9d1938f045c273b516f3a62e78b2",
    "id": null,
    "metadata": {},
    "name": "AuthProviderLogOutMutation",
    "operationKind": "mutation",
    "text": "mutation AuthProviderLogOutMutation {\n  logOut(input: {clientMutationId: \"logOut\"}) {\n    clientMutationId\n    ok\n  }\n}\n"
  }
};
})();

(node as any).hash = "72212381608507a94494359e2ee13913";

export default node;

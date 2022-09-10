/**
 * @generated SignedSource<<a03bf8c7d0a0713ee3bb77fd224cac7b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AuthProviderViewerQuery$variables = {
  noSessionId: boolean;
};
export type AuthProviderViewerQuery$data = {
  readonly viewer?: {
    readonly sessionToken: string;
    readonly user: {
      readonly email: string | null;
      readonly username: string | null;
    };
  };
};
export type AuthProviderViewerQuery = {
  response: AuthProviderViewerQuery$data;
  variables: AuthProviderViewerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "noSessionId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sessionToken",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v3 = {
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
    "name": "AuthProviderViewerQuery",
    "selections": [
      {
        "condition": "noSessionId",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthProviderViewerQuery",
    "selections": [
      {
        "condition": "noSessionId",
        "kind": "Condition",
        "passingValue": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Viewer",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
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
        ]
      }
    ]
  },
  "params": {
    "cacheID": "1088a7b71094be7b7dfe521e23eeed58",
    "id": null,
    "metadata": {},
    "name": "AuthProviderViewerQuery",
    "operationKind": "query",
    "text": "query AuthProviderViewerQuery(\n  $noSessionId: Boolean!\n) {\n  viewer @skip(if: $noSessionId) {\n    sessionToken\n    user {\n      username\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "675c67a6e7a9f716ab0ac69f3d9150fc";

export default node;

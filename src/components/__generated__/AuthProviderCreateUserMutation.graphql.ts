/**
 * @generated SignedSource<<20fb90adbb1c4bcb3ccb933e4a397672>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserFieldsInput = {
  ACL?: ACLInput | null;
  authData?: any | null;
  email?: string | null;
  emailVerified?: boolean | null;
  password: string;
  username: string;
};
export type ACLInput = {
  public?: PublicACLInput | null;
  roles?: ReadonlyArray<RoleACLInput> | null;
  users?: ReadonlyArray<UserACLInput> | null;
};
export type UserACLInput = {
  read: boolean;
  userId: string;
  write: boolean;
};
export type RoleACLInput = {
  read: boolean;
  roleName: string;
  write: boolean;
};
export type PublicACLInput = {
  read: boolean;
  write: boolean;
};
export type AuthProviderCreateUserMutation$variables = {
  fields: CreateUserFieldsInput;
};
export type AuthProviderCreateUserMutation$data = {
  readonly signUp: {
    readonly viewer: {
      readonly sessionToken: string;
      readonly user: {
        readonly email: string | null;
        readonly username: string | null;
      };
    };
  } | null;
};
export type AuthProviderCreateUserMutation = {
  response: AuthProviderCreateUserMutation$data;
  variables: AuthProviderCreateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fields"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "fields",
        "variableName": "fields"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
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
    "name": "AuthProviderCreateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SignUpPayload",
        "kind": "LinkedField",
        "name": "signUp",
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
    "name": "AuthProviderCreateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SignUpPayload",
        "kind": "LinkedField",
        "name": "signUp",
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
    "cacheID": "fcf26c61f591db8a0a88c9d4ea625226",
    "id": null,
    "metadata": {},
    "name": "AuthProviderCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation AuthProviderCreateUserMutation(\n  $fields: CreateUserFieldsInput!\n) {\n  signUp(input: {fields: $fields}) {\n    viewer {\n      sessionToken\n      user {\n        username\n        email\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ccc3a47dc35c393ed35d4ad6de739da";

export default node;

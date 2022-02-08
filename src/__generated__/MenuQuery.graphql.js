/**
 * @generated SignedSource<<2f6795624b8f7d15697ea5d616eeaab5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type MenuSectionCiabattas$fragmentType = any;
type MenuSectionCoffee$fragmentType = any;
type MenuSectionKochkadas$fragmentType = any;
type MenuSectionMilkshake$fragmentType = any;
type MenuSectionSpecialities$fragmentType = any;
type MenuSectionTea$fragmentType = any;
export type SupportedLocale = "en_US" | "es_MX" | "%future added value";
export type MenuQuery$variables = {|
  clientLocale: SupportedLocale,
|};
export type MenuQuery$data = {|
  +menu: {|
    +$fragmentSpreads: MenuSectionCoffee$fragmentType & MenuSectionTea$fragmentType & MenuSectionMilkshake$fragmentType & MenuSectionSpecialities$fragmentType & MenuSectionKochkadas$fragmentType & MenuSectionCiabattas$fragmentType,
  |},
|};
export type MenuQuery = {|
  variables: MenuQuery$variables,
  response: MenuQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "clientLocale"
  }
],
v1 = {
  "kind": "Variable",
  "name": "clientLocale",
  "variableName": "clientLocale"
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "description",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Price",
    "kind": "LinkedField",
    "name": "price",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "unitAmount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "unitAmountCurrency",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MenuQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MenuQuery",
        "kind": "LinkedField",
        "name": "menu",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionCoffee"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionTea"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionMilkshake"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionSpecialities"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionKochkadas"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MenuSectionCiabattas"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MenuQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MenuQuery",
        "kind": "LinkedField",
        "name": "menu",
        "plural": false,
        "selections": [
          {
            "alias": "coffeeMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "COFFEE"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": "teaMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "TEA"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": "milkshakesMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "MILKSHAKES"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": "specialitiesMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "SPECIALITIES"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": "kochkadasMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "KOCHKADAS"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": "ciabattasMenu",
            "args": [
              (v1/*: any*/),
              {
                "kind": "Literal",
                "name": "section",
                "value": "CIABATTAS"
              }
            ],
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "menu",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23eec948730442133e7becab729a5be3",
    "id": null,
    "metadata": {},
    "name": "MenuQuery",
    "operationKind": "query",
    "text": "query MenuQuery(\n  $clientLocale: SupportedLocale!\n) {\n  menu {\n    ...MenuSectionCoffee\n    ...MenuSectionTea\n    ...MenuSectionMilkshake\n    ...MenuSectionSpecialities\n    ...MenuSectionKochkadas\n    ...MenuSectionCiabattas\n  }\n}\n\nfragment MenuRow on Product {\n  name\n  description\n  price {\n    unitAmount\n    unitAmountCurrency\n  }\n}\n\nfragment MenuSectionCiabattas on MenuQuery {\n  ciabattasMenu: menu(clientLocale: $clientLocale, section: CIABATTAS) {\n    id\n    ...MenuRow\n  }\n}\n\nfragment MenuSectionCoffee on MenuQuery {\n  coffeeMenu: menu(clientLocale: $clientLocale, section: COFFEE) {\n    id\n    ...MenuRow\n  }\n}\n\nfragment MenuSectionKochkadas on MenuQuery {\n  kochkadasMenu: menu(clientLocale: $clientLocale, section: KOCHKADAS) {\n    id\n    ...MenuRow\n  }\n}\n\nfragment MenuSectionMilkshake on MenuQuery {\n  milkshakesMenu: menu(clientLocale: $clientLocale, section: MILKSHAKES) {\n    id\n    ...MenuRow\n  }\n}\n\nfragment MenuSectionSpecialities on MenuQuery {\n  specialitiesMenu: menu(clientLocale: $clientLocale, section: SPECIALITIES) {\n    id\n    ...MenuRow\n  }\n}\n\nfragment MenuSectionTea on MenuQuery {\n  teaMenu: menu(clientLocale: $clientLocale, section: TEA) {\n    id\n    ...MenuRow\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "d7cab30a0353402e8d96353989aedcac";
}

module.exports = ((node/*: any*/)/*: Query<
  MenuQuery$variables,
  MenuQuery$data,
>*/);

/**
 * @generated SignedSource<<a5c532cea94c534438f2b2c6b9b129f8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type MenuRow$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type MenuSectionTea$fragmentType: FragmentType;
export type MenuSectionTea$ref = MenuSectionTea$fragmentType;
export type MenuSectionTea$data = {|
  +teaMenu: $ReadOnlyArray<{|
    +id: string,
    +$fragmentSpreads: MenuRow$fragmentType,
  |}>,
  +$fragmentType: MenuSectionTea$fragmentType,
|};
export type MenuSectionTea = MenuSectionTea$data;
export type MenuSectionTea$key = {
  +$data?: MenuSectionTea$data,
  +$fragmentSpreads: MenuSectionTea$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "clientLocale"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MenuSectionTea",
  "selections": [
    {
      "alias": "teaMenu",
      "args": [
        {
          "kind": "Variable",
          "name": "clientLocale",
          "variableName": "clientLocale"
        },
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MenuRow"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MenuQuery",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "ba30927cc521f851bada3d3e03b5f41a";
}

module.exports = ((node/*: any*/)/*: Fragment<
  MenuSectionTea$fragmentType,
  MenuSectionTea$data,
>*/);

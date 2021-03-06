/**
 * @generated SignedSource<<b4782f6ddbf305001a96edec1b38507f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type MenuRow$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type MenuSectionSpecialities$fragmentType: FragmentType;
export type MenuSectionSpecialities$data = {|
  +specialitiesMenu: $ReadOnlyArray<{|
    +id: string,
    +$fragmentSpreads: MenuRow$fragmentType,
  |}>,
  +$fragmentType: MenuSectionSpecialities$fragmentType,
|};
export type MenuSectionSpecialities$key = {
  +$data?: MenuSectionSpecialities$data,
  +$fragmentSpreads: MenuSectionSpecialities$fragmentType,
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
  "name": "MenuSectionSpecialities",
  "selections": [
    {
      "alias": "specialitiesMenu",
      "args": [
        {
          "kind": "Variable",
          "name": "clientLocale",
          "variableName": "clientLocale"
        },
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
  (node/*: any*/).hash = "588f863b6281b508dc66297669402400";
}

module.exports = ((node/*: any*/)/*: Fragment<
  MenuSectionSpecialities$fragmentType,
  MenuSectionSpecialities$data,
>*/);

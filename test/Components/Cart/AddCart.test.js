import React from 'react';
import AddCart from '../../../components/Cart/AddCart'
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

test("Add to cart click ", () => {

  const component = renderer.create(
        <AddCart></AddCart>,
      );

    let uiTree = component.toJSON();
    expect(uiTree.type).toBe("div");
    console.log(uiTree);

})
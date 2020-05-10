import React from 'react';
import Post from './index';
import renderer from 'react-test-renderer';


test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Post post={{title: 'title'}}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
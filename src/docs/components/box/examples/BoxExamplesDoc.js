// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../../components/ExamplesDoc';
import NavAnchor from '../../../../components/NavAnchor';

import Box1 from './Box1';
import Box1m from './Box1m';
import Box2 from './Box2';
import Box2m from './Box2m';
import Box3 from './Box3';
import Box3m from './Box3m';
import Box4 from './Box4';
import Box4m from './Box4m';

export default class BoxExamplesDoc extends ExamplesDoc {};

BoxExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/box">Box</NavAnchor>,
  examples: [
    { label: 'Row fixed', component: Box1 },
    { label: 'Row fixed with margin', component: Box1m },
    { label: 'Row flexed', component: Box2 },
    { label: 'Row flexed with margin', component: Box2m },
    { label: 'Column', component: Box3 },
    { label: 'Column with margin', component: Box3m },
    { label: 'Grid', component: Box4 },
    { label: 'Grid with margin', component: Box4m }
  ],
  title: 'Examples'
};

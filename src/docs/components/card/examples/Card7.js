// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import Example from '../../../Example';

export default class Card7 extends Component {

  render () {
    return (
      <Example code={
        <Card direction="row" label="Featured Post" colorIndex=""
          heading="The Key Steps to Reducing Software Spend"
          description="HPE Software Licensing and Management Solutions can help
            you optimize your software investments through control of complex
            negotiations and renewal processes"
          link={<Anchor href="" label="Learn More" icon={<LinkNextIcon />} />}
        />
      } />
    );
  }
};

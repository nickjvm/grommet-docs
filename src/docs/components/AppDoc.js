// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

App.displayName = 'App';

const USAGE =
`import App from 'grommet/components/App';
<App>
  {contents}
</App>`;

export default class AppDoc extends Component {

  render () {

    return (
      <DocsArticle title="App" colorIndex="neutral-3">

        <section>
          <p>This is the primary Grommet container outer. Typically it will
            either contain a <NavAnchor path="/docs/split">Split</NavAnchor> or
            an <NavAnchor path="/docs/article">Article</NavAnchor>.</p>

          <Box pad={{ between: 'large' }} direction="row">
            <Box direction="row" colorIndex="light-2" basis="medium">
              <Box basis="1/3" pad="large"
                colorIndex="grey-4" justify="center" align="center">
                Navigation
              </Box>
              <Box basis="2/3" pad="large"
                justify="center" align="center">
                Main content
              </Box>
            </Box>
            <Article colorIndex="light-2" basis="medium">
              <Header colorIndex="grey-4" justify="center" align="center">
                Header
              </Header>
              <Section basis="medium" pad="large"
                justify="center" align="center">
                Sections
              </Section>
              <Footer colorIndex="grey-4" justify="center" align="center">
                Footer
              </Footer>
            </Article>
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>centered  true|false</code></dt>
            <dd>Whether to centralize or not the content inside the container.
              Defaults to true.</dd>
            <dt><code>inline    true|false</code></dt>
            <dd> Whether o render the app relative to the container (inline) or
              to the browser window. Defaults to false.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Markdown from 'grommet/components/Markdown';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Markdown.displayName = 'Markdown';

const USAGE =
`import Markdown from 'grommet/components/Markdown';
<Markdown content={...} />`;

export default class MarkdownDoc extends Component {

  render () {
    return (
      <DocsArticle title="Markdown" colorIndex="neutral-4">

        <section>
          <p>Render <a href="http://daringfireball.net/projects/markdown/">
            markdown</a> content
            using Grommet components.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>components   {'{Component: { props: { } }}'}</code></dt>
            <dd>Set properties for components used in the markdown
              rendering. Possible components are 'a', 'h1-h6',
              'img', and 'p'</dd>
            <dt><code>content      {'{markdown text}'}</code></dt>
            <dd>The markdown text to render.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/markdown/examples`}>
            Markdown Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};

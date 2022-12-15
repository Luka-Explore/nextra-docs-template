import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: () => (
    <>
      <img
        src="/logo.jpg"
        height="120"
        width="120"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Internship Workshop <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),

  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: "https://vercel.com/templates/next.js/documentation-starter-kit",
/*
  editLink: { 
    component: <a href="https://nextra.site">
  </a>,
  },
  */
  footer: {
    text: ' © ExploreAI Academy',
  },
  darkMode: false,
}


export default config


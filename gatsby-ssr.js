import React from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"
import { renderToString } from "react-dom/server"
import { extractCritical } from "emotion-server"

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet()

  const app = () => (
    <StyleSheetManager sheet={sheet.instance}>
      {bodyComponent}
    </StyleSheetManager>
  )

  const { html, ids, css } = extractCritical(renderToString(bodyComponent))

  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />
  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
  )

  replaceBodyHTMLString(html)
  setHeadComponents([criticalIds, criticalStyle, sheet.getStyleElement()])

  return
}
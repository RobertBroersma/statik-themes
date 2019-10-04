const crypto = require('crypto')

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  if (node.internal.type === `ProductsJson`) {
    const parent = getNode(node.parent)
    createNode({
      ...node,
      // Required fields.
      id: createNodeId(`${node.id} >>> Product`),
      parent: node.id,
      children: [],
      internal: {
        type: `Product`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`),
        content: JSON.stringify(node),
        description: `Blog Posts`,
      },
    })

    createParentChildLink({
      parent: parent,
      child: node,
    })
  }

  if (node.internal.type === `SettingsJson`) {
    const parent = getNode(node.parent)
    createNode({
      ...node,
      // Required fields.
      id: createNodeId(`${node.id} >>> ShopSettings`),
      parent: node.id,
      children: [],
      internal: {
        type: `ShopSettings`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`),
        content: JSON.stringify(node),
        description: `Shop Settings`,
      },
    })

    createParentChildLink({
      parent: parent,
      child: node,
    })
  }
}

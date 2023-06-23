/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLolly = /* GraphQL */ `
  query GetLolly($lollyPath: String!) {
    getLolly(lollyPath: $lollyPath) {
      flavourTop
      flavourMiddle
      flavourBottom
      recipientName
      message
      sendersName
      lollyPath
      createdAt
      updatedAt
    }
  }
`;
export const listLollies = /* GraphQL */ `
  query ListLollies(
    $lollyPath: String
    $filter: ModelLollyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLollies(
      lollyPath: $lollyPath
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        flavourTop
        flavourMiddle
        flavourBottom
        recipientName
        message
        sendersName
        lollyPath
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

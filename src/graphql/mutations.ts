/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLolly = /* GraphQL */ `
  mutation CreateLolly(
    $input: CreateLollyInput!
    $condition: ModelLollyConditionInput
  ) {
    createLolly(input: $input, condition: $condition) {
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
export const updateLolly = /* GraphQL */ `
  mutation UpdateLolly(
    $input: UpdateLollyInput!
    $condition: ModelLollyConditionInput
  ) {
    updateLolly(input: $input, condition: $condition) {
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
export const deleteLolly = /* GraphQL */ `
  mutation DeleteLolly(
    $input: DeleteLollyInput!
    $condition: ModelLollyConditionInput
  ) {
    deleteLolly(input: $input, condition: $condition) {
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

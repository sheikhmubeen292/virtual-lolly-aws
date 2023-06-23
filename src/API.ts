/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLollyInput = {
  flavourTop: string,
  flavourMiddle: string,
  flavourBottom: string,
  recipientName: string,
  message: string,
  sendersName: string,
  lollyPath: string,
};

export type ModelLollyConditionInput = {
  flavourTop?: ModelStringInput | null,
  flavourMiddle?: ModelStringInput | null,
  flavourBottom?: ModelStringInput | null,
  recipientName?: ModelStringInput | null,
  message?: ModelStringInput | null,
  sendersName?: ModelStringInput | null,
  and?: Array< ModelLollyConditionInput | null > | null,
  or?: Array< ModelLollyConditionInput | null > | null,
  not?: ModelLollyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Lolly = {
  __typename: "Lolly",
  flavourTop: string,
  flavourMiddle: string,
  flavourBottom: string,
  recipientName: string,
  message: string,
  sendersName: string,
  lollyPath: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLollyInput = {
  flavourTop?: string | null,
  flavourMiddle?: string | null,
  flavourBottom?: string | null,
  recipientName?: string | null,
  message?: string | null,
  sendersName?: string | null,
  lollyPath: string,
};

export type DeleteLollyInput = {
  lollyPath: string,
};

export type ModelLollyFilterInput = {
  flavourTop?: ModelStringInput | null,
  flavourMiddle?: ModelStringInput | null,
  flavourBottom?: ModelStringInput | null,
  recipientName?: ModelStringInput | null,
  message?: ModelStringInput | null,
  sendersName?: ModelStringInput | null,
  lollyPath?: ModelStringInput | null,
  and?: Array< ModelLollyFilterInput | null > | null,
  or?: Array< ModelLollyFilterInput | null > | null,
  not?: ModelLollyFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelLollyConnection = {
  __typename: "ModelLollyConnection",
  items:  Array<Lolly | null >,
  nextToken?: string | null,
};

export type CreateLollyMutationVariables = {
  input: CreateLollyInput,
  condition?: ModelLollyConditionInput | null,
};

export type CreateLollyMutation = {
  createLolly?:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    recipientName: string,
    message: string,
    sendersName: string,
    lollyPath: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLollyMutationVariables = {
  input: UpdateLollyInput,
  condition?: ModelLollyConditionInput | null,
};

export type UpdateLollyMutation = {
  updateLolly?:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    recipientName: string,
    message: string,
    sendersName: string,
    lollyPath: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLollyMutationVariables = {
  input: DeleteLollyInput,
  condition?: ModelLollyConditionInput | null,
};

export type DeleteLollyMutation = {
  deleteLolly?:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    recipientName: string,
    message: string,
    sendersName: string,
    lollyPath: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLollyQueryVariables = {
  lollyPath: string,
};

export type GetLollyQuery = {
  getLolly?:  {
    __typename: "Lolly",
    flavourTop: string,
    flavourMiddle: string,
    flavourBottom: string,
    recipientName: string,
    message: string,
    sendersName: string,
    lollyPath: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLolliesQueryVariables = {
  lollyPath?: string | null,
  filter?: ModelLollyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLolliesQuery = {
  listLollies?:  {
    __typename: "ModelLollyConnection",
    items:  Array< {
      __typename: "Lolly",
      flavourTop: string,
      flavourMiddle: string,
      flavourBottom: string,
      recipientName: string,
      message: string,
      sendersName: string,
      lollyPath: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

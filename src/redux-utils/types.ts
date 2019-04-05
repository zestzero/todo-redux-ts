import { Reducer } from "redux";
import { TodoNamespaceShape } from "Todo/types";

export const TODO_NAMESPACE_KEY = "TODO_NAMESPACE";

export type FullStoreShape = {
  [TODO_NAMESPACE_KEY]: TodoNamespaceShape;
};

export type StoreShape = Partial<FullStoreShape>;

export type NamespaceKey = keyof StoreShape;

export type ReducerMap = Partial<
  { [k in NamespaceKey]: Reducer<FullStoreShape[k]> }
>;
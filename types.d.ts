import { Connection } from "mongoose";

/**
 * declare global will add mongoose var in global object of node
 */
declare global {
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

export {};

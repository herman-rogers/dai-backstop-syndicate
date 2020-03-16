/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface GemLikeInterface extends Interface {
  functions: {
    mint: TypedFunctionDescription<{
      encode([,]: [string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class GemLike extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GemLike;
  attach(addressOrName: string): GemLike;
  deployed(): Promise<GemLike>;

  on(event: EventFilter | string, listener: Listener): GemLike;
  once(event: EventFilter | string, listener: Listener): GemLike;
  addListener(eventName: EventFilter | string, listener: Listener): GemLike;
  removeAllListeners(eventName: EventFilter | string): GemLike;
  removeListener(eventName: any, listener: Listener): GemLike;

  interface: GemLikeInterface;

  functions: {
    mint(
      arg0: string,
      arg1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  mint(
    arg0: string,
    arg1: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    mint(arg0: string, arg1: BigNumberish): Promise<BigNumber>;
  };
}

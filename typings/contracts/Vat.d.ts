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

interface VatInterface extends Interface {
  functions: {
    Line: TypedFunctionDescription<{ encode([]: []): string }>;

    can: TypedFunctionDescription<{ encode([,]: [string, string]): string }>;

    dai: TypedFunctionDescription<{ encode([]: [string]): string }>;

    debt: TypedFunctionDescription<{ encode([]: []): string }>;

    gem: TypedFunctionDescription<{ encode([,]: [Arrayish, string]): string }>;

    ilks: TypedFunctionDescription<{ encode([]: [Arrayish]): string }>;

    live: TypedFunctionDescription<{ encode([]: []): string }>;

    sin: TypedFunctionDescription<{ encode([]: [string]): string }>;

    urns: TypedFunctionDescription<{ encode([,]: [Arrayish, string]): string }>;

    vice: TypedFunctionDescription<{ encode([]: []): string }>;

    wards: TypedFunctionDescription<{ encode([]: [string]): string }>;

    rely: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    deny: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    hope: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    nope: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    init: TypedFunctionDescription<{ encode([ilk]: [Arrayish]): string }>;

    file: TypedFunctionDescription<{
      encode([what, data]: [Arrayish, BigNumberish]): string;
    }>;

    cage: TypedFunctionDescription<{ encode([]: []): string }>;

    slip: TypedFunctionDescription<{
      encode([ilk, usr, wad]: [Arrayish, string, BigNumberish]): string;
    }>;

    flux: TypedFunctionDescription<{
      encode([ilk, src, dst, wad]: [
        Arrayish,
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    move: TypedFunctionDescription<{
      encode([src, dst, rad]: [string, string, BigNumberish]): string;
    }>;

    frob: TypedFunctionDescription<{
      encode([i, u, v, w, dink, dart]: [
        Arrayish,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    fork: TypedFunctionDescription<{
      encode([ilk, src, dst, dink, dart]: [
        Arrayish,
        string,
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    grab: TypedFunctionDescription<{
      encode([i, u, v, w, dink, dart]: [
        Arrayish,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    heal: TypedFunctionDescription<{ encode([rad]: [BigNumberish]): string }>;

    suck: TypedFunctionDescription<{
      encode([u, v, rad]: [string, string, BigNumberish]): string;
    }>;

    fold: TypedFunctionDescription<{
      encode([i, u, rate]: [Arrayish, string, BigNumberish]): string;
    }>;
  };

  events: {};
}

export class Vat extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Vat;
  attach(addressOrName: string): Vat;
  deployed(): Promise<Vat>;

  on(event: EventFilter | string, listener: Listener): Vat;
  once(event: EventFilter | string, listener: Listener): Vat;
  addListener(eventName: EventFilter | string, listener: Listener): Vat;
  removeAllListeners(eventName: EventFilter | string): Vat;
  removeListener(eventName: any, listener: Listener): Vat;

  interface: VatInterface;

  functions: {
    Line(): Promise<BigNumber>;

    can(arg0: string, arg1: string): Promise<BigNumber>;

    dai(arg0: string): Promise<BigNumber>;

    debt(): Promise<BigNumber>;

    gem(arg0: Arrayish, arg1: string): Promise<BigNumber>;

    ilks(
      arg0: Arrayish
    ): Promise<{
      Art: BigNumber;
      rate: BigNumber;
      spot: BigNumber;
      line: BigNumber;
      dust: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
    }>;

    live(): Promise<BigNumber>;

    sin(arg0: string): Promise<BigNumber>;

    urns(
      arg0: Arrayish,
      arg1: string
    ): Promise<{
      ink: BigNumber;
      art: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    vice(): Promise<BigNumber>;

    wards(arg0: string): Promise<BigNumber>;

    rely(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deny(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    hope(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    nope(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    init(
      ilk: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    file(
      what: Arrayish,
      data: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    slip(
      ilk: Arrayish,
      usr: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    flux(
      ilk: Arrayish,
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    move(
      src: string,
      dst: string,
      rad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    frob(
      i: Arrayish,
      u: string,
      v: string,
      w: string,
      dink: BigNumberish,
      dart: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fork(
      ilk: Arrayish,
      src: string,
      dst: string,
      dink: BigNumberish,
      dart: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    grab(
      i: Arrayish,
      u: string,
      v: string,
      w: string,
      dink: BigNumberish,
      dart: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    heal(
      rad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    suck(
      u: string,
      v: string,
      rad: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    fold(
      i: Arrayish,
      u: string,
      rate: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  Line(): Promise<BigNumber>;

  can(arg0: string, arg1: string): Promise<BigNumber>;

  dai(arg0: string): Promise<BigNumber>;

  debt(): Promise<BigNumber>;

  gem(arg0: Arrayish, arg1: string): Promise<BigNumber>;

  ilks(
    arg0: Arrayish
  ): Promise<{
    Art: BigNumber;
    rate: BigNumber;
    spot: BigNumber;
    line: BigNumber;
    dust: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
  }>;

  live(): Promise<BigNumber>;

  sin(arg0: string): Promise<BigNumber>;

  urns(
    arg0: Arrayish,
    arg1: string
  ): Promise<{
    ink: BigNumber;
    art: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  vice(): Promise<BigNumber>;

  wards(arg0: string): Promise<BigNumber>;

  rely(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deny(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  hope(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  nope(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  init(
    ilk: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  file(
    what: Arrayish,
    data: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  slip(
    ilk: Arrayish,
    usr: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  flux(
    ilk: Arrayish,
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  move(
    src: string,
    dst: string,
    rad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  frob(
    i: Arrayish,
    u: string,
    v: string,
    w: string,
    dink: BigNumberish,
    dart: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fork(
    ilk: Arrayish,
    src: string,
    dst: string,
    dink: BigNumberish,
    dart: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  grab(
    i: Arrayish,
    u: string,
    v: string,
    w: string,
    dink: BigNumberish,
    dart: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  heal(
    rad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  suck(
    u: string,
    v: string,
    rad: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  fold(
    i: Arrayish,
    u: string,
    rate: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    Line(): Promise<BigNumber>;

    can(arg0: string, arg1: string): Promise<BigNumber>;

    dai(arg0: string): Promise<BigNumber>;

    debt(): Promise<BigNumber>;

    gem(arg0: Arrayish, arg1: string): Promise<BigNumber>;

    ilks(arg0: Arrayish): Promise<BigNumber>;

    live(): Promise<BigNumber>;

    sin(arg0: string): Promise<BigNumber>;

    urns(arg0: Arrayish, arg1: string): Promise<BigNumber>;

    vice(): Promise<BigNumber>;

    wards(arg0: string): Promise<BigNumber>;

    rely(usr: string): Promise<BigNumber>;

    deny(usr: string): Promise<BigNumber>;

    hope(usr: string): Promise<BigNumber>;

    nope(usr: string): Promise<BigNumber>;

    init(ilk: Arrayish): Promise<BigNumber>;

    file(what: Arrayish, data: BigNumberish): Promise<BigNumber>;

    cage(): Promise<BigNumber>;

    slip(ilk: Arrayish, usr: string, wad: BigNumberish): Promise<BigNumber>;

    flux(
      ilk: Arrayish,
      src: string,
      dst: string,
      wad: BigNumberish
    ): Promise<BigNumber>;

    move(src: string, dst: string, rad: BigNumberish): Promise<BigNumber>;

    frob(
      i: Arrayish,
      u: string,
      v: string,
      w: string,
      dink: BigNumberish,
      dart: BigNumberish
    ): Promise<BigNumber>;

    fork(
      ilk: Arrayish,
      src: string,
      dst: string,
      dink: BigNumberish,
      dart: BigNumberish
    ): Promise<BigNumber>;

    grab(
      i: Arrayish,
      u: string,
      v: string,
      w: string,
      dink: BigNumberish,
      dart: BigNumberish
    ): Promise<BigNumber>;

    heal(rad: BigNumberish): Promise<BigNumber>;

    suck(u: string, v: string, rad: BigNumberish): Promise<BigNumber>;

    fold(i: Arrayish, u: string, rate: BigNumberish): Promise<BigNumber>;
  };
}

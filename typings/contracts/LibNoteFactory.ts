/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { LibNote } from "./LibNote";

export class LibNoteFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<LibNote> {
    return super.deploy() as Promise<LibNote>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): LibNote {
    return super.attach(address) as LibNote;
  }
  connect(signer: Signer): LibNoteFactory {
    return super.connect(signer) as LibNoteFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibNote {
    return new Contract(address, _abi, signerOrProvider) as LibNote;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "LogNote",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a7231582036ea7e75c85428e1841b3b96beb4cc75ecab7c3a2ea064bab157781d51c5f60964736f6c63430005100032";

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface TuringHelperInterface extends utils.Interface {
  functions: {
    "GetRandom(uint32,uint256)": FunctionFragment;
    "GetResponse(uint32,string,bytes)": FunctionFragment;
    "TuringRandom()": FunctionFragment;
    "TuringTx(string,bytes)": FunctionFragment;
    "addPermittedCaller(address)": FunctionFragment;
    "addPermittedCallers(address[])": FunctionFragment;
    "checkPermittedCaller(address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "permittedCaller(address)": FunctionFragment;
    "removePermittedCaller(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GetRandom"
      | "GetResponse"
      | "TuringRandom"
      | "TuringTx"
      | "addPermittedCaller"
      | "addPermittedCallers"
      | "checkPermittedCaller"
      | "initialize"
      | "owner"
      | "permittedCaller"
      | "removePermittedCaller"
      | "renounceOwnership"
      | "supportsInterface"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "GetRandom",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "GetResponse",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "TuringRandom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TuringTx",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addPermittedCaller",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addPermittedCallers",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPermittedCaller",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permittedCaller",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePermittedCaller",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "GetRandom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TuringRandom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TuringTx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addPermittedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPermittedCallers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPermittedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permittedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePermittedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AddPermittedCaller(address)": EventFragment;
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "CheckPermittedCaller(address,bool)": EventFragment;
    "OffchainRandom(uint256,uint256)": EventFragment;
    "OffchainResponse(uint256,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemovePermittedCaller(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddPermittedCaller"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CheckPermittedCaller"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OffchainRandom"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OffchainResponse"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovePermittedCaller"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AddPermittedCallerEventObject {
  _callerAddress: string;
}
export type AddPermittedCallerEvent = TypedEvent<
  [string],
  AddPermittedCallerEventObject
>;

export type AddPermittedCallerEventFilter =
  TypedEventFilter<AddPermittedCallerEvent>;

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface CheckPermittedCallerEventObject {
  _callerAddress: string;
  permitted: boolean;
}
export type CheckPermittedCallerEvent = TypedEvent<
  [string, boolean],
  CheckPermittedCallerEventObject
>;

export type CheckPermittedCallerEventFilter =
  TypedEventFilter<CheckPermittedCallerEvent>;

export interface OffchainRandomEventObject {
  version: BigNumber;
  random: BigNumber;
}
export type OffchainRandomEvent = TypedEvent<
  [BigNumber, BigNumber],
  OffchainRandomEventObject
>;

export type OffchainRandomEventFilter = TypedEventFilter<OffchainRandomEvent>;

export interface OffchainResponseEventObject {
  version: BigNumber;
  responseData: string;
}
export type OffchainResponseEvent = TypedEvent<
  [BigNumber, string],
  OffchainResponseEventObject
>;

export type OffchainResponseEventFilter =
  TypedEventFilter<OffchainResponseEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RemovePermittedCallerEventObject {
  _callerAddress: string;
}
export type RemovePermittedCallerEvent = TypedEvent<
  [string],
  RemovePermittedCallerEventObject
>;

export type RemovePermittedCallerEventFilter =
  TypedEventFilter<RemovePermittedCallerEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface TuringHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TuringHelperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    GetRandom(
      rType: BigNumberish,
      _random: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    GetResponse(
      rType: BigNumberish,
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    TuringRandom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    TuringTx(
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPermittedCallers(
      _callerAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    permittedCaller(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removePermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  GetRandom(
    rType: BigNumberish,
    _random: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  GetResponse(
    rType: BigNumberish,
    _url: string,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  TuringRandom(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  TuringTx(
    _url: string,
    _payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPermittedCaller(
    _callerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPermittedCallers(
    _callerAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkPermittedCaller(
    _callerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  permittedCaller(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removePermittedCaller(
    _callerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    GetRandom(
      rType: BigNumberish,
      _random: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetResponse(
      rType: BigNumberish,
      _url: string,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    TuringRandom(overrides?: CallOverrides): Promise<BigNumber>;

    TuringTx(
      _url: string,
      _payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    addPermittedCaller(
      _callerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addPermittedCallers(
      _callerAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    checkPermittedCaller(
      _callerAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    permittedCaller(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removePermittedCaller(
      _callerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddPermittedCaller(address)"(
      _callerAddress?: null
    ): AddPermittedCallerEventFilter;
    AddPermittedCaller(_callerAddress?: null): AddPermittedCallerEventFilter;

    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "CheckPermittedCaller(address,bool)"(
      _callerAddress?: null,
      permitted?: null
    ): CheckPermittedCallerEventFilter;
    CheckPermittedCaller(
      _callerAddress?: null,
      permitted?: null
    ): CheckPermittedCallerEventFilter;

    "OffchainRandom(uint256,uint256)"(
      version?: null,
      random?: null
    ): OffchainRandomEventFilter;
    OffchainRandom(version?: null, random?: null): OffchainRandomEventFilter;

    "OffchainResponse(uint256,bytes)"(
      version?: null,
      responseData?: null
    ): OffchainResponseEventFilter;
    OffchainResponse(
      version?: null,
      responseData?: null
    ): OffchainResponseEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RemovePermittedCaller(address)"(
      _callerAddress?: null
    ): RemovePermittedCallerEventFilter;
    RemovePermittedCaller(
      _callerAddress?: null
    ): RemovePermittedCallerEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    GetRandom(
      rType: BigNumberish,
      _random: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    GetResponse(
      rType: BigNumberish,
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    TuringRandom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    TuringTx(
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPermittedCallers(
      _callerAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    permittedCaller(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removePermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GetRandom(
      rType: BigNumberish,
      _random: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    GetResponse(
      rType: BigNumberish,
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    TuringRandom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    TuringTx(
      _url: string,
      _payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPermittedCallers(
      _callerAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permittedCaller(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePermittedCaller(
      _callerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

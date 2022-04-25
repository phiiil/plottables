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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface MinterAbiInterface extends utils.Interface {
  functions: {
    "artistSetBonusContractAddress(uint256,address)": FunctionFragment;
    "artistToggleBonus(uint256)": FunctionFragment;
    "checkYourAllowanceOfProjectERC20(uint256)": FunctionFragment;
    "contractFilterProject(uint256)": FunctionFragment;
    "genArtCoreContract()": FunctionFragment;
    "getYourBalanceOfProjectERC20(uint256)": FunctionFragment;
    "ownerAddress()": FunctionFragment;
    "ownerPercentage()": FunctionFragment;
    "projectIdToBonus(uint256)": FunctionFragment;
    "projectIdToBonusContractAddress(uint256)": FunctionFragment;
    "projectMaxHasBeenInvoked(uint256)": FunctionFragment;
    "projectMaxInvocations(uint256)": FunctionFragment;
    "projectMintCounter(address,uint256)": FunctionFragment;
    "projectMintLimit(uint256)": FunctionFragment;
    "purchase(uint256)": FunctionFragment;
    "purchaseTo(address,uint256)": FunctionFragment;
    "setOwnerAddress(address)": FunctionFragment;
    "setOwnerPercentage(uint256)": FunctionFragment;
    "setProjectMaxInvocations(uint256)": FunctionFragment;
    "setProjectMintLimit(uint256,uint8)": FunctionFragment;
    "toggleContractFilter(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "artistSetBonusContractAddress"
      | "artistToggleBonus"
      | "checkYourAllowanceOfProjectERC20"
      | "contractFilterProject"
      | "genArtCoreContract"
      | "getYourBalanceOfProjectERC20"
      | "ownerAddress"
      | "ownerPercentage"
      | "projectIdToBonus"
      | "projectIdToBonusContractAddress"
      | "projectMaxHasBeenInvoked"
      | "projectMaxInvocations"
      | "projectMintCounter"
      | "projectMintLimit"
      | "purchase"
      | "purchaseTo"
      | "setOwnerAddress"
      | "setOwnerPercentage"
      | "setProjectMaxInvocations"
      | "setProjectMintLimit"
      | "toggleContractFilter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "artistSetBonusContractAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "artistToggleBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkYourAllowanceOfProjectERC20",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractFilterProject",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "genArtCoreContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYourBalanceOfProjectERC20",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToBonus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectIdToBonusContractAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMaxHasBeenInvoked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMaxInvocations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMintCounter",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectMintLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseTo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProjectMaxInvocations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProjectMintLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleContractFilter",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "artistSetBonusContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "artistToggleBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkYourAllowanceOfProjectERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractFilterProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genArtCoreContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYourBalanceOfProjectERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToBonus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectIdToBonusContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMaxHasBeenInvoked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMaxInvocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMintCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectMintLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "purchaseTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProjectMaxInvocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProjectMintLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleContractFilter",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MinterAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MinterAbiInterface;

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
    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    genArtCoreContract(overrides?: CallOverrides): Promise<[string]>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ownerAddress(overrides?: CallOverrides): Promise<[string]>;

    ownerPercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projectMaxHasBeenInvoked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    projectMaxInvocations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    purchaseTo(
      _to: string,
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerAddress(
      _ownerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerPercentage(
      _ownerPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProjectMaxInvocations(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  artistSetBonusContractAddress(
    _projectId: BigNumberish,
    _bonusContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  artistToggleBonus(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkYourAllowanceOfProjectERC20(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractFilterProject(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  genArtCoreContract(overrides?: CallOverrides): Promise<string>;

  getYourBalanceOfProjectERC20(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerAddress(overrides?: CallOverrides): Promise<string>;

  ownerPercentage(overrides?: CallOverrides): Promise<BigNumber>;

  projectIdToBonus(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  projectIdToBonusContractAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  projectMaxHasBeenInvoked(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  projectMaxInvocations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectMintCounter(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  projectMintLimit(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  purchase(
    _projectId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  purchaseTo(
    _to: string,
    _projectId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerAddress(
    _ownerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerPercentage(
    _ownerPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProjectMaxInvocations(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProjectMintLimit(
    _projectId: BigNumberish,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleContractFilter(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    genArtCoreContract(overrides?: CallOverrides): Promise<string>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerAddress(overrides?: CallOverrides): Promise<string>;

    ownerPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    projectMaxHasBeenInvoked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    projectMaxInvocations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchase(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchaseTo(
      _to: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setOwnerAddress(
      _ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwnerPercentage(
      _ownerPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProjectMaxInvocations(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    genArtCoreContract(overrides?: CallOverrides): Promise<BigNumber>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    ownerPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMaxHasBeenInvoked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMaxInvocations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    purchaseTo(
      _to: string,
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerAddress(
      _ownerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerPercentage(
      _ownerPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProjectMaxInvocations(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    artistSetBonusContractAddress(
      _projectId: BigNumberish,
      _bonusContractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    artistToggleBonus(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkYourAllowanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractFilterProject(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genArtCoreContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYourBalanceOfProjectERC20(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectIdToBonus(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectIdToBonusContractAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMaxHasBeenInvoked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMaxInvocations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMintCounter(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectMintLimit(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    purchase(
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    purchaseTo(
      _to: string,
      _projectId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerAddress(
      _ownerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerPercentage(
      _ownerPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProjectMaxInvocations(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProjectMintLimit(
      _projectId: BigNumberish,
      _limit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleContractFilter(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

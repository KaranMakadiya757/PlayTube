// import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
// import type { AxiosError, AxiosResponse } from "axios";


export interface LoaderProps {
    size: number;
    color: string;
    width?: string;
}

// export type PostAPIHook<
//     TVariables = any,
//     ResponseData = any,
//     TError = { message: string }
// > = UseMutationResult<
//     AxiosResponse<ResponseData>,
//     AxiosError<TError>,
//     TVariables
// >;

// export type GetAPIHook<
//     ResponseData = any,
//     TError = { message: string }
// > = UseQueryResult<
//     AxiosResponse<ResponseData>,
//     AxiosError<TError>
// >;

// export interface Column {
//     id: string;
//     heading: string;
//     type: string;
// }

// export interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ArtworkFieldsFragment = { __typename: 'Artwork', id: string, title: string | null, date: string | null, image: { __typename: 'Image', url: string | null } | null };

export type GetRandomArtworkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRandomArtworkQuery = { discoverArtworks: { __typename: 'ArtworkConnection', edges: Array<{ __typename: 'ArtworkEdge', node: { __typename: 'Artwork', id: string, title: string | null, date: string | null, image: { __typename: 'Image', url: string | null } | null } | null } | null> | null } | null };

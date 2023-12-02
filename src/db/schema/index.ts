import {mergeTypeDefs} from "@graphql-tools/merge"

import { usersGQLSchema } from "./user"

export const schemas = mergeTypeDefs([usersGQLSchema])
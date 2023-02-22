import { apiClient } from "../helpers/apiClient";

import { ApiClientMethodTypes } from "../constants/ApiClientMethodTypes";

export const useRequest = () => {
  const callApiRequest = async (method, path, config, body) => {
    let response = null;

    if (
      method === ApiClientMethodTypes.get ||
      method === ApiClientMethodTypes.delete
    ) {
      response = await apiClient[method](
        path,
        config !== "undefind" ? config : {},
      );
    } else if (
      method === ApiClientMethodTypes.post ||
      method === ApiClientMethodTypes.put ||
      method === ApiClientMethodTypes.patch
    ) {
      response = await apiClient[method](
        path,

        body,
        config !== "undefind" ? config : {},
      );
    }
    if (response) {
      return response.data;
    }
  };

  return { callApiRequest };
};

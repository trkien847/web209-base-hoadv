export type Use = {
  id: string;
  email: string;
  password: string;
};

export type UseInputs = Omit<Use, "id">;
